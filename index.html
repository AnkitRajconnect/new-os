<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SkillOS – Learn Real Tools by Doing</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0f;
  --surface:#12121a;
  --surface2:#1c1c28;
  --border:rgba(255,255,255,.08);
  --text:#f0f0f8;
  --text2:#8888aa;
  --accent:#6c63ff;
  --accent2:#ff6584;
  --accent3:#43e97b;
  --accent4:#f7971e;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;overflow-x:hidden;min-height:100vh}

/* NOISE TEXTURE */
body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events:none;z-index:0;opacity:.4;
}

/* GLOW ORBS */
.orb{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
.orb1{width:600px;height:600px;background:radial-gradient(circle,rgba(108,99,255,.15),transparent 70%);top:-200px;left:-200px}
.orb2{width:500px;height:500px;background:radial-gradient(circle,rgba(255,101,132,.1),transparent 70%);bottom:-100px;right:-100px}
.orb3{width:400px;height:400px;background:radial-gradient(circle,rgba(67,233,123,.08),transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%)}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;gap:24px;
  padding:16px 48px;
  background:rgba(10,10,15,.8);
  backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);
}
.nav-logo{
  font-family:'Syne',sans-serif;font-weight:800;font-size:20px;
  background:linear-gradient(135deg,#6c63ff,#ff6584);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  letter-spacing:-0.5px;
}
.nav-spacer{flex:1}
.nav-link{color:var(--text2);font-size:14px;cursor:pointer;transition:color .2s;text-decoration:none}
.nav-link:hover{color:var(--text)}
.nav-cta{
  background:var(--accent);color:#fff;
  border:none;border-radius:8px;
  padding:8px 20px;font-size:14px;font-weight:500;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:opacity .2s;
}
.nav-cta:hover{opacity:.85}

/* HERO */
.hero{
  position:relative;z-index:1;
  min-height:100vh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  text-align:center;padding:120px 24px 80px;
}
.hero-badge{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(108,99,255,.15);
  border:1px solid rgba(108,99,255,.3);
  border-radius:100px;padding:6px 16px;
  font-size:12px;font-weight:500;color:var(--accent);
  margin-bottom:32px;letter-spacing:.5px;text-transform:uppercase;
}
.hero-badge span{width:6px;height:6px;background:var(--accent);border-radius:50%;animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
h1{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:clamp(42px,7vw,88px);
  line-height:1.0;letter-spacing:-3px;
  margin-bottom:24px;
}
h1 .line1{display:block;color:var(--text)}
h1 .line2{
  display:block;
  background:linear-gradient(135deg,#6c63ff 0%,#ff6584 50%,#f7971e 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.hero-sub{
  font-size:18px;color:var(--text2);max-width:560px;
  line-height:1.6;margin-bottom:48px;font-weight:300;
}
.hero-sub strong{color:var(--text);font-weight:500}
.hero-btns{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin-bottom:64px}
.btn-primary{
  background:linear-gradient(135deg,var(--accent),#8b5cf6);
  color:#fff;border:none;border-radius:12px;
  padding:14px 32px;font-size:16px;font-weight:500;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:transform .2s,box-shadow .2s;
  box-shadow:0 8px 32px rgba(108,99,255,.3);
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(108,99,255,.4)}
.btn-secondary{
  background:transparent;color:var(--text);
  border:1px solid var(--border);border-radius:12px;
  padding:14px 32px;font-size:16px;font-weight:500;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:border-color .2s,background .2s;
}
.btn-secondary:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.04)}

/* STATS */
.stats{display:flex;gap:48px;flex-wrap:wrap;justify-content:center;margin-bottom:0}
.stat{text-align:center}
.stat-num{font-family:'Syne',sans-serif;font-size:32px;font-weight:700}
.stat-label{font-size:13px;color:var(--text2);margin-top:4px}

/* HOW IT WORKS */
.section{position:relative;z-index:1;padding:80px 48px;max-width:1200px;margin:0 auto}
.section-tag{
  font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;
  color:var(--accent);margin-bottom:16px;
}
.section-title{
  font-family:'Syne',sans-serif;font-weight:700;
  font-size:clamp(28px,4vw,48px);letter-spacing:-1.5px;
  margin-bottom:16px;line-height:1.1;
}
.section-sub{font-size:16px;color:var(--text2);max-width:500px;line-height:1.6;margin-bottom:48px}

/* HOW IT WORKS STEPS */
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px}
.step{
  background:var(--surface);border:1px solid var(--border);
  border-radius:16px;padding:28px;
  transition:border-color .2s,transform .2s;
  position:relative;overflow:hidden;
}
.step::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(108,99,255,.05),transparent);
  opacity:0;transition:opacity .3s;
}
.step:hover{border-color:rgba(108,99,255,.3);transform:translateY(-4px)}
.step:hover::before{opacity:1}
.step-num{
  font-family:'Syne',sans-serif;font-size:48px;font-weight:800;
  color:rgba(108,99,255,.2);margin-bottom:16px;line-height:1;
}
.step-title{font-family:'Syne',sans-serif;font-weight:600;font-size:18px;margin-bottom:8px}
.step-desc{font-size:14px;color:var(--text2);line-height:1.6}

