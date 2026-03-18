async function runAI() {
  let input = document.getElementById("aiInput").value;
  let out = document.getElementById("aiOutput");

  if (!input) return;

  out.innerText = "Thinking...";

  try {
    let res = await fetch("https://new-os-2mj1.vercel.app/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    let data = await res.json();
    out.innerText = data.reply || data.error;

  } catch (err) {
    out.innerText = "Connection failed. Check Vercel.";
  }
}
