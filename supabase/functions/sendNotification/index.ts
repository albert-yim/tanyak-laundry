import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const FCM_SERVER_KEY =
  "BEpwd4I6sSBDTDV9Mvq7-Rb6cn_0BfHazl3ieMNSsSmjACdRDIETP2fZTy73nrhdF-9mbVWwB9dD7vK0OLHvmYI";

Deno.serve(async (req: any) => {
  try {
    const { fcm_token, appliance_type, appliance_location } = await req.json();
    console.log("test console");
    console.warn("test warn console");
    //
    // const type = appliance_type === "dryer" ? "건조기" : "세탁기";
    // const payload = {
    //   notification: {
    //     title: "탄약 세탁소",
    //     body: `${appliance_location}번${type}가 완료 되었습니다.`,
    //   },
    //   to: fcm_token,
    // };

    throw new Error(`I don't know ${appliance_type}`);
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: `key=${FCM_SERVER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`[Edge-function] Failed to send noti ${fcm_token}`);
    }

    return new Response("Notification send successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending notification", error);
    return new Response(`[Edge-function] Error: ${error.message}`);
  }
});
