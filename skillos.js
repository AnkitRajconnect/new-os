'use strict';
const LM=[
  {t:'Your First Look at Analytics',x:80},{t:'How Data Gets Recorded',x:90},
  {t:'Where Traffic Comes From',x:110},{t:'Sessions vs Users',x:100},
  {t:'Engagement Rate',x:120},{t:'Who Is Actually Visiting?',x:110},
  {t:'Device Analysis',x:100},{t:'Find Your Best and Worst Pages',x:120},
  {t:'Conversions',x:140},{t:'Traffic Up, Conversions Down',x:160},
  {t:'UTM Parameters',x:155},{t:'Funnel Analysis',x:175},
  {t:'Attribution',x:190},{t:'Data Quality',x:200},
  {t:'Final Professional Audit',x:220},
];
const RANKS=['Observer','Analyst','Diagnostician','Strategist','Master'];
const RANK_AT=[0,3,7,11,15];

const LESSONS=[
  {stages:[
    {type:'explain',title:'Welcome to Web Analytics!',text:'Welcome! I\'m your SkillOS coach. In this course you\'ll practise using an analytics dashboard just like real professionals do every day.<br><br>This is <strong>DataFlow Analytics</strong> — a simulation tracking <strong>Nova Coffee Roasters</strong>.<br><br>Let\'s tour what\'s on screen.'},
    {type:'spotlight',title:'The Sidebar',text:'On the left is the <strong>navigation sidebar</strong>. Switch between Traffic, Engagement, Conversions, and more here.',target:'ga-sidebar'},
    {type:'spotlight',title:'The Main Area',text:'The centre shows your <strong>current report</strong> — right now Traffic Acquisition. Metric tiles, a line chart, and a data table.',target:'ga-main'},
    {type:'action',title:'Click the Date Range',text:'This chip controls <strong>which time period</strong> the data covers. Always check it before drawing conclusions.<br><br>👆 Click the date chip.',target:'dateChip',actionEl:'dateChip'},
    {type:'quiz',title:'Quick Check',text:'What does the date range control in an analytics dashboard?',options:['The visual theme of the charts','Which time period all the data covers','The number of live users right now','The currency used for revenue'],correct:1,explanation:'The date range filters every metric and chart to the selected period. Always verify it before making decisions.'},
  ]},
  {stages:[
    {type:'explain',title:'How Analytics Actually Works',text:'Before trusting any number, understand how data is collected.<br><br>When someone visits a site, a <strong>tracking tag</strong> fires in their browser — sending page URL, referral source, and actions to the analytics server.<br><br>No tag = no data.'},
    {type:'action',title:'Open Admin',text:'Let\'s check the tracking config. Click <strong>Admin</strong> at the bottom of the left sidebar.',target:'nav-admin',actionEl:'nav-admin'},
    {type:'spotlight',title:'Data Collection Status',text:'Here you see the <strong>tracking setup</strong>.<br><br>Tracking code is <strong style="color:var(--ga-green)">● Active</strong> — data is being collected. If inactive, every report shows zero.',target:'view-admin'},
    {type:'quiz',title:'Quick Check',text:'If the tracking code shows "Inactive", what would you expect?',options:['Higher-than-usual session counts','All zeros — no data being collected','Only real-time data works','Historical data only'],correct:1,explanation:'Without an active tracking tag nothing is recorded. Checking Admin is the first thing to do when data looks wrong.'},
  ]},
  {stages:[
    {type:'explain',title:'Where Does Traffic Come From?',text:'<strong>Where are my visitors coming from?</strong><br><br>GA4 groups traffic into <strong>channels</strong> — Organic Search, Direct, Social, Email, Paid Search, and more. Your channel mix shows which marketing efforts are working.'},
    {type:'action',title:'Open Traffic Acquisition',text:'Click <strong>Traffic acquisition</strong> in the left sidebar.',target:'nav-traffic-acq',actionEl:'nav-traffic-acq'},
    {type:'spotlight',title:'The Channel Table',text:'Each row is a different traffic source. <strong>Organic Search</strong> leads — good SEO. Notice how channels differ on Engagement Rate and Conversion Rate.',target:'ta-table-card'},
    {type:'spotlight',title:'Reading the Metric Tiles',text:'Key metrics:<br><br>• <strong>Sessions</strong> — total visits<br>• <strong>Users</strong> — unique people<br>• <strong>Engagement Rate</strong> — % of quality sessions<br>• <strong>Conversions</strong> — completed goals',target:'ta-metrics-strip'},
    {type:'quiz',title:'Quick Check',text:'Nova Coffee gets 890 sessions tagged utm_campaign=spring-sale-2026. Which channel?',options:['Organic Search','Direct','Email or Paid Search (campaign-tagged)','Referral'],correct:2,explanation:'Campaign-tagged URLs classify as Paid Search, Email, or their own group depending on utm_medium. Covered fully in Lesson 11.'},
  ]},
  {stages:[
    {type:'explain',title:'Sessions vs Users',text:'• A <strong>User</strong> is a unique person (cookie/account)<br>• A <strong>Session</strong> is a single visit — one user can have many<br><br>1,000 users + 1,400 sessions = people are coming back. A great sign!'},
    {type:'action',title:'Go to Acquisition Overview',text:'Click <strong>Overview</strong> under Acquisition in the sidebar.',target:'nav-acq-overview',actionEl:'nav-acq-overview'},
    {type:'spotlight',title:'New vs Returning Users',text:'• 75% <strong>new users</strong> — first-time visitors<br>• 25% <strong>returning</strong> — came back<br><br>For a coffee subscription, you\'d want more returning users.',target:'view-acq-overview'},
    {type:'quiz',title:'Quick Check',text:'A website has 5,200 Users and 7,800 Sessions. What does this tell you?',options:['Tracking error — sessions can\'t exceed users','Some users visited more than once — healthy engagement','All users came from the same source','The bounce rate is very high'],correct:1,explanation:'Sessions almost always exceed users because people return. 7,800 ÷ 5,200 = 1.5 sessions per user — solid engagement.'},
  ]},
  {stages:[
    {type:'explain',title:'Engagement Rate',text:'GA4 replaced Bounce Rate with <strong>Engagement Rate</strong>.<br><br>A session is "engaged" if it lasts 10+ seconds, views 2+ pages, or converts. Higher = better. Industry average: 50–70%.'},
    {type:'action',title:'Open Engagement Overview',text:'Click <strong>Engagement</strong> to expand it, then click <strong>Overview</strong>.',target:'nav-eng-toggle',actionEl:'nav-eng-toggle'},
    {type:'spotlight',title:'Engagement Metrics',text:'• <strong>Engagement Rate: 64.2%</strong> — above average<br>• <strong>Avg. Engagement Time</strong> — actual time on site<br>• <strong>Engaged Sessions</strong> — count of quality visits',target:'eng-metrics-strip'},
    {type:'quiz',title:'Quick Check',text:'Nova Coffee\'s Engagement Rate is 64.2%. What does this mean?',options:['64.2% of users made a purchase','64.2% of sessions lasted 10+ seconds, viewed 2+ pages, or converted','64.2% came from organic search','64.2% left without a second page view'],correct:1,explanation:'64.2% is above average — good traffic quality. Compare against previous periods to spot trends.'},
  ]},
  {stages:[
    {type:'explain',title:'Who Is Visiting Your Site?',text:'<em>Where</em> traffic comes from is half the story. You also need to know <strong>who</strong> those visitors are.<br><br>Analytics shows demographic (age, gender), geographic (country, city), and tech (device, browser) data.'},
    {type:'action',title:'Open User Attributes',text:'Click <strong>User</strong> in the sidebar to expand, then click <strong>User attributes</strong>.',target:'nav-user-attr',actionEl:'nav-user-attr'},
    {type:'spotlight',title:'Age & Gender',text:'Nova Coffee breakdown:<br>• 25–34 age group dominates — professionals who value quality coffee<br>• ~55% male / 45% female<br><br>This informs tone of voice, imagery, and ad platforms.',target:'view-user-attr'},
    {type:'spotlight',title:'Geography',text:'The <strong>Country</strong> table shows where visitors are based. France leads, but UK and US traffic is significant — potential expansion markets.',target:'country-table-body'},
    {type:'quiz',title:'Quick Check',text:'The 18–24 age group has very high engagement but few users. What should you consider?',options:['Remove content targeting that age group','Test campaigns targeting 18–24 — they love the content, you need more of them','The data is probably wrong','Immediately cut spend on other demographics'],correct:1,explanation:'A small but highly engaged segment is a golden opportunity. Test campaigns on TikTok and Instagram to reach more of them.'},
  ]},
  {stages:[
    {type:'explain',title:'Device Analysis',text:'Over 60% of web traffic is now mobile. But mobile users often convert less — smaller screens, harder to type payment details.<br><br>Device analysis helps you spot mobile problems before they cost revenue.'},
    {type:'action',title:'Open Tech Report',text:'Click <strong>Tech</strong> in the sidebar under User.',target:'nav-tech',actionEl:'nav-tech'},
    {type:'spotlight',title:'Device Breakdown',text:'Nova Coffee split:<br>• <strong>Mobile: 58%</strong><br>• Desktop: 37%<br>• Tablet: 5%<br><br>Mobile is the majority — any friction there loses most of your potential conversions.',target:'device-donut-card'},
    {type:'spotlight',title:'Browser Data',text:'Browser breakdown matters for compatibility. If 32% use Safari (iPhone users) and your site has a Safari bug — that\'s a major problem.',target:'browser-donut-card'},
    {type:'quiz',title:'Quick Check',text:'Mobile conversion rate 1.2%, desktop 3.8%. Mobile traffic is 58%. Priority?',options:['Increase desktop ad spend','Investigate the mobile experience — checkout, speed, forms','Remove the mobile version','This is normal, no action needed'],correct:1,explanation:'58% of traffic on mobile at 1.2% vs 3.8% desktop — fixing mobile is the highest-ROI action. Test checkout on real devices, check speed, simplify forms.'},
  ]},
  {stages:[
    {type:'explain',title:'Pages & Screens — Content Performance',text:'The <strong>Pages and Screens</strong> report shows which pages get the most views, how long people stay, and where they exit.<br><br>Gold for content strategy — see what\'s working and which pages are leaking users.'},
    {type:'action',title:'Open Pages Report',text:'Click <strong>Pages and screens</strong> in the sidebar under Engagement.',target:'nav-pages',actionEl:'nav-pages'},
    {type:'spotlight',title:'Analysing the Table',text:'<strong>/blog/beginners-guide</strong> has the highest engagement time (4m 38s) — people are reading. But <strong>/checkout</strong> has only 15 seconds — visitors leaving fast.<br><br>Short engagement on checkout = critical problem.',target:'view-pages'},
    {type:'quiz',title:'Quick Check',text:'/checkout has 1,200 views but 15s avg engagement. /products has 2,800 views and 2.5 minutes. What does this suggest?',options:['Checkout is performing great','People are abandoning checkout — probable friction or confusion','Products page needs a redesign','Data is unreliable'],correct:1,explanation:'High views + low engagement on checkout = abandonment. Causes: shipping costs surprise, forced account creation, confusing form. Fixing this directly increases revenue.'},
  ]},
  {stages:[
    {type:'explain',title:'Conversions — What Actually Matters',text:'Traffic and engagement are means to an end. What matters is <strong>conversions</strong> — when a user completes a valuable action.<br><br>A conversion could be a purchase, form submission, newsletter signup, or phone call.'},
    {type:'action',title:'Open Conversions Report',text:'Click <strong>Conversions</strong> in the sidebar under Engagement.',target:'nav-conversions',actionEl:'nav-conversions'},
    {type:'spotlight',title:'Conversion Funnel',text:'The funnel shows drop-off at each step. The biggest drop for Nova Coffee is <strong>Add to Cart → Checkout</strong>.<br><br>Something is stopping people from starting checkout. This is the most valuable problem to solve.',target:'convFunnelViz'},
    {type:'spotlight',title:'Conversion Rate',text:'Overall <strong>Conversion Rate: 2.4%</strong>. E-commerce average is 1–3% — healthy. But 3% instead of 2.4% = 25% more revenue with zero extra traffic.',target:'conv-metrics-strip'},
    {type:'quiz',title:'Quick Check',text:'8,420 sessions, 202 reach purchase. What is the conversion rate?',options:['2.4%','20.4%','0.24%','24%'],correct:0,explanation:'202 ÷ 8,420 = 2.4%. The funnel shows exactly where to focus to improve it.'},
  ]},
  {stages:[
    {type:'explain',title:'Traffic Up, Conversions Down',text:'Important pattern: <strong>traffic up, conversions down.</strong><br><br>More visitors should mean more sales — unless traffic quality drops. Wrong audience = conversions fall even as sessions rise.<br><br>Always check conversion rate alongside session volume.'},
    {type:'action',title:'Check Acquisition Overview',text:'Click <strong>Overview</strong> under Acquisition.',target:'nav-acq-overview',actionEl:'nav-acq-overview'},
    {type:'spotlight',title:'Comparing Channel Quality',text:'Channels differ on conversion rate:<br>• <strong>Paid Search</strong>: 11.6% — high-intent<br>• <strong>Display</strong>: 1.9% — awareness only<br>• <strong>Email</strong>: 2.6% — warm audience<br><br>More display traffic inflates sessions but damages the overall conversion rate.',target:'view-acq-overview'},
    {type:'quiz',title:'Quick Check',text:'Last month: 5,000 sessions, 150 conversions (3.0%). This month: 8,000 sessions, 160 conversions (2.0%). Traffic is up 60%. The real story?',options:['Great month — more conversions than ever!','Traffic quality dropped. 3,000 more visits, only 10 more sales.','Impossible — more traffic always means more conversions.','Must be a tracking bug.'],correct:1,explanation:'Yes, 10 more conversions — but 3,000 extra sessions generated almost nothing. The new traffic isn\'t interested. Always look at rate, not just raw numbers.'},
  ]},
  {stages:[
    {type:'explain',title:'UTM Parameters — Track Your Campaigns',text:'When you share a link in email or social, analytics can\'t always tell which campaign drove that click.<br><br><strong>UTM parameters</strong> are tags added to URLs:<br><span class="highlight">?utm_source=newsletter&utm_medium=email&utm_campaign=spring-sale</span><br><br>This tells analytics exactly where traffic came from.'},
    {type:'action',title:'Open Advertising Report',text:'Click <strong>Advertising</strong> in the left sidebar.',target:'nav-advertising',actionEl:'nav-advertising'},
    {type:'spotlight',title:'Campaign Performance Table',text:'The <span class="highlight">retargeting-q1</span> campaign has 210 sessions but a <strong>13.3% conversion rate</strong> — over 5× the site average.<br><br>Without UTM tracking you\'d never know this is your best performer.',target:'view-advertising'},
    {type:'quiz',title:'Quick Check',text:'6,980 sessions show utm_campaign as "(not set)". What does this mean?',options:['They came from direct URL typing only','Those links were never tagged with UTMs — you can\'t identify which campaign drove them','They are bot sessions','They came from organic search'],correct:1,explanation:'(not set) = no UTM tags used. You can see the broad channel but not the specific campaign. Always tag every link you share.'},
  ]},
  {stages:[
    {type:'explain',title:'Funnel Analysis',text:'A <strong>funnel</strong> is a sequence of steps from landing to purchase.<br><br>Funnel analysis shows exactly where people drop off — so you know which step to fix. One of the highest-ROI activities in analytics.'},
    {type:'action',title:'Open Explorations',text:'Click <strong>Explore</strong> in the left sidebar.',target:'nav-explore',actionEl:'nav-explore'},
    {type:'spotlight',title:'Checkout Funnel Drop-offs',text:'Biggest drop: <strong>Product page → Cart</strong> (6,200 → 1,800, losing 71%). Causes: weak product descriptions, no reviews, unclear pricing, too many clicks.',target:'exploreFunnel'},
    {type:'spotlight',title:'Segment: Mobile Non-Converters',text:'1,420 users who browsed on mobile but didn\'t buy. This is a direct retargeting audience — show them personalised ads for the exact products they viewed.',target:'segmentData'},
    {type:'quiz',title:'Quick Check',text:'Homepage (10k) → Product (6.2k) → Cart (1.8k) → Checkout (900) → Purchase (202). Biggest absolute drop-off?',options:['Homepage → Product (−3,800)','Product → Cart (−4,400)','Cart → Checkout (−900)','Checkout → Purchase (−698)'],correct:1,explanation:'Product → Cart loses 4,400 users — the biggest drop. Test: better images, clearer pricing, social proof, easier add-to-cart button.'},
  ]},
  {stages:[
    {type:'explain',title:'Attribution — Who Gets the Credit?',text:'Customer sees Facebook ad, then Google ad, then email — then buys. Which channel gets credit?<br><br>• <strong>Last Click</strong> — 100% to the last touchpoint<br>• <strong>First Click</strong> — 100% to the first<br>• <strong>Data-Driven</strong> — AI distributes credit based on actual impact'},
    {type:'action',title:'Open Advertising',text:'Click <strong>Advertising</strong> in the sidebar.',target:'nav-advertising',actionEl:'nav-advertising'},
    {type:'spotlight',title:'Attribution Model Comparison',text:'<strong>Organic Social</strong> jumps from 28 (Last Click) to 89 conversions (Data-Driven). Social touches early — Last Click ignores this completely.<br><br>Under-crediting social could lead you to cut a critical budget.',target:'view-advertising'},
    {type:'quiz',title:'Quick Check',text:'Paid Search gets 51 conversions (Last Click) but only 41 (Data-Driven). What does this tell you?',options:['Paid Search is underperforming','Paid Search closes deals (last click) but often isn\'t the channel that introduced the customer','Paid Search ads are too expensive','Data error'],correct:1,explanation:'Paid Search captures "last click" because people search for brands they already know from an earlier touchpoint. Data-Driven gives it less credit as another channel introduced the customer first.'},
  ]},
  {stages:[
    {type:'explain',title:'Data Quality — Trust but Verify',text:'Analytics is only as good as the setup. Bad data → bad decisions.<br><br>Common issues:<br>• <strong>Self-referral</strong> — your team inflating sessions<br>• <strong>Duplicate tracking</strong> — tag fires twice per page<br>• <strong>Misconfigured conversions</strong> — same purchase counted multiple times<br>• <strong>Bot traffic</strong> — non-human visits skewing averages'},
    {type:'action',title:'Review Admin Settings',text:'Go to <strong>Admin</strong> in the sidebar.',target:'nav-admin',actionEl:'nav-admin'},
    {type:'spotlight',title:'Health Check Checklist',text:'Verify:<br><br>✓ <strong>Tracking code: Active</strong><br>✓ <strong>Enhanced measurement: Enabled</strong><br>✓ <strong>Data retention: 14 months</strong><br>✓ <strong>Google Ads: Connected</strong>',target:'view-admin'},
    {type:'quiz',title:'Quick Check',text:'Sessions suddenly doubled overnight. Marketing didn\'t change. Investigate first?',options:['Celebrate — probably went viral!','Check if the tracking tag was accidentally duplicated','Reduce ad spend immediately','Data is always correct'],correct:1,explanation:'A sudden unexplained doubling = classic duplicate tracking — the tag fires twice per page view. Always investigate anomalies before reacting.'},
  ]},
  {stages:[
    {type:'explain',title:'The Professional Analytics Audit',text:'Let\'s put it all together into a <strong>professional audit workflow</strong>:<br><br><strong>1.</strong> Verify data quality (Admin)<br><strong>2.</strong> Check overall traffic trend<br><strong>3.</strong> Analyse channel mix<br><strong>4.</strong> Review audience (demographics + tech)<br><strong>5.</strong> Check conversion funnel<br><strong>6.</strong> Build the story<br><br>Every professional analyst follows this sequence.'},
    {type:'action',title:'Start the Audit — Traffic First',text:'Begin your audit. Click <strong>Traffic acquisition</strong>.',target:'nav-traffic-acq',actionEl:'nav-traffic-acq'},
    {type:'spotlight',title:'Professional Observations',text:'A professional would note:<br><br>• <strong>Organic Search</strong> — top channel, SEO is working<br>• <strong>Email</strong> — highest engagement rate, keep investing<br>• <strong>Display</strong> — high sessions, very low conversion, review targeting<br>• <strong>Paid Search</strong> — small volume but exceptional 11.6% conversion rate',target:'view-traffic-acq'},
    {type:'action',title:'Close the Loop — Check Conversions',text:'Click <strong>Conversions</strong> under Engagement to complete the audit.',target:'nav-conversions',actionEl:'nav-conversions'},
    {type:'quiz',title:'🎓 Final Assessment',text:'Most important thing to do before presenting analytics data to a stakeholder?',options:['Make the numbers look as big as possible','Verify data quality first — check tracking, anomalies, date range','Only show positive trends','Compare every metric to every other metric'],correct:1,explanation:'🎓 Professional mindset! Presenting bad data destroys trust. Verify tracking, check for anomalies, confirm date range — then build your story. You\'re thinking like a real analyst!'},
  ]},
];

