export default async function handler(req, res) {
  const payload = req.body;

  try {
    await fetch("https://your-n8n-endpoint.com/webhook/redirect-track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // allow CORS
      },
      body: JSON.stringify(payload),
    });

    return res.status(200).json({ status: "ok" });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).json({ status: "error", message: err.message });
  }
}