/* SKILLS GRID */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}
.skill-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:20px;overflow:hidden;
  transition:transform .2s,border-color .2s,box-shadow .2s;
  cursor:pointer;text-decoration:none;color:inherit;display:block;
}
.skill-card:hover{
  transform:translateY(-6px);
  border-color:rgba(255,255,255,.15);
  box-shadow:0 20px 60px rgba(0,0,0,.4);
}
.skill-card-top{
  height:160px;display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;font-size:64px;
}
.skill-card-body{padding:20px 24px 24px}
.skill-card-tag{
  display:inline-block;
  font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
  padding:3px 10px;border-radius:100px;margin-bottom:10px;
}
.skill-card-title{font-family:'Syne',sans-serif;font-weight:700;font-size:20px;margin-bottom:6px}
.skill-card-desc{font-size:13px;color:var(--text2);line-height:1.5;margin-bottom:16px}
.skill-card-footer{display:flex;align-items:center;justify-content:space-between}
.skill-card-cases{font-size:12px;color:var(--text2)}
.skill-card-btn{
  display:flex;align-items:center;gap:6px;
  font-size:13px;font-weight:500;color:var(--text);
  background:rgba(255,255,255,.06);border-radius:8px;
  padding:6px 14px;transition:background .2s;
}
.skill-card:hover .skill-card-btn{background:rgba(255,255,255,.12)}

/* LIVE / COMING SOON */
.badge-live{background:rgba(67,233,123,.15);color:var(--accent3)}
.badge-soon{background:rgba(255,255,255,.06);color:var(--text2)}
.badge-beta{background:rgba(247,151,30,.15);color:var(--accent4)}