let currentLesson=0,currentStage=0,ttsEnabled=true,ttsRate=0.9,currentUtter=null;

function getDone(){try{return JSON.parse(localStorage.getItem('s3_done')||'[]');}catch(e){return[];}}
function getXP(){return parseInt(localStorage.getItem('s3_xp')||'0');}
function getChain(){return parseInt(localStorage.getItem('s3_chain')||'0');}

function initLanding(){
  const done=getDone();
  const nextIdx=LM.findIndex((_,i)=>!done.includes(i));
  currentLesson=nextIdx<0?0:nextIdx;
  const btn=document.getElementById('landingStartBtn');
  if(btn)btn.textContent=nextIdx===0?'Begin the Course →':nextIdx<0?'🏆 Review Course':`Continue — Lesson ${nextIdx+1}`;
  const pct=Math.round(done.length/LM.length*100);
  const pe=document.getElementById('landingProgress');
  if(pe&&done.length>0){
    pe.innerHTML=`<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--teach-muted);margin-bottom:5px"><span>${done.length}/${LM.length} lessons complete</span><span>${pct}%</span></div><div style="height:5px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--teach-cyan),var(--teach-green));border-radius:3px"></div></div>`;
  }
  const list=document.getElementById('landingLessonList');
  if(list){
    list.innerHTML=LM.map((l,i)=>{
      const isDone=done.includes(i),isNext=i===nextIdx;
      const locked=!isDone&&i>(nextIdx<0?LM.length:nextIdx);
      return `<div class="ll-item ${isDone?'done':isNext?'next':locked?'locked':''}"><div class="ll-num">${isDone?'✓':i+1}</div><div class="ll-name">${l.t}</div><div class="ll-xp">${l.x} XP</div></div>`;
    }).join('');
  }
}

