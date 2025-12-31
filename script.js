const app = document.getElementById("app");
const music = document.getElementById("music");
music.volume = 0.2;

/* ❤️ Hearts animation */
for (let i = 0; i < 50; i++) {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤";
  h.style.left = Math.random()*100+"%";
  h.style.fontSize=(14+Math.random()*22)+"px";
  h.style.animationDuration=(5+Math.random()*6)+"s";
  document.getElementById("hearts").appendChild(h);
}

/* Questions */
let step = 0;
const answers=[];

const yesNo = [
  "If time went back, would you leave me again?",
  "If I told you that I love you, would you take the first step?",
  "Do you trust me?",
  "Do you remember everything we did together?",
  "Did you ever doubt that I love you?",
  "Do you trust that I would never leave you if you stayed with me?",
  "Do you know that I love you and that I want to stay with you in every moment?",
  "When I stay alone and miss you, did you miss me too?",
  "Are you ready to give up anything for me?",
  "Did you ever doubt my love for you?",
  "Do you doubt it now?"
];

const textQ = [
  "What do you love the most about me?",
  "Why did you leave me?",
  "What do you want to tell me from your heart?",
  "If I promised you that I would never leave you, would you leave me again?",
  "What could you do for me?",
  "Who is the person you loved the most?",
  "Who is the person you love the most now?",
  "Are you jealous?",
  "Have you ever thought that even if I come back, I would still love you the same way?"
];

function render(html){
  app.style.opacity=0;
  setTimeout(()=>{app.innerHTML=html; app.style.opacity=1;},150);
}

/* Start */
function start(){
  render(`<h2>Are you ELENA?</h2>
    <button onclick="answerYesNo('Yes')">Yes</button>
    <button onclick="answerYesNo('No')">No</button>
  `);
}

/* Yes/No logic */
function answerYesNo(value){
  answers.push({question:yesNo[step-1]||"Are you ELENA?",answer:value});
  if(step<yesNo.length){
    render(`<h2>${yesNo[step]}</h2>
      <button onclick="answerYesNo('Yes')">Yes</button>
      <button onclick="answerYesNo('No')">No</button>`);
    step++;
  }else{
    step=0; nextText();
  }
}

/* Text questions */
function nextText(){
  if(step<textQ.length){
    render(`<h2>${textQ[step]}</h2>
      <textarea id="txt" placeholder="Write from your heart..."></textarea>
      <button onclick="saveText()">Next</button>`);
  }else finalPage();
}

function saveText(){
  const txt=document.getElementById("txt").value.trim();
  if(!txt) return;
  answers.push({question:textQ[step],answer:txt});
  step++;
  nextText();
}

/* Final page with FormSubmit */
function finalPage(){
  render(`
    <h2 style="color:red;">I love you ❤️</h2>
    <p>You are so special for me.</p>
    <form id="finalForm" method="POST" action="https://formsubmit.co/rezoxli7wak@gmail.com">
      <input type="hidden" name="quiz_answers" value='${JSON.stringify(answers, null, 2)}'>
    </form>
    <p style="opacity:0.7;">(Write your final message here)</p>
  `);
  document.getElementById("finalForm").submit();
}

start();
