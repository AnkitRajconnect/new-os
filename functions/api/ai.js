export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { message, context: systemCtx } = await request.json();

    if (!env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY not set" }), {
        status: 500, headers: { "Content-Type": "application/json" }
      });
    }

    const prompt = systemCtx
      ? `${systemCtx}\n\nUser: ${message}`
      : message;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return new Response(JSON.stringify({ reply }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