function startCourse(){
  const done=getDone();
  const nextIdx=LM.findIndex((_,i)=>!done.includes(i));
  currentLesson=nextIdx<0?0:nextIdx;
  currentStage=0;
  document.getElementById('landing-screen').style.display='none';
  document.getElementById('lesson-hud').style.display='flex';
  document.getElementById('ga-shell').style.display='block';
  initCharts();
  renderLesson();
}

function exitToMenu(){
  clearSpotlight();stopSpeech();
  document.getElementById('coach-bubble').classList.add('hidden');
  document.getElementById('landing-screen').style.display='flex';
  document.getElementById('lesson-hud').style.display='none';
  document.getElementById('ga-shell').style.display='none';
  document.getElementById('success-overlay').style.display='none';
  document.getElementById('cert-screen').style.display='none';
  initLanding();
}

function renderLesson(){
  const stage=LESSONS[currentLesson]?.stages[currentStage];
  if(!stage)return;
  updateHUD();showCoachStage(stage);
  if(stage.type==='spotlight'&&stage.target)setTimeout(()=>spotlightEl(stage.target),350);
  else if(stage.type!=='spotlight')clearSpotlight();
}

function updateHUD(){
  const lesson=LESSONS[currentLesson];
  document.getElementById('hudLessonNum').textContent=`Lesson ${currentLesson+1} of ${LM.length}`;
  document.getElementById('hudLessonName').textContent=LM[currentLesson].t;
  document.getElementById('hudStages').innerHTML=lesson.stages.map((_,i)=>`<div class="hud-stage-dot ${i<currentStage?'done':i===currentStage?'active':''}"></div>`).join('');
  const done=getDone();let ri=0;for(let i=0;i<RANK_AT.length;i++)if(done.length>=RANK_AT[i])ri=i;
  document.getElementById('hudRank').textContent=RANKS[ri];
  document.getElementById('hudMastery').style.width=Math.round(done.length/LM.length*100)+'%';
  document.getElementById('hudChain').textContent=`🔗 ${getChain()}`;
}

