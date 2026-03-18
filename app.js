let state = {
  users: 120,
  clicks: 25,
  conversions: 3,
  tracking: false,
  events: [],
  view: "overview"
};

function setView(view){
  state.view = view;
  document.getElementById("title").innerText = view;
  render();
}

function render(){
  const content = document.getElementById("content");

  if(state.view==="overview"){
    content.innerHTML = `
      <div class="cards">
        <div class="card">
          <div class="metric">Users</div>
          <div class="metric-value">${state.users}</div>
        </div>
        <div class="card">
          <div class="metric">Clicks</div>
          <div class="metric-value">${state.clicks}</div>
        </div>
        <div class="card">
          <div class="metric">Conversions</div>
          <div class="metric-value">${state.conversions}</div>
        </div>
      </div>
    `;
  }

  if(state.view==="realtime"){
    content.innerHTML = `
      <div class="card">
        <h3>Live Users: ${state.users}</h3>
        <button class="action" onclick="traffic()">Simulate Traffic</button>
      </div>
    `;
  }

  if(state.view==="events"){
    let rows = state.events.map(e=>`<tr><td>${e}</td></tr>`).join("");
    content.innerHTML = `
      <table>
        <tr><th>Events</th></tr>
        ${rows}
      </table>
      <button class="action" onclick="clickAd()">Simulate Click</button>
    `;
  }

  if(state.view==="conversions"){
    content.innerHTML = `
      <div class="card">
        <h3>Conversions: ${state.conversions}</h3>
        <button class="action" onclick="convert()">Convert User</button>
        <button class="action" onclick="enableTracking()">Enable Tracking</button>
      </div>
    `;
  }

  if(state.view==="job"){
    content.innerHTML = `
      <div class="card">
        <h2>Job Simulation</h2>
        <p>Problem: Low conversions</p>
        <button class="action" onclick="enableTracking()">Fix Tracking</button>
        <button class="action" onclick="analyze()">Analyze</button>
        <p id="job"></p>
      </div>
    `;
  }

  if(state.view==="ai"){
    content.innerHTML = `
      <div class="card">
        <input id="aiInput" placeholder="Ask about analytics..." />
        <button class="action" onclick="runAI()">Ask AI</button>
        <p id="aiOutput"></p>
      </div>
    `;
  }
}

function traffic(){ state.users+=10; render(); }
function clickAd(){ state.clicks++; state.events.push("Ad Click"); render(); }

function convert(){
  if(!state.tracking){ alert("Enable tracking first!"); return;}
  state.conversions++; render();
}

function enableTracking(){
  state.tracking=true;
  alert("Tracking Enabled");
}

function analyze(){
  document.getElementById("job").innerText =
    state.conversions<5 ? "Fix funnel + improve targeting" : "Performance is strong";
}

setInterval(()=>{
  state.users+=2;
  render();
},4000);

document.addEventListener("DOMContentLoaded", render);