/* CASE STUDY PREVIEW */
.case-preview{
  background:var(--surface);border:1px solid var(--border);
  border-radius:20px;padding:32px;
  display:grid;grid-template-columns:1fr 1fr;gap:32px;
  align-items:center;
}
@media(max-width:700px){.case-preview{grid-template-columns:1fr}}
.case-step{
  display:flex;gap:16px;margin-bottom:20px;
  padding-bottom:20px;border-bottom:1px solid var(--border);
}
.case-step:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}
.case-step-icon{
  width:40px;height:40px;border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  font-size:20px;flex-shrink:0;
}
.case-step-text h4{font-size:14px;font-weight:500;margin-bottom:4px}
.case-step-text p{font-size:12px;color:var(--text2);line-height:1.5}
.case-screen{
  background:var(--surface2);border:1px solid var(--border);
  border-radius:12px;padding:20px;font-size:12px;
}
.case-screen-header{display:flex;gap:6px;margin-bottom:16px}
.dot{width:10px;height:10px;border-radius:50%}
.dot1{background:#ff5f57}.dot2{background:#ffbd2e}.dot3{background:#28c840}
.ai-bubble{
  background:rgba(108,99,255,.15);border:1px solid rgba(108,99,255,.2);
  border-radius:12px 12px 12px 0;padding:10px 14px;
  font-size:12px;color:var(--text);margin-bottom:8px;line-height:1.5;max-width:90%;
}
.highlight-box{
  border:2px dashed rgba(108,99,255,.5);border-radius:8px;
  padding:10px;margin:8px 0;
  background:rgba(108,99,255,.08);
  font-size:11px;color:var(--text2);
}
.action-chip{
  display:inline-flex;align-items:center;gap:6px;
  background:rgba(67,233,123,.1);border:1px solid rgba(67,233,123,.2);
  color:var(--accent3);border-radius:100px;
  padding:4px 12px;font-size:11px;font-weight:500;margin-top:8px;
}

/* PRICING */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.pricing-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:20px;padding:32px;
}
.pricing-card.featured{
  border-color:rgba(108,99,255,.4);
  background:linear-gradient(135deg,rgba(108,99,255,.08),rgba(139,92,246,.05));
}
.pricing-price{
  font-family:'Syne',sans-serif;font-size:48px;font-weight:800;margin:16px 0 8px;
  letter-spacing:-2px;
}
.pricing-price span{font-size:20px;font-weight:400;color:var(--text2)}
.pricing-desc{font-size:14px;color:var(--text2);margin-bottom:24px;line-height:1.5}
.pricing-feature{
  display:flex;align-items:center;gap:10px;
  font-size:13px;margin-bottom:12px;color:var(--text2);
}
.pricing-feature::before{content:'✓';color:var(--accent3);font-weight:700;flex-shrink:0}
.pricing-cta{
  width:100%;margin-top:24px;padding:12px;
  border-radius:10px;font-size:14px;font-weight:500;
  cursor:pointer;font-family:'DM Sans',sans-serif;
  transition:opacity .2s;
}
.pricing-cta-primary{background:var(--accent);color:#fff;border:none}
.pricing-cta-secondary{background:transparent;color:var(--text);border:1px solid var(--border)}

/* FOOTER */
footer{
  position:relative;z-index:1;
  border-top:1px solid var(--border);
  padding:40px 48px;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:16px;
}
.footer-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:18px;
  background:linear-gradient(135deg,#6c63ff,#ff6584);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.footer-text{font-size:13px;color:var(--text2)}

/* ANIMATIONS */
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
.fade-up{animation:fadeUp .6s ease forwards}
.fade-up-1{animation-delay:.1s;opacity:0}
.fade-up-2{animation-delay:.2s;opacity:0}
.fade-up-3{animation-delay:.3s;opacity:0}
.fade-up-4{animation-delay:.4s;opacity:0}

/* DIVIDER */
.divider{border:none;border-top:1px solid var(--border);margin:0}
</style>
</head>
<body>

<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>

<!-- NAV -->
<nav>
  <div class="nav-logo">SkillOS</div>
  <div class="nav-spacer"></div>
  <a class="nav-link" href="#skills">Skills</a>
  <a class="nav-link" href="#how">How it works</a>
  <a class="nav-link" href="#pricing">Pricing</a>
  <button class="nav-cta" onclick="document.getElementById('skills').scrollIntoView({behavior:'smooth'})">Start learning free →</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-badge"><span></span>Built for the next generation of professionals</div>
  <h1 class="fade-up fade-up-1">
    <span class="line1">Learn real tools.</span>
    <span class="line2">By actually using them.</span>
  </h1>
  <p class="hero-sub fade-up fade-up-2">
    Simulators of <strong>Figma, GA4, Canva, Social Media</strong> and more — with an AI tutor that doesn't just explain, it <strong>guides you through real cases</strong> on the actual dashboard.
  </p>
  <div class="hero-btns fade-up fade-up-3">
    <button class="btn-primary" onclick="window.location.href='skills/ga4.html'">Try GA4 Simulator →</button>
    <button class="btn-secondary" onclick="document.getElementById('how').scrollIntoView({behavior:'smooth'})">See how it works</button>
  </div>
  <div class="stats fade-up fade-up-4">
    <div class="stat">
      <div class="stat-num" style="background:linear-gradient(135deg,#6c63ff,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">6</div>
      <div class="stat-label">Skill simulators</div>
    </div>
    <div class="stat">
      <div class="stat-num" style="background:linear-gradient(135deg,#43e97b,#38f9d7);-webkit-background-clip:text;-webkit-text-fill-color:transparent">$0</div>
      <div class="stat-label">To start learning</div>
    </div>
    <div class="stat">
      <div class="stat-num" style="background:linear-gradient(135deg,#f7971e,#ffd200);-webkit-background-clip:text;-webkit-text-fill-color:transparent">∞</div>
      <div class="stat-label">AI-guided cases</div>
    </div>
    <div class="stat">
      <div class="stat-num" style="background:linear-gradient(135deg,#ff6584,#ff8e53);-webkit-background-clip:text;-webkit-text-fill-color:transparent">0</div>
      <div class="stat-label">Boring videos</div>
    </div>
  </div>
</section>

<hr class="divider">

<!-- HOW IT WORKS -->
<section class="section" id="how">
  <div class="section-tag">The method</div>
  <div class="section-title">Not a course. Not a video.<br>A real tool. With a guide.</div>
  <div class="section-sub">Every skill simulator is a pixel-perfect clone of the real tool. Your AI tutor lives inside it — pointing, guiding, quizzing.</div>

  <div class="steps">
    <div class="step">
      <div class="step-num">01</div>
      <div class="step-title">Pick a skill & a case</div>
      <div class="step-desc">Choose from real-world scenarios. "You're a marketing manager. Traffic dropped 40%. Find out why using GA4." No theory — straight into the problem.</div>
    </div>
    <div class="step">
      <div class="step-num">02</div>
      <div class="step-title">AI tutor takes over</div>
      <div class="step-desc">The tutor highlights parts of the dashboard, tells you where to click, explains what each number means in context of YOUR case. It controls the UI.</div>
    </div>
    <div class="step">
      <div class="step-num">03</div>
      <div class="step-title">You do the work</div>
      <div class="step-desc">The tutor watches what you click. If you go wrong, it course-corrects. If you go right, it celebrates and moves to the next step. Learn by doing, not watching.</div>
    </div>
    <div class="step">
      <div class="step-num">04</div>
      <div class="step-title">Take the skill to the real world</div>
      <div class="step-desc">By the end of a case, you've solved a real problem in a real interface. You don't just know the theory — you have muscle memory.</div>
    </div>
  </div>
</section>

<!-- AI TUTOR PREVIEW -->
<section class="section">
  <div class="section-tag">The AI tutor</div>
  <div class="section-title">It doesn't just chat.<br>It interacts.</div>
  <div class="section-sub">Watch how the AI guides a learner through a real case study — pointing at the dashboard, not just talking about it.</div>

  <div class="case-preview">
    <div>
      <div class="case-step">
        <div class="case-step-icon" style="background:rgba(108,99,255,.15)">📋</div>
        <div class="case-step-text">
          <h4>Case assigned</h4>
          <p>You are the new marketing analyst at Acme Inc. Your boss says traffic is down 40% this month. Find the cause using GA4.</p>
        </div>
      </div>
      <div class="case-step">
        <div class="case-step-icon" style="background:rgba(67,233,123,.15)">👆</div>
        <div class="case-step-text">
          <h4>AI highlights the dashboard</h4>
          <p>The tutor spotlights the Acquisition report and says "Start here — let's see where the traffic loss is coming from."</p>
        </div>
      </div>
      <div class="case-step">
        <div class="case-step-icon" style="background:rgba(247,151,30,.15)">🔍</div>
        <div class="case-step-text">
          <h4>You investigate</h4>
          <p>You click Organic Search. Numbers are fine. You click Paid Search. It's gone. AI: "Good find! Now click the date comparison to confirm when it stopped."</p>
        </div>
      </div>
      <div class="case-step">
        <div class="case-step-icon" style="background:rgba(255,101,132,.15)">🎯</div>
        <div class="case-step-text">
          <h4>Case solved + lesson</h4>
          <p>AI: "You found it. Paid Search dropped to zero on March 3rd — the Google Ads campaign budget ran out. Here's how to set budget alerts..."</p>
        </div>
      </div>
    </div>
    <div>
      <div class="case-screen">
        <div class="case-screen-header">
          <div class="dot dot1"></div><div class="dot dot2"></div><div class="dot dot3"></div>
          <span style="color:#555;font-size:10px;margin-left:8px">GA4 Simulator – Acquisition Report</span>
        </div>
        <div class="ai-bubble">
          🤖 I can see traffic is down. Let's check the <strong>Acquisition report</strong> together. I've highlighted it for you below 👇
        </div>
        <div class="highlight-box">
          📍 <strong>Session default channel group</strong><br>
          <span style="color:#6c63ff">← AI is pointing here</span>
        </div>
        <div style="font-size:11px;color:#555;margin:8px 0 4px">Paid Search</div>
        <div style="background:#1c1c28;border-radius:6px;padding:8px;font-size:11px">
          <span style="color:#ff6584">▼ 100%</span> <span style="color:#555">0 sessions (was 3,200)</span>
        </div>
        <div class="action-chip">✓ Good find! You clicked the right row</div>
        <div class="ai-bubble" style="margin-top:12px">
          Paid Search completely disappeared on March 3rd. This means your Google Ads campaign stopped running. Let me show you how to verify this →
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section class="section" id="skills">
  <div class="section-tag">The simulators</div>
  <div class="section-title">Every tool. One platform.</div>
  <div class="section-sub">Pixel-perfect simulations of the tools that get people hired. Each with real cases and AI guidance built in.</div>

  <div class="skills-grid">
    <!-- GA4 - LIVE -->
    <a class="skill-card" href="skills/ga4.html">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#1a1a2e,#16213e)">
        <div style="font-size:56px">📊</div>
        <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(transparent,rgba(26,26,46,1))"></div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-live">✦ Live now</span>
        <div class="skill-card-title">Google Analytics 4</div>
        <div class="skill-card-desc">Master GA4 from scratch. Understand metrics, build reports, run funnel analyses — guided by AI through real marketing cases.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases">8 case studies included</div>
          <div class="skill-card-btn">Open simulator →</div>
        </div>
      </div>
    </a>

    <!-- SOCIAL MEDIA - BETA -->
    <a class="skill-card" href="skills/social.html">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#0f0c29,#302b63)">
        <div style="font-size:56px">📱</div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-beta">⚡ Beta</span>
        <div class="skill-card-title">Social Media Manager</div>
        <div class="skill-card-desc">Schedule posts, analyze engagement, understand algorithms. Learn Instagram, Twitter and LinkedIn analytics like a pro.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases">6 case studies included</div>
          <div class="skill-card-btn">Open simulator →</div>
        </div>
      </div>
    </a>

    <!-- FIGMA - COMING SOON -->
    <div class="skill-card" onclick="alert('Figma Simulator coming soon! We are building this now.')">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#1a0533,#2d1b4e);opacity:.7">
        <div style="font-size:56px">🎨</div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-soon">Coming soon</span>
        <div class="skill-card-title" style="color:var(--text2)">Figma Design</div>
        <div class="skill-card-desc" style="color:#555">Learn UI/UX design fundamentals, component building, auto-layout, and design systems — in a real Figma-like environment.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases" style="color:#444">5 case studies planned</div>
          <div class="skill-card-btn" style="color:#555">Notify me</div>
        </div>
      </div>
    </div>

    <!-- CANVA - COMING SOON -->
    <div class="skill-card" onclick="alert('Canva Simulator coming soon!')">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#0d1f1a,#1a3a2e);opacity:.7">
        <div style="font-size:56px">✏️</div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-soon">Coming soon</span>
        <div class="skill-card-title" style="color:var(--text2)">Canva for Business</div>
        <div class="skill-card-desc" style="color:#555">Create on-brand content, build templates, understand design hierarchy — for non-designers who need to produce professional work.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases" style="color:#444">4 case studies planned</div>
          <div class="skill-card-btn" style="color:#555">Notify me</div>
        </div>
      </div>
    </div>

    <!-- SEO - COMING SOON -->
    <div class="skill-card" onclick="alert('SEO Simulator coming soon!')">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#1a1500,#2e2400);opacity:.7">
        <div style="font-size:56px">🔍</div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-soon">Coming soon</span>
        <div class="skill-card-title" style="color:var(--text2)">SEO & Search Console</div>
        <div class="skill-card-desc" style="color:#555">Master Google Search Console, keyword research, site audits, and ranking strategy — with real case studies on failing sites.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases" style="color:#444">7 case studies planned</div>
          <div class="skill-card-btn" style="color:#555">Notify me</div>
        </div>
      </div>
    </div>

    <!-- EMAIL - COMING SOON -->
    <div class="skill-card" onclick="alert('Email Marketing Simulator coming soon!')">
      <div class="skill-card-top" style="background:linear-gradient(135deg,#001a1a,#002e2e);opacity:.7">
        <div style="font-size:56px">📧</div>
      </div>
      <div class="skill-card-body">
        <span class="skill-card-tag badge-soon">Coming soon</span>
        <div class="skill-card-title" style="color:var(--text2)">Email Marketing</div>
        <div class="skill-card-desc" style="color:#555">Build campaigns, understand open rates, A/B test subject lines, and grow lists — in a Mailchimp-style simulator.</div>
        <div class="skill-card-footer">
          <div class="skill-card-cases" style="color:#444">5 case studies planned</div>
          <div class="skill-card-btn" style="color:#555">Notify me</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section" id="pricing">
  <div class="section-tag">Pricing</div>
  <div class="section-title">Free to learn.<br>Forever.</div>
  <div class="section-sub">The mission is access. Every young person with internet access should be able to learn tools that get them hired. So it's free.</div>

  <div class="pricing-grid">
    <div class="pricing-card">
      <div class="section-tag" style="margin-bottom:8px">Free</div>
      <div class="pricing-price">$0<span>/mo</span></div>
      <div class="pricing-desc">Everything you need to learn. No credit card. No tricks.</div>
      <div class="pricing-feature">All skill simulators</div>
      <div class="pricing-feature">AI tutor (Gemini powered)</div>
      <div class="pricing-feature">All case studies</div>
      <div class="pricing-feature">Progress tracking</div>
      <div class="pricing-feature">No login required to start</div>
      <button class="pricing-cta pricing-cta-secondary" onclick="window.location.href='skills/ga4.html'">Start learning now →</button>
    </div>

    <div class="pricing-card featured">
      <div class="section-tag" style="margin-bottom:8px">For Schools & NGOs</div>
      <div class="pricing-price">$0<span>/mo</span></div>
      <div class="pricing-desc">If you're a school, NGO, or youth program — reach out. We will set you up with a custom instance, student tracking, and teacher dashboard. Free. Always.</div>
      <div class="pricing-feature">Student progress dashboard</div>
      <div class="pricing-feature">Teacher/mentor view</div>
      <div class="pricing-feature">Custom branding</div>
      <div class="pricing-feature">Offline-friendly version</div>
      <div class="pricing-feature">Priority support</div>
      <button class="pricing-cta pricing-cta-primary" onclick="alert('Email us at hello@skillos.io — we will set you up within 24h.')">Apply for school access →</button>
    </div>

    <div class="pricing-card">
      <div class="section-tag" style="margin-bottom:8px">Bring your own AI key</div>
      <div class="pricing-price">$0<span>/mo</span></div>
      <div class="pricing-desc">Self-host the entire platform using your own Gemini API key. Open source. Deploy to Vercel in 5 minutes. Total control.</div>
      <div class="pricing-feature">Full source code on GitHub</div>
      <div class="pricing-feature">Your own Gemini key</div>
      <div class="pricing-feature">Gemini free tier: 1M tokens/day</div>
      <div class="pricing-feature">Runs on Vercel Hobby (free)</div>
      <div class="pricing-feature">Add your own simulators</div>
      <button class="pricing-cta pricing-cta-secondary" onclick="alert('GitHub repo coming soon!')">View on GitHub →</button>
    </div>
  </div>
</section>

<!-- COST BREAKDOWN -->
<section class="section">
  <div class="section-tag">The economics</div>
  <div class="section-title">Why this costs almost nothing to run</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:32px">
    <div class="step">
      <div style="font-size:32px;margin-bottom:12px">🤖</div>
      <div class="step-title">Gemini API</div>
      <div class="step-desc"><strong style="color:var(--accent3)">Free tier: 1M tokens/day</strong><br>At ~800 tokens per AI response, that's 1,250 free AI answers per day. Plenty to start. Scales to $0.35/1M tokens on paid.</div>
    </div>
    <div class="step">
      <div style="font-size:32px;margin-bottom:12px">▲</div>
      <div class="step-title">Vercel Hosting</div>
      <div class="step-desc"><strong style="color:var(--accent3)">Free Hobby plan</strong><br>100GB bandwidth, serverless functions, custom domains. No server to manage. Scales automatically.</div>
    </div>
    <div class="step">
      <div style="font-size:32px;margin-bottom:12px">🐙</div>
      <div class="step-title">GitHub</div>
      <div class="step-desc"><strong style="color:var(--accent3)">Free</strong><br>Store all code, deploy automatically to Vercel on every commit. Collaboration, version history, everything.</div>
    </div>
    <div class="step">
      <div style="font-size:32px;margin-bottom:12px">💾</div>
      <div class="step-title">No database needed</div>
      <div class="step-desc"><strong style="color:var(--accent3)">$0</strong><br>Progress tracked in browser localStorage. No user accounts needed to start. Add Supabase free tier when needed.</div>
    </div>
  </div>
  <div style="margin-top:32px;background:rgba(67,233,123,.08);border:1px solid rgba(67,233,123,.2);border-radius:16px;padding:24px;text-align:center">
    <div style="font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:var(--accent3);margin-bottom:8px">Total monthly cost to run this platform: $0</div>
    <div style="color:var(--text2);font-size:14px">Until you hit ~50,000 daily active users — then maybe $20/month. That's a good problem to have.</div>
  </div>
</section>

<hr class="divider">

<!-- FOOTER -->
<footer>
  <div class="footer-logo">SkillOS</div>
  <div class="footer-text">Built for the next generation. Free. Forever. Open source.</div>
  <div class="footer-text">Made with ❤️ by AnkitRajconnect</div>
</footer>

</body>
</html>