function showCoachStage(stage){
  const bubble=document.getElementById('coach-bubble');
  bubble.classList.remove('hidden','minimized');
  const lesson=LESSONS[currentLesson];
  const labels={explain:'📖 Learn',spotlight:'🔍 Explore',action:'🖱 Do This',quiz:'❓ Quiz'};
  document.getElementById('coachStageLabel').textContent=labels[stage.type]||'Step';
  let body=`<strong style="display:block;margin-bottom:8px;font-size:14px">${stage.title}</strong>${stage.text}`;
  if(stage.type==='quiz'){
    body+=`<div class="quiz-options">${stage.options.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>`;
  }
  if(stage.type==='action'){body+=`<div class="tip">💡 Find the highlighted element and click it to continue.</div>`;}
  document.getElementById('coachBody').innerHTML=body;
  document.getElementById('coachDots').innerHTML=lesson.stages.map((_,i)=>`<div class="coach-dot ${i<currentStage?'done':i===currentStage?'active':''}"></div>`).join('');
  const btns=document.getElementById('coachBtns');
  if(stage.type==='quiz'){btns.innerHTML='';}
  else if(stage.type==='action'){
    btns.innerHTML=`<button class="coach-btn secondary" onclick="skipAction()">Skip →</button>`;
    if(stage.actionEl)setupActionListener(stage.actionEl);
    if(stage.target)setTimeout(()=>spotlightEl(stage.target),350);
  }else{
    const isLast=currentStage===lesson.stages.length-1;
    btns.innerHTML=`${currentStage>0?'<button class="coach-btn secondary" onclick="prevStage()">← Back</button>':''}<button class="coach-btn primary" onclick="nextStage()">${isLast?'Complete Lesson ✓':'Next →'}</button>`;
  }
  if(ttsEnabled){
    const plain=(stage.title+'. '+stage.text).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    speakText(plain);
  }
}

function setupActionListener(elId){
  const el=document.getElementById(elId);if(!el)return;
  const handler=()=>{el.removeEventListener('click',handler);clearSpotlight();setTimeout(nextStage,200);};
  el.addEventListener('click',handler);
}
function skipAction(){clearSpotlight();nextStage();}
function nextStage(){
  clearSpotlight();
  const lesson=LESSONS[currentLesson];
  if(currentStage<lesson.stages.length-1){currentStage++;renderLesson();}
  else completeLesson();
}
function prevStage(){if(currentStage>0){currentStage--;renderLesson();}}

function answerQuiz(idx){
  const stage=LESSONS[currentLesson].stages[currentStage];
  document.querySelectorAll('.quiz-opt').forEach(o=>o.disabled=true);
  const opts=document.querySelectorAll('.quiz-opt');
  if(idx===stage.correct){
    opts[idx].classList.add('correct');
    document.getElementById('coachBody').innerHTML+=`<div class="tip" style="border-left-color:var(--teach-green);background:rgba(52,211,153,.07)">✓ ${stage.explanation}</div>`;
    if(ttsEnabled)speakText('Correct! '+stage.explanation);
  }else{
    opts[idx].classList.add('wrong');opts[stage.correct].classList.add('correct');
    document.getElementById('coachBody').innerHTML+=`<div class="tip">Not quite. ${stage.explanation}</div>`;
    if(ttsEnabled)speakText('Not quite. '+stage.explanation);
  }
  document.getElementById('coachBtns').innerHTML=`<button class="coach-btn primary" onclick="nextStage()">Continue →</button>`;
}

