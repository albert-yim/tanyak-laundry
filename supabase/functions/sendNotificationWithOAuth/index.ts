import { GoogleAuth } from "https://deno.land/x/google_api@v1.2/google_auth.ts";

// Set up service account variables from environment variables
const clientEmail = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL");
const privateKey = Deno.env
  .get("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY")
  .replace(/\\n/g, "\n");
const tokenUri = "https://oauth2.googleapis.com/token";

// Function to get OAuth token
async function getOAuthToken() {
  try {
    const ga = new GoogleAuth({
      email: clientEmail,
      key: privateKey,
      scope: ["https://www.googleapis.com/auth/firebase.messaging"],
    });
    const jwtToken = await ga.getToken();

    //
    // if (!jwtToken.ok) {
    //   throw new Error("jwtToken error ");
    // }
    return jwtToken;

    console.log("response");
    const response = await fetch(tokenUri, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwtToken,
      }).toString(),
      // body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwtToken}`,
    });

    console.log(response);
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.log("ERROR getOAuthToken ", error);
    return new Response(`[getOAuthToken] Error: ${error.message}`);
  }
}

// Function to send FCM message
Deno.serve(async (req: any) => {
  try {
    const { fcm_token, appliance_type, appliance_location } = await req.json();
    const token = await getOAuthToken();

    const type = appliance_type === "dryer" ? "건조기" : "세탁기";
    const payload = {
      message: {
        token: fcm_token,
        // topic: "tanyak",
        notification: {
          title: "탄약 세탁소",
          body: `${appliance_location}번${type}가 완료 되었습니다.`,
        },
      },
    };
    // return new Response(`[Edge-function] Error: `);
    const response = await fetch(
      "https://fcm.googleapis.com/v1/projects/tanyak-laundry-7b673/messages:send",
      // "https://fcm.googleapis.com/v1/projects/your-project-id/messages:send"
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    console.log(response);

    return new Response("Notification send successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending notification", error);
    return new Response(`[Edge-function] Error: ${error.message}`);
  }
});
