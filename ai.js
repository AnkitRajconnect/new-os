async function runAI(){
  let input = document.getElementById("aiInput").value;
  let out = document.getElementById("aiOutput");

  if (!input) return; // Stops it from sending empty messages
  
  out.innerText = "Thinking...";

  try {
    // Your exact Vercel link is correctly formatted right here:
    let res = await fetch("https://new-os-2mj1.vercel.app/api/ai", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ message: input })
    });

    let data = await res.json();
    
    // Shows the AI's reply, or the exact error if it fails
    out.innerText = data.reply || data.error; 
    
  } catch (err) {
    out.innerText = "Connection failed. Check Vercel.";
  }
}async function runAI(){
  let input=document.getElementById("aiInput").value;
  let out=document.getElementById("aiOutput");

  out.innerText="Thinking...";

  let res=await fetch("https://YOUR-VERCEL-APP.vercel.app/api/ai",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({message:input})
  });

  let data=await res.json();
  out.innerText=data.reply;
}