function completeLesson(){
  clearSpotlight();stopSpeech();
  const done=getDone(),xp=getXP(),lessonXP=LM[currentLesson].x,alreadyDone=done.includes(currentLesson);
  if(!alreadyDone){
    done.push(currentLesson);
    localStorage.setItem('s3_done',JSON.stringify(done));
    localStorage.setItem('s3_xp',xp+lessonXP);
    localStorage.setItem('s3_chain',getChain()+1);
  }
  if(done.length>=LM.length){showCertificate();return;}
  showSuccess(lessonXP,alreadyDone);
}

function showSuccess(xp,alreadyDone){
  document.getElementById('success-overlay').style.display='flex';
  document.getElementById('successIcon').textContent='⚡';
  document.getElementById('successTitle').textContent='Lesson Complete!';
  document.getElementById('successText').textContent=LM[currentLesson].t+' — well done!';
  document.getElementById('successXP').textContent=alreadyDone?'Already completed':`+${xp} XP`;
  if(ttsEnabled)speakText('Lesson complete! Well done!');
}

function closeSuccess(){
  document.getElementById('success-overlay').style.display='none';
  const done=getDone(),next=LM.findIndex((_,i)=>!done.includes(i));
  if(next>=0){currentLesson=next;currentStage=0;renderLesson();updateHUD();}
  else showCertificate();
}

function showCertificate(){
  document.getElementById('success-overlay').style.display='none';
  document.getElementById('cert-screen').style.display='flex';
  const done=getDone();let ri=0;for(let i=0;i<RANK_AT.length;i++)if(done.length>=RANK_AT[i])ri=i;
  document.getElementById('certRank').textContent=RANKS[ri];
  document.getElementById('certDate').textContent='Completed '+new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  if(ttsEnabled)speakText('Congratulations! You have completed Web Analytics Fundamentals!');
}

