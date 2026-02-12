let tries = 0;
let scale = 1;
let typed = false;

/* CONFETTI */
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

/* PAGE SWITCH */
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* PHASE 1 TELEPORT */
const unlockBtn = document.getElementById("unlock");

unlockBtn.addEventListener("mouseover", () => {
  if (tries < 3) {
    unlockBtn.style.position = "absolute";
    unlockBtn.style.left = Math.random() * 80 + "%";
    unlockBtn.style.top = Math.random() * 80 + "%";
    tries++;
  } else {
    document.getElementById("passwordBox").classList.remove("hidden");
    unlockBtn.style.position = "static";
  }
});

/* PASSWORD CHECK */
document.getElementById("enter").addEventListener("click", () => {
  const val = document.getElementById("password").value.trim();

  if (val === "L'amour de ma vie") {
    celebrate();
    setTimeout(() => showPage("boss"), 600);
 } else {
  const err = document.getElementById("error-container");

  // Reset animation every time
  err.classList.add("hidden");
  void err.offsetWidth; // force reflow

  err.classList.remove("hidden");

  setTimeout(() => {
    err.classList.add("hidden");
  }, 3000);
}

});

/* PHASE 2 YES/NO */
document.getElementById("no").onclick = () => {
  scale += 0.5;
  document.getElementById("yes").style.transform = `scale(${scale})`;
};

document.getElementById("yes").onclick = () => {
  celebrate();
  showPage("dashboard");
};

/* TABS */
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

    if (tab.dataset.tab === "finale") startTyping();
    if (tab.dataset.tab === "call") startCallCountdown();
    if (tab.dataset.tab === "receipt") printReceipt();

  };
});


/* 🧾 RECEIPT PRINT ANIMATION */
const receiptData = [
  "1x Coffee Date ☕ .......... ∞",
  "5x Late Night Calls 📞 ...... 999+",
  "10x Random Laughs 😂 ........ Unlimited",
  "100x Kisses 😘 .............. Priceless",
  "1x Holding Hands 🤝 ......... Forever",
  "50x 'I miss you' texts 💌 .... Daily",
  "999x Smiles stolen 😭💜 ...... Always",
  "1x My Heart 💖 .............. Yours",
  "2x Random Eye Contact 😳 ........ Dangerous",
"7x Blushing Moments 🥹 .......... Too Many",
"12x Stolen Glances 👀 ........... Guilty",
"1x First Hello 👋 ............... Destiny",
"3x Unexpected Compliments 💬 ..... Always",
"99x Heartbeats Skipped 💓 ........ Confirmed",
"1x Cute Argument 😤 ............. Resolved",
"15x Sharing Food 🍟 ............. True Love",
"8x Matching Energy ⚡ ............ Perfect",
"20x Memes Sent 😂 ............... Daily Dose",
"1x Warm Hug 🤗 ................. Healing",
"100x Good Morning Texts ☀️ ...... Mandatory",
"100x Good Night Texts 🌙 ........ Forever",
"5x Jealousy Scenes 😭 ........... Cute Only",
"1x Handwritten Feelings ✍️ ...... Priceless",
"50x Missing You Hours 💭 ........ Constant",
"10x Surprise Smiles 😊 .......... Unstoppable",
"6x Mini Heart Attacks 💘 ........ Every Time",
"1x Favorite Person 👑 ........... Locked In",
"30x Daydreams About You 🌸 ...... Daily",
"9x Slow Dancing Imaginations 💃 .. Coming Soon",
"1x Love Language Decoder 🔑 ...... Perfect Match",
"4x Shared Silence 🤍 ............ Comfortable",
"13x Times You Made Me Soft 🫶 .... Always",
"70x Times I Said 'Aww' 😭 ........ Infinite",
"1x Forever Promise ♾️ ........... Non-Refundable",
"1x Cupid Approved ✔️ ............ Official",
"999x Butterflies 🦋 ............. Still Flying",
"1x Soul Connection ✨ ........... Real",
"1x Valentine Date Loading 🌹 ..... Soon...",
"-----------------------------------",
"💌 THANK YOU FOR SHOPPING IN ADRIJA'S HEART",
"Return Policy: NO RETURNS 😭💖",
"Manager: Cupid 👼",
"Next Visit: Every Day ♾️",
"Special Note: Thomas, you are his favorite miracle ✨"

];

