export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone } = req.body;

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          SMS: `+91${phone}`,
        },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const text = await response.text();

    console.log("========== BREVO ==========");
    console.log("Status:", response.status);
    console.log("Response:", text);
    console.log("===========================");

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: text || "Brevo API Error",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact added successfully to Brevo.",
    });
  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
