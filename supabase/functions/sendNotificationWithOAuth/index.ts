import { GoogleAuth } from "https://deno.land/x/google_api@v1.2/google_auth.ts";

// Set up service account variables from environment variables
const clientEmail = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL");
const privateKey = Deno.env
  .get("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY")
  .replace(/\\n/g, "\n");

// Function to get OAuth token
async function getOAuthToken() {
  try {
    const ga = new GoogleAuth({
      email: clientEmail,
      key: privateKey,
      scope: ["https://www.googleapis.com/auth/firebase.messaging"],
    });
    const jwtToken = await ga.getToken();

    return jwtToken;
  } catch (error) {
    console.error("ERROR getOAuthToken ", error);
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
        notification: {
          title: "탄약 세탁소",
          body: `${appliance_location}번${type}가 완료 되었습니다.`,
        },
      },
    };
    // request to send fcm
    const response = await fetch(
      "https://fcm.googleapis.com/v1/projects/tanyak-laundry-7b673/messages:send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );
    if (!response.ok) {
      console.error(response);
      throw new Error(`[ERROR] to send fcm message`);
    }

    return new Response("Notification send successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending notification", error);
    return new Response(`[Edge-function] Error: ${error.message}`);
  }
});