let receiptPrinted = false;

function printReceipt() {
  if (receiptPrinted) return;
  receiptPrinted = true;

  const box = document.getElementById("receiptLines");
  const header = document.getElementById("receiptHeader");
  const sound = document.getElementById("printSound");
  

  /* 💜 PERSONAL DETAILS */
  const herName = "Thomas"; // <-- CHANGE THIS
  const relationshipDate = "01 Jan 2024"; // <-- CHANGE THIS

  // Header Info Printed First
  header.innerHTML = `
    <p><b>Customer:</b> ${herName} 💜</p>
    <p><b>Since:</b> ${relationshipDate} 📅</p>
    <hr>
  `;

  let i = 0;

  function addLine() {
    if (i < receiptData.length) {
      const p = document.createElement("p");
      p.innerText = receiptData[i];
      box.appendChild(p);

      // play printer sound
      sound.currentTime = 0;
      sound.play();

      i++;
      setTimeout(addLine, 500);
    } else {
      // Final Total line
      const total = document.createElement("h4");
      total.innerHTML = "TOTAL: MY HEART 💖";
      box.appendChild(total);
    }
  }

  addLine();
}


/* SLOT MACHINE */
/* 🎰 SLOT MACHINE + JACKPOT SYSTEM */
function spin() {
  const lever = document.getElementById("lever");
  const slotText = document.getElementById("slotResult");

  const reel1 = document.getElementById("reel1");
  const reel2 = document.getElementById("reel2");
  const reel3 = document.getElementById("reel3");

  // 🎰 ONE COMMON EMOJI POOL
  const emojis = ["💜", "❤️", "💖", "💕", "💘", "✨", "🌹", "👑", "♾️", "🥰"];

  // Romantic compliment lines
  const lines = [
    "You are my forever 💜",
    "You are pure magic ✨",
    "My heart chose you ❤️",
    "You are my soulmate ♾️",
    "You are my Valentine Queen 👑"
  ];

  // Lever pull animation
  lever.classList.add("pull");

  // Start spinning animation
  reel1.classList.add("reelSpin");
  reel2.classList.add("reelSpin");
  reel3.classList.add("reelSpin");

  slotText.innerText = "Spinning... 🎰💨";
  slotText.classList.remove("glowPop");
  slotText.classList.remove("jackpot");

  // Stop lever quickly
  setTimeout(() => {
    lever.classList.remove("pull");
  }, 400);

  // Stop reels + show result
  setTimeout(() => {
    reel1.classList.remove("reelSpin");
    reel2.classList.remove("reelSpin");
    reel3.classList.remove("reelSpin");

    // Pick random emojis
 let e1 = emojis[Math.floor(Math.random() * emojis.length)];
let e2 = emojis[Math.floor(Math.random() * emojis.length)];
let e3 = emojis[Math.floor(Math.random() * emojis.length)];

/* 🎯 BONUS: Make Jackpot Easier (10% chance) */
if (Math.random() < 0.1) {
  e2 = e1;
  e3 = e1;
}
    reel1.innerText = e1;
    reel2.innerText = e2;
    reel3.innerText = e3;

    // 🎉 JACKPOT CHECK
    if (e1 === e2 && e2 === e3) {
      slotText.innerText = `🎉 JACKPOT!!! You won my heart forever ${e1} 💖`;

      slotText.classList.add("jackpot");
      slotText.classList.add("glowPop");

      // Mega confetti explosion
      confetti({
        particleCount: 250,
        spread: 150,
        origin: { y: 0.6 }
      });

    } else {
      // Normal compliment
      slotText.innerText =
        lines[Math.floor(Math.random() * lines.length)];

      slotText.classList.add("glowPop");

      // Small confetti burst
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.7 }
      });
    }

  }, 1200);
}






/* MOOD */
function setVibe(mode) {
  const music = document.getElementById("music");

  if (mode === "romantic") {
    document.body.style.background = "#ffb3c6";

    // 🎶 Romantic Song
    music.src = "Rihanna - We Found Love ft. Calvin Harris.mp3";
  }

  else if (mode === "chaos") {
    document.body.style.background = "#ff0054";

    // ⚡ Chaos Song
    music.src = "assets/chaos.mp3";
  }

  else if (mode === "sleepy") {
    document.body.style.background = "#b8c0ff";

    // ☁️ Sleepy Song
    music.src = "assets/sleepy.mp3";
  }

  // Always play after button click
  music.play();
}


