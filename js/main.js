// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 30); }, { passive: true });

// ---- HAMBURGER ----
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
function toggleMenu() { hamburger.classList.toggle('open'); mobileNav.classList.toggle('open'); }
function closeMenu() { hamburger.classList.remove('open'); mobileNav.classList.remove('open'); }

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' }); }
  });
});

// ---- FADE IN ----
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.08}s`; obs.observe(el); });

// ---- ACTIVE NAV ----
const secs = document.querySelectorAll('section[id]');
const nls = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let c = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 100) c = s.id; });
  nls.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + c); });
}, { passive: true });

// ---- RESUME PDF ----
function downloadResume() {
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Rahul Kumar Singh Resume</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',Arial,sans-serif;font-size:9.5pt;color:#1a1a2e;line-height:1.5;padding:22px 28px}
.hdr{border-bottom:3px solid #1a73e8;padding-bottom:12px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-start}
.name{font-size:20pt;font-weight:700;color:#1a1a2e;letter-spacing:-.5px}
.title{font-size:9.5pt;color:#1a73e8;font-weight:600;margin-top:3px}
.ci{text-align:right;font-size:8pt;color:#555;line-height:1.8}
.st{font-size:9pt;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#1a73e8;border-bottom:1px solid #e0e0e0;padding-bottom:3px;margin-bottom:8px;margin-top:12px}
.sum{font-size:8.5pt;color:#444;line-height:1.65}
.eh{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3px}
.er{font-size:10pt;font-weight:700}.ec{font-size:8.5pt;font-weight:600;color:#1a73e8}.ed{font-size:8pt;color:#888}
.desc{font-size:8.5pt;color:#555;margin:3px 0 5px;line-height:1.5}
ul{padding-left:14px}li{font-size:8.5pt;color:#555;margin-bottom:2px;line-height:1.5}
li strong{color:#1a1a2e;font-weight:600}
.tc{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:12px}
.sg{margin-bottom:7px}.st2{font-size:8.5pt;font-weight:700;color:#1a1a2e;margin-bottom:2px}
.sv{font-size:8.5pt;color:#555}
.en{font-size:9.5pt;font-weight:700}.ei{font-size:8.5pt;color:#1a73e8;font-weight:600}.em{font-size:8pt;color:#888}
.ci2{font-size:8.5pt;color:#555;margin-bottom:3px}.ei2{margin-bottom:8px}
@media print{body{padding:14px 18px}}
</style></head><body>
<div class="hdr">
  <div><div class="name">Rahul Kumar Singh</div><div class="title">Marketing Manager | ABM · Lead Management · Demand Generation · Sales Enablement</div></div>
  <div class="ci">+91 9629444795<br>singh91.rahulkumar@gmail.com<br>linkedin.com/in/singhkumarrahul<br>Gurgaon, Haryana, India</div>
</div>
<div class="st">Professional Summary</div>
<div class="sum">Results-oriented Marketing Leader with 11+ years of experience architecting high-impact B2B marketing programs that accelerate pipeline, deepen customer engagement, and deliver measurable revenue outcomes. Currently Manager at Cognizant, leading AI-powered lead generation and demand generation across North America and EMEA. Expertise spans ABM, Lead Lifecycle Management, Integrated Campaigns, Content Strategy, and Cross-Functional Alignment across BFSI, Manufacturing, Retail, and TMT industries.</div>
<div class="st">Experience</div>
<div style="margin-bottom:9px">
  <div class="eh"><div><div class="er">Manager — Lead Generation &amp; Marketing Operations</div><div class="ec">Cognizant</div></div><div class="ed">Jul 2025 – Present</div></div>
  <ul><li>Leveraging AI tools and intelligent automation to simplify lead management workflows, enhance MQL-to-MSQL conversion and improve funnel visibility</li>
  <li>Designing advanced process flow improvements for lead tracking and measurement across North America and EMEA</li>
  <li>Orchestrating multi-channel demand gen campaigns via LinkedIn, Content Syndication, and Email for key enterprise accounts</li>
  <li>Collaborating with senior leadership and vertical account teams to align marketing and sales execution</li></ul>
</div>
<div style="margin-bottom:9px">
  <div class="eh"><div><div class="er">Marketing Manager</div><div class="ec">Evalueserve</div></div><div class="ed">Aug 2021 – Jun 2025</div></div>
  <ul><li>Developed marketing solutions, created comprehensive proposals, and led campaigns to boost solution awareness and generate business opportunities</li>
  <li>Created and implemented strategic marketing plans across BFSI, Manufacturing, Retail, and Healthcare to drive growth and brand equity</li>
  <li>Spearheaded the full launch of the Retail Cluster — narrative creation, website development, campaigns, and nurture email workflows</li>
  <li>Led integrated campaigns across email, social media, LinkedIn, Demandbase, and Google Ads; ensured consistent MQL flow and MSQLs conversion</li>
  <li>Built strong C-level stakeholder relationships; collaborated with sales on ABM strategies to drive pipeline growth</li>
  <li>Drove SEO optimisation alongside digital team to boost organic traffic, improve rankings, and enhance lead generation</li></ul>
</div>
<div style="margin-bottom:9px">
  <div class="eh"><div><div class="er">Marketing Analyst &amp; Team Lead / UI Developer</div><div class="ec">Tata Consultancy Services</div></div><div class="ed">Sep 2014 – Jul 2021</div></div>
  <ul><li>Coordinated with BRMs and Client Partners to create sales pipelines; drove cross-selling/up-selling for BFSI accounts in US &amp; Latin America</li>
  <li>Designed marketing materials (case studies, PoVs, brochures); executed segmented ABM email campaigns via Adobe Marketing Cloud</li>
  <li>Led team of 8 professionals; improved content loading speed by <strong>40%</strong>; reduced manual coding by <strong>20%</strong></li>
  <li>Received <strong>Star Performance Award</strong> (Best Team Lead) and <strong>Excellence Reward</strong> from clients and senior management</li></ul>
</div>
<div class="tc">
<div>
  <div class="st">Skills</div>
  <div class="sg"><div class="st2">Marketing Tools</div><div class="sv">Salesforce, Pardot, WorkFront, Marketo, LinkedIn Ads, Adobe Marketing Cloud, Demandbase, Google Ads</div></div>
  <div class="sg"><div class="st2">Campaign Types</div><div class="sv">ABM, Multichannel, Demand Generation, Email Marketing, Content Syndication</div></div>
  <div class="sg"><div class="st2">Digital Marketing</div><div class="sv">SEO, Social Media, Google Analytics, Adobe Analytics</div></div>
  <div class="sg"><div class="st2">Content</div><div class="sv">Thought Leadership, Case Studies, PoVs, Brochures, Value Propositions</div></div>
  <div class="sg"><div class="st2">Leadership</div><div class="sv">Stakeholder Management, Team Management, Cross-Functional Collaboration</div></div>
</div>
<div>
  <div class="st">Education</div>
  <div class="ei2"><div class="en">MBA — Marketing &amp; Analytics</div><div class="ei">Great Lakes Institute of Management, Gurgaon</div><div class="em">2018–2019 · CGPA 3.23/4.0</div></div>
  <div class="ei2"><div class="en">B.Tech — Mechanical Engineering</div><div class="ei">NIET Greater Noida</div><div class="em">2010–2014 · 71%</div></div>
  <div class="st">Certifications</div>
  <div class="ci2">Build Reports in Adobe Campaign Classic — Adobe</div>
  <div class="ci2">Learning Adobe Reports and Analytics — Adobe</div>
  <div class="ci2">SEO: Link Building in Depth — LinkedIn Learning</div>
</div>
</div>
</body></html>`;

  const b = new Blob([html], { type: 'text/html' });
  const u = URL.createObjectURL(b);
  const w = window.open(u, '_blank', 'width=920,height=720');
  w.addEventListener('load', () => {
    setTimeout(() => { w.document.title = 'Rahul_Kumar_Singh_Resume'; w.print(); setTimeout(() => URL.revokeObjectURL(u), 3000); }, 500);
  });
}