function navClick(id){
  const toggles={'reports-toggle':'reports-sub','acq-toggle':'acq-sub','eng-toggle':'eng-sub','user-toggle':'user-sub'};
  if(toggles[id]){
    document.getElementById(toggles[id])?.classList.toggle('open');
    document.getElementById('nav-'+id)?.classList.toggle('expanded');
    return;
  }
  const viewMap={home:'home',realtime:'realtime','acq-overview':'acq-overview','traffic-acq':'traffic-acq','user-acq':'user-acq','eng-overview':'eng-overview',events:'events',conversions:'conversions',pages:'pages',landing:'landing','user-attr':'user-attr',tech:'tech',retention:'retention',explore:'explore',advertising:'advertising',admin:'admin'};
  const viewId=viewMap[id];if(!viewId)return;
  document.querySelectorAll('.ga-report-view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+viewId)?.classList.add('active');
  document.querySelectorAll('.sidebar-item,.sidebar-subitem,.sidebar-subsubitem').forEach(e=>e.classList.remove('active'));
  document.getElementById('nav-'+id)?.classList.add('active');
  updateBreadcrumb(id);
  const acqV=['acq-overview','traffic-acq','user-acq'],engV=['eng-overview','events','conversions','pages','landing'],userV=['user-attr','tech'];
  if(acqV.includes(id)||engV.includes(id)||userV.includes(id)){document.getElementById('reports-sub')?.classList.add('open');document.getElementById('nav-reports-toggle')?.classList.add('expanded');}
  if(acqV.includes(id)){document.getElementById('acq-sub')?.classList.add('open');document.getElementById('nav-acq-toggle')?.classList.add('expanded');}
  if(engV.includes(id))document.getElementById('eng-sub')?.classList.add('open');
  if(userV.includes(id))document.getElementById('user-sub')?.classList.add('open');
}

function updateBreadcrumb(id){
  const labels={home:'Home',realtime:'Realtime','acq-overview':'Acquisition > Overview','traffic-acq':'Acquisition > Traffic acquisition','user-acq':'Acquisition > User acquisition','eng-overview':'Engagement > Overview',events:'Engagement > Events',conversions:'Engagement > Conversions',pages:'Engagement > Pages and screens',landing:'Engagement > Landing page','user-attr':'User > User attributes',tech:'User > Tech',retention:'Retention',explore:'Explore',advertising:'Advertising',admin:'Admin'};
  const bc=document.getElementById('gaBreadcrumb');if(!bc)return;
  const parts=(labels[id]||id).split(' > ');
  bc.innerHTML=parts.length===1?`<span class="current">${parts[0]}</span>`:`<span>${parts[0]}</span><span class="ga-breadcrumb-sep" style="color:var(--ga-text-3)">›</span><span class="current">${parts[1]}</span>`;
}

function spotlightEl(id){
  const el=document.getElementById(id)||document.querySelector('.'+id);if(!el)return;
  const r=el.getBoundingClientRect(),p=6;
  const top=r.top-p,left=r.left-p,w=r.width+p*2,h=r.height+p*2;
  const show={display:'block',position:'fixed',background:'rgba(0,0,0,.65)',pointerEvents:'none',zIndex:'9998'};
  Object.assign(document.getElementById('sp-top').style,{...show,top:'0',left:'0',right:'0',height:top+'px'});
  Object.assign(document.getElementById('sp-bottom').style,{...show,top:(r.bottom+p)+'px',left:'0',right:'0',bottom:'0'});
  Object.assign(document.getElementById('sp-left').style,{...show,top:top+'px',left:'0',width:left+'px',height:h+'px'});
  Object.assign(document.getElementById('sp-right').style,{...show,top:top+'px',left:(r.right+p)+'px',right:'0',height:h+'px'});
  const ring=document.getElementById('spotlight-ring');
  ring.style.cssText=`top:${top}px;left:${left}px;width:${w}px;height:${h}px;display:block;border-radius:8px;position:fixed;border:2px solid var(--teach-cyan);box-shadow:0 0 0 4px rgba(0,212,255,.15),0 0 20px rgba(0,212,255,.3);pointer-events:none;z-index:9999`;
  if(r.top<60||r.bottom>window.innerHeight)el.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function clearSpotlight(){
  ['sp-top','sp-right','sp-bottom','sp-left'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.display='none';});
  const ring=document.getElementById('spotlight-ring');if(ring)ring.style.display='none';
}

function getBestVoice(){
  const voices=window.speechSynthesis.getVoices();
  // Priority order: natural/neural Google/Microsoft voices first
  const preferred=[
    'Google UK English Female','Google US English','Microsoft Aria Online (Natural)',
    'Microsoft Jenny Online (Natural)','Microsoft Guy Online (Natural)',
    'Samantha','Karen','Moira','Tessa','Fiona',
    'Google UK English Male','en-US','en-GB'
  ];
  for(const name of preferred){
    const v=voices.find(v=>v.name.includes(name)||v.lang===name);
    if(v)return v;
  }
  // Fallback: any English voice that isn't "eSpeak" (the most robotic)
  return voices.find(v=>v.lang.startsWith('en')&&!v.name.toLowerCase().includes('espeak'))||voices[0]||null;
}

function speakText(text){
  if(!ttsEnabled||!window.speechSynthesis)return;
  stopSpeech();
  const clean=text.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const utter=new SpeechSynthesisUtterance(clean);
  utter.rate=ttsRate;
  utter.pitch=1.05;  // slightly warmer than flat 1.0
  utter.volume=0.92;
  utter.lang='en-US';
  // Try to assign best voice — voices may not be loaded yet, so retry once
  const assignVoice=()=>{const v=getBestVoice();if(v)utter.voice=v;};
  assignVoice();
  if(!utter.voice)window.speechSynthesis.onvoiceschanged=()=>{assignVoice();window.speechSynthesis.onvoiceschanged=null;};
  currentUtter=utter;
  const wave=document.getElementById('coachWaveform'),pauseBtn=document.getElementById('coachPauseBtn');
  if(wave)wave.style.display='flex';if(pauseBtn)pauseBtn.style.display='flex';
  utter.onend=utter.onerror=()=>{if(wave)wave.style.display='none';if(pauseBtn)pauseBtn.style.display='none';currentUtter=null;};
  window.speechSynthesis.speak(utter);
}
function stopSpeech(){
  if(window.speechSynthesis)window.speechSynthesis.cancel();
  const wave=document.getElementById('coachWaveform'),pauseBtn=document.getElementById('coachPauseBtn');
  if(wave)wave.style.display='none';if(pauseBtn)pauseBtn.style.display='none';
}
function toggleTTS(){
  ttsEnabled=!ttsEnabled;
  const btn=document.getElementById('coachSpeakBtn');
  if(btn){btn.textContent=ttsEnabled?'🔊':'🔇';btn.classList.toggle('tts-on',ttsEnabled);}
  if(!ttsEnabled)stopSpeech();
}
function pauseResumeSpeech(){
  if(!window.speechSynthesis)return;
  const btn=document.getElementById('coachPauseBtn');
  if(window.speechSynthesis.paused){window.speechSynthesis.resume();if(btn)btn.textContent='⏸';}
  else{window.speechSynthesis.pause();if(btn)btn.textContent='▶';}
}
function setTTSRate(r){ttsRate=r;document.querySelectorAll('.tts-rate-btn').forEach(b=>b.classList.toggle('active',parseFloat(b.dataset.rate)===r));}
function replaySpeech(){const s=LESSONS[currentLesson]?.stages[currentStage];if(s&&ttsEnabled)speakText(s.title+'. '+s.text);}
function minimizeCoach(){document.getElementById('coach-bubble').classList.toggle('minimized');}

function openDateModal(){document.getElementById('date-modal').style.display='flex';}
function closeDateModal(){document.getElementById('date-modal').style.display='none';}
function setDatePreset(days,el){
  document.querySelectorAll('.date-preset').forEach(b=>b.classList.remove('active'));
  if(el)el.classList.add('active');
  const end=new Date('2026-03-15'),start=new Date(end);
  start.setDate(end.getDate()-days+1);
  document.getElementById('dateFrom').value=start.toISOString().split('T')[0];
  document.getElementById('dateTo').value=end.toISOString().split('T')[0];
}
function applyDateRange(){
  const from=document.getElementById('dateFrom').value,to=document.getElementById('dateTo').value;
  const fmt=d=>new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
  const chip=document.getElementById('dateChip');
  if(chip)chip.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${fmt(from)} – ${fmt(to)}<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`;
  closeDateModal();
}

function mStrip(id,items){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=items.map((m,i)=>`<div class="ga-metric-tile${i===0?' selected':''}" onclick="this.closest('.ga-metric-strip').querySelectorAll('.ga-metric-tile').forEach(t=>t.classList.remove('selected'));this.classList.add('selected')"><div class="ga-metric-label">${m.l}</div><div class="ga-metric-value">${m.v}</div><div class="ga-metric-change ${m.up?'up':'down'}">${m.c} vs prev period</div></div>`).join('');
}

function svgLine(data,color,h){
  const w=600,pad=4,max=Math.max(...data),min=Math.min(...data);
  const pts=data.map((v,i)=>{const x=pad+(i/(data.length-1))*(w-pad*2);const y=h-pad-((v-min)/(max-min||1))*(h-pad*2);return `${x},${y}`;}).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="width:100%;height:${h}px"><defs><linearGradient id="g${color.replace('#','')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity=".25"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><polygon points="${pts} ${w-pad},${h} ${pad},${h}" fill="url(#g${color.replace('#','')})" /><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

function svgDonut(slices,size){
  size=size||140;const r=50,cx=size/2,cy=size/2,strokeW=16;
  const total=slices.reduce((a,b)=>a+b.v,0);
  let offset=0;
  const arcs=slices.map(s=>{
    const pct=s.v/total,len=pct*314.16,gap=2;
    const arc=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.c}" stroke-width="${strokeW}" stroke-dasharray="${len-gap} ${314.16-(len-gap)}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})" style="transition:stroke-dasharray .5s ease"/>`;
    offset+=len;return arc;
  }).join('');
  const legend=slices.map(s=>`<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--ga-text-2)"><div style="width:8px;height:8px;border-radius:50%;background:${s.c};flex-shrink:0"></div>${s.l}: <strong style="color:var(--ga-text)">${s.v}%</strong></div>`).join('');
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${arcs}</svg><div style="display:flex;flex-direction:column;gap:5px">${legend}</div>`;
}

function svgBar(data,color){
  const max=Math.max(...data.map(d=>d.v));
  return data.map(d=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="width:80px;font-size:11px;color:var(--ga-text-2);text-align:right;flex-shrink:0">${d.l}</div><div style="flex:1;height:16px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden"><div style="height:100%;width:${Math.round(d.v/max*100)}%;background:${color};border-radius:3px"></div></div><div style="width:36px;font-size:11px;color:var(--ga-text);text-align:right">${d.v}%</div></div>`).join('');
}