/* TYPEWRITER */
function startTyping() {
  if (typed) return;
  typed = true;

  const msg = "You are the love of my life. Happy Valentine’s Day ❤️ You are the love of my life. Happy Valentine’s Day ❤️ ";
  let i = 0;
  const target = document.getElementById("typewriter");

  function type() {
    if (i < msg.length) {
      target.innerHTML += msg.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}

/* COUNTDOWN */
setInterval(() => {
  const vDay = new Date("Feb 14, 2026").getTime();
  const diff = vDay - Date.now();
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText =
    d > 0 ? d + " days left ❤️" : "Happy Valentine’s Day!";
}, 1000);

/* POPUP */
document.getElementById("dontPress").onclick = () => {
  document.getElementById("popup").classList.remove("hidden");
};

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}


/* 💜 FLOATING HEART GENERATOR */
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💜";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 400);


/* 🎤 GALLERY VOICE VIEWER FIX */
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerCaption = document.getElementById("viewerCaption");
const viewerVoice = document.getElementById("viewerVoice");

function setupGallery() {
  document.querySelectorAll(".photo").forEach(photo => {
    photo.onclick = () => {
      viewer.classList.remove("hidden");

      viewerImg.src = photo.src;
      viewerCaption.innerText = photo.dataset.caption;

      viewerVoice.src = photo.dataset.voice;
      viewerVoice.play();
    };
  });
}

setupGallery();

function closeViewer() {
  viewer.classList.add("hidden");
  viewerVoice.pause();
}

// 🧾 Receipt Auto Scroll
setInterval(() => {
  const receipt = document.getElementById("receipt");
  if (receipt.classList.contains("active")) {
    receipt.scrollTop += 1;
  }
}, 80);

document.getElementById("loveCallBtn").onclick = () => {
  
  // Cute Confetti Burst
  confetti({
    particleCount: 80,
    spread: 120,
    origin: { y: 0.6 }
  });

  // Small Delay for Drama
  setTimeout(() => {
    window.open("https://meet.google.com/YOUR-LINK-HERE", "_blank");
  }, 700);
};


/* 💌 LOVE CALL COUNTDOWN + LOADING PORTAL */

let callReady = false;

function startCallCountdown() {
  let timeLeft = 5;

  const countdownText = document.getElementById("callCountdown");
  const btn = document.getElementById("loveCallBtn");
  const status = document.getElementById("callStatus");

  // Reset state every time tab opens
  btn.disabled = true;
  btn.innerText = "🔒 Connecting...";
  status.innerText = "";
  timeLeft = 5;

  const timer = setInterval(() => {
    countdownText.innerText = `Call unlocks in: ${timeLeft} ❤️`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);

      countdownText.innerText = "Portal Ready 💜";
      btn.disabled = false;
      btn.innerText = "🚨 Summon Love Call";
      status.innerText = "Adrija is waiting on the other side... 💘";

      callReady = true;
    }
  }, 1000);
}

/* BUTTON CLICK WITH LOADING DRAMA */
document.getElementById("loveCallBtn").onclick = () => {
  if (!callReady) return;

  const status = document.getElementById("callStatus");

  status.innerText = "Connecting to Love Server... 💓";

  confetti({
    particleCount: 80,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    status.innerText = "Searching Thomas... 📡";
  }, 800);

  setTimeout(() => {
    status.innerText = "Match Found 💜 Opening Portal...";
  }, 1600);

  setTimeout(() => {
  document.getElementById("missPopup").classList.remove("hidden");
}, 2500);

};

/* 💜 OPEN MEET AFTER MISS ME POPUP */

function openMeet() {
  document.getElementById("missPopup").classList.add("hidden");

  // Final confetti burst 💖
  confetti({
    particleCount: 120,
    spread: 150,
    origin: { y: 0.6 }
  });

  // Open Google Meet
  window.open("https://meet.google.com/YOUR-LINK-HERE", "_blank");
}

/* 😈 NO BUTTON ALWAYS RUNS AWAY */

const noBtn = document.getElementById("runNoBtn");

noBtn.addEventListener("mouseover", () => {
  const box = document.querySelector(".missBox");

  // Get popup box size
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  // Random new position inside the popup
  const x = Math.random() * (boxWidth - 100);
  const y = Math.random() * (boxHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
