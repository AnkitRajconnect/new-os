async function runAI(){
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