function mkTable(id,cols,rows){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=`<table class="ga-table"><thead><tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function initCharts(){
  const sessions=[420,380,510,490,560,480,620,580,670,640,710,690,760,740,800];
  const engaged=[260,235,320,305,350,300,390,365,420,400,445,430,475,465,500];

  mStrip('ta-metrics-strip',[{l:'Sessions',v:'8,420',c:'+12%',up:true},{l:'Users',v:'5,231',c:'+8%',up:true},{l:'Engagement Rate',v:'64.2%',c:'+3.1%',up:true},{l:'Conversions',v:'202',c:'+2%',up:true}]);
  mStrip('ua-metrics-strip',[{l:'New Users',v:'3,920',c:'+15%',up:true},{l:'New User Sessions',v:'4,240',c:'+12%',up:true},{l:'Engaged Sessions',v:'2,814',c:'+9%',up:true},{l:'Conversion Rate',v:'2.4%',c:'+0.2%',up:true}]);
  mStrip('eng-metrics-strip',[{l:'Engaged Sessions',v:'5,406',c:'+6%',up:true},{l:'Engagement Rate',v:'64.2%',c:'+3%',up:true},{l:'Avg. Engagement Time',v:'2m 14s',c:'+18s',up:true},{l:'Events per Session',v:'5.8',c:'+0.4',up:true}]);
  mStrip('events-metrics-strip',[{l:'Event Count',v:'48,844',c:'+9%',up:true},{l:'Events per User',v:'9.3',c:'+0.5',up:true},{l:'Users w/ Events',v:'5,231',c:'+8%',up:true},{l:'Conversions',v:'202',c:'+2%',up:true}]);
  mStrip('conv-metrics-strip',[{l:'Conversions',v:'202',c:'+2%',up:true},{l:'Conversion Rate',v:'2.4%',c:'+0.2%',up:true},{l:'Revenue',v:'€4,848',c:'+5%',up:true},{l:'Avg. Order Value',v:'€24.00',c:'+3%',up:true}]);
  mStrip('pages-metrics-strip',[{l:'Page Views',v:'21,340',c:'+8%',up:true},{l:'Users',v:'5,231',c:'+8%',up:true},{l:'Views per User',v:'4.1',c:'+0.3',up:true},{l:'Avg. Engagement',v:'1m 42s',c:'+12s',up:true}]);
  mStrip('landing-metrics-strip',[{l:'Sessions',v:'8,420',c:'+12%',up:true},{l:'Engaged Sessions',v:'5,406',c:'+6%',up:true},{l:'Bounce Rate',v:'35.8%',c:'-3.1%',up:true},{l:'Conversions',v:'202',c:'+2%',up:true}]);
  mStrip('acq-metrics-strip',[{l:'Sessions',v:'8,420',c:'+12%',up:true},{l:'New Users',v:'3,920',c:'+15%',up:true},{l:'Engaged Sessions',v:'5,406',c:'+6%',up:true},{l:'Conversions',v:'202',c:'+2%',up:true}]);
  mStrip('retention-metrics-strip',[{l:'Returning Users',v:'1,311',c:'+5%',up:true},{l:'Return Rate',v:'25.1%',c:'+1.2%',up:true},{l:'Avg. Sessions/User',v:'1.5',c:'+0.1',up:true},{l:'2nd Week Retention',v:'18.4%',c:'+0.8%',up:true}]);
  mStrip('adv-metrics',[{l:'Total Conversions',v:'202',c:'+2%',up:true},{l:'ROAS',v:'3.2×',c:'+0.4×',up:true},{l:'Cost per Conv.',v:'€12.40',c:'-€1.20',up:true},{l:'Attributed Revenue',v:'€4,848',c:'+5%',up:true}]);

  // Line charts
  const lw=el=>el?el.innerHTML=svgLine(sessions,'#8ab4f8',80):null;
  lw(document.getElementById('homeLineChart'));lw(document.getElementById('taLineChart'));lw(document.getElementById('acqLineChart'));
  const ew=document.getElementById('engLineChart');if(ew)ew.innerHTML=svgLine(engaged,'#81c995',80);
  const rw=document.getElementById('retentionLineChart');if(rw)rw.innerHTML=svgLine([25,22,19,17,15,14,13,12,11,11,10,10],  '#c58af9',80);

  // Donuts
  const ad=document.getElementById('acqDonut');if(ad)ad.innerHTML=svgDonut([{l:'Organic Search',v:38,c:'#8ab4f8'},{l:'Direct',v:22,c:'#81c995'},{l:'Organic Social',v:18,c:'#fdd663'},{l:'Email',v:12,c:'#c58af9'},{l:'Paid Search',v:6,c:'#f28b82'},{l:'Display',v:4,c:'#fc8d59'}],160);
  const dd=document.getElementById('deviceDonut');if(dd)dd.innerHTML=svgDonut([{l:'Mobile',v:58,c:'#8ab4f8'},{l:'Desktop',v:37,c:'#81c995'},{l:'Tablet',v:5,c:'#fdd663'}],160);
  const bd=document.getElementById('browserDonut');if(bd)bd.innerHTML=svgDonut([{l:'Chrome',v:52,c:'#8ab4f8'},{l:'Safari',v:32,c:'#81c995'},{l:'Firefox',v:9,c:'#fdd663'},{l:'Edge',v:7,c:'#c58af9'}],160);
  const gd=document.getElementById('genderDonut');if(gd)gd.innerHTML=svgDonut([{l:'Male',v:55,c:'#8ab4f8'},{l:'Female',v:45,c:'#c58af9'}],160);

  // Age bar
  const ab=document.getElementById('ageBarChart');if(ab)ab.innerHTML=svgBar([{l:'18–24',v:12},{l:'25–34',v:34},{l:'35–44',v:28},{l:'45–54',v:16},{l:'55–64',v:7},{l:'65+',v:3}],'#8ab4f8');

  // Home channel mini
  const hc=document.getElementById('homeChannelMini');
  if(hc)hc.innerHTML=[{l:'Organic Search',v:'3,200',p:38,c:'#8ab4f8'},{l:'Direct',v:'1,852',p:22,c:'#81c995'},{l:'Organic Social',v:'1,516',p:18,c:'#fdd663'},{l:'Email',v:'1,010',p:12,c:'#c58af9'},{l:'Paid Search',v:'505',p:6,c:'#f28b82'}].map(r=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--ga-border)"><div style="width:8px;height:8px;border-radius:50%;background:${r.c};flex-shrink:0"></div><div style="flex:1;font-size:12px;color:var(--ga-text)">${r.l}</div><div style="font-size:12px;color:var(--ga-text-2);margin-right:8px">${r.v}</div><div style="width:60px;height:4px;background:rgba(255,255,255,.07);border-radius:2px"><div style="height:100%;width:${r.p}%;background:${r.c};border-radius:2px"></div></div></div>`).join('');

  // Tables
  mkTable('ta-table-body',['Session default channel group','Sessions','Users','Engagement rate','Conversions','Conv. rate'],[
    ['Organic Search','3,200','2,840','71.4%','98','3.1%'],
    ['Direct','1,852','1,640','63.2%','25','1.3%'],
    ['Organic Social','1,516','1,388','58.9%','28','1.8%'],
    ['Email','1,010','920','78.1%','26','2.6%'],
    ['Paid Search','505','480','82.3%','51','<strong style="color:#81c995">11.6%</strong>'],
    ['Display','337','310','41.2%','6','1.9%'],
  ]);
  mkTable('ua-table-body',['First user default channel group','New users','Engaged sessions','Engagement rate','Conversions'],[
    ['Organic Search','1,480','1,058','71.5%','46'],['Direct','840','531','63.2%','11'],['Organic Social','720','424','58.9%','13'],['Email','480','375','78.1%','12'],['Paid Search','240','198','82.5%','24'],['Display','160','66','41.3%','3'],
  ]);
  mkTable('events-table-body',['Event name','Event count','Users','Events per user'],[
    ['page_view','21,340','5,231','4.1'],['scroll','14,820','4,890','3.0'],['session_start','8,420','5,231','1.6'],['user_engagement','7,614','4,420','1.7'],['click','5,290','3,180','1.7'],['view_item','3,840','2,640','1.5'],['add_to_cart','1,800','1,620','1.1'],['begin_checkout','900','840','1.1'],['purchase','202','202','1.0'],
  ]);
  mkTable('conv-table-body',['Conversion event','Conversions','Value'],[
    ['purchase','202','€4,848'],['add_to_cart','1,800','—'],['begin_checkout','900','—'],['newsletter_signup','384','—'],
  ]);
  mkTable('pages-table-body',['Page title','Page views','Users','Avg. engagement time','Exits'],[
    ['/home','5,420','4,210','1m 12s','18%'],['/products','2,800','2,190','2m 28s','24%'],['/blog/beginners-guide','1,960','1,740','4m 38s','42%'],['/checkout','1,200','1,140','0m 15s','<strong style="color:#f28b82">71%</strong>'],['/about','840','720','1m 54s','55%'],['/contact','620','580','2m 10s','68%'],
  ]);
  mkTable('landing-table-body',['Landing page','Sessions','Engaged sessions','Bounce rate','Conversions'],[
    ['/home','3,840','2,534','32.1%','88'],['/products','1,240','806','35.0%','42'],['/blog/beginners-guide','980','735','25.0%','18'],['/','720','432','40.0%','28'],['/about','340','170','50.0%','8'],
  ]);
  mkTable('country-table-body',['Country','Users','Sessions','Conversions'],[
    ['🇫🇷 France','2,840','3,580','108'],['🇬🇧 United Kingdom','820','1,040','34'],['🇺🇸 United States','640','820','22'],['🇩🇪 Germany','420','530','18'],['🇧🇪 Belgium','310','390','12'],['🇨🇭 Switzerland','201','258','8'],
  ]);
  mkTable('lang-table-body',['Language','Users','Sessions'],[
    ['fr','2,920','3,680'],['en-GB','840','1,060'],['en-US','660','840'],['de','430','540'],['nl','220','280'],
  ]);
  mkTable('os-table-body',['Operating system','Users','Sessions'],[
    ['Android','1,980','2,480'],['iOS','1,060','1,320'],['Windows','1,240','1,560'],['macOS','680','840'],['Linux','271','340'],
  ]);
  mkTable('screen-table-body',['Screen resolution','Users','Sessions'],[
    ['390×844','980','1,230'],['1920×1080','840','1,050'],['414×896','620','780'],['1366×768','540','680'],['2560×1440','251','315'],
  ]);

  // Conversion funnel
  const cf=document.getElementById('convFunnelViz');
  if(cf){
    const steps=[{l:'Homepage',v:10000,p:100},{l:'Product page',v:6200,p:62},{l:'Add to cart',v:1800,p:18},{l:'Begin checkout',v:900,p:9},{l:'Purchase',v:202,p:2}];
    cf.innerHTML=steps.map((s,i)=>`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--ga-text-2);margin-bottom:3px"><span>${s.l}</span><span>${s.v.toLocaleString()} (${s.p}%)</span></div><div style="height:28px;background:rgba(255,255,255,.05);border-radius:4px;overflow:hidden"><div style="height:100%;width:${s.p}%;background:linear-gradient(90deg,#8ab4f8,#81c995);border-radius:4px;position:relative"><span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:11px;font-weight:600;color:#202124">${i>0?'−'+(steps[i-1].v-s.v).toLocaleString():''}</span></div></div></div>`).join('');
  }

  // Explore funnel & segment
  const ef=document.getElementById('exploreFunnel');
  if(ef){
    const steps=[{l:'Product page',v:6200},{l:'Add to cart',v:1800},{l:'Begin checkout',v:900},{l:'Purchase',v:202}];
    ef.innerHTML=steps.map((s,i)=>`<div style="display:flex;align-items:center;gap:12px;margin-bottom:6px"><div style="width:120px;font-size:12px;color:var(--ga-text-2)">${s.l}</div><div style="flex:1;height:24px;background:rgba(138,180,248,.15);border-radius:3px;overflow:hidden"><div style="height:100%;width:${Math.round(s.v/6200*100)}%;background:#8ab4f8;border-radius:3px"></div></div><div style="width:60px;font-size:12px;color:var(--ga-text);text-align:right">${s.v.toLocaleString()}</div>${i>0?`<div style="width:50px;font-size:11px;color:#f28b82;text-align:right">−${Math.round((1-s.v/steps[i-1].v)*100)}%</div>`:'<div style="width:50px"></div>'}</div>`).join('');
  }
  const sd=document.getElementById('segmentData');
  if(sd)sd.innerHTML=`<table class="ga-table"><thead><tr><th>Metric</th><th>Value</th></tr></thead><tbody><tr><td>Segment size</td><td><strong>1,420 users</strong></td></tr><tr><td>Avg. pages viewed</td><td>4.2</td></tr><tr><td>Avg. session duration</td><td>3m 14s</td></tr><tr><td>Most-viewed category</td><td>Single Origin Beans</td></tr><tr><td>Recommended action</td><td style="color:#81c995">Retarget with dynamic product ads</td></tr></tbody></table>`;

  // Retention heatmap
  const rh=document.getElementById('retentionHeatmap');
  if(rh){
    const data=[[100,42,28,19,15,12,11,10],[100,45,30,21,16,13,12,11],[100,41,27,18,14,11,10,9],[100,44,29,20,15,12,11,10],[100,43,28,19,14,11,10,null]];
    const weeks=['Week 0','Wk 1','Wk 2','Wk 3','Wk 4','Wk 5','Wk 6','Wk 7'];
    const cohorts=['Mar 1','Mar 8','Mar 15','Mar 22','Mar 29'];
    rh.innerHTML=`<table class="ga-table"><thead><tr><th>Cohort</th>${weeks.map(w=>`<th>${w}</th>`).join('')}</tr></thead><tbody>${data.map((row,i)=>`<tr><td style="color:var(--ga-text-2)">${cohorts[i]}</td>${row.map(v=>v===null?'<td>—</td>':`<td style="background:rgba(138,180,248,${v/100*.4});color:${v>30?'#e8eaed':'#9aa0a6'}">${v}%</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }

  // Realtime ticker
  let rt=47;
  setInterval(()=>{
    rt+=Math.floor(Math.random()*7)-3;rt=Math.max(12,Math.min(120,rt));
    document.getElementById('realtimeNum')&&(document.getElementById('realtimeNum').textContent=rt);
    document.getElementById('realtimeNum2')&&(document.getElementById('realtimeNum2').textContent=rt);
    document.getElementById('rtPageviews')&&(document.getElementById('rtPageviews').textContent=rt*2+Math.floor(Math.random()*10));
  },4000);
}

// Wire up date chip
document.addEventListener('DOMContentLoaded',()=>{
  const chip=document.getElementById('dateChip');
  if(chip)chip.addEventListener('click',openDateModal);
  initLanding();
});
