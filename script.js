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

  document.getElementById("entryHeading").innerText =
    "Access Granted 💜";

  celebrate();
  setTimeout(() => showPage("boss"), 600);

} else {

  // 💀 Random Wrong Password Messages
  const wrongHeadings = [
    "Wrong Password 😭 Try Again!",
    "Nope 😈 That’s not it!",
    "Access Denied 💔",
    "Adrija is disappointed 🙄",
    "Try harder babe 💘",
    "Wrong code... suspicious 👀",
    "Nice try 😭",
    "Not so fast 😎",
    "Password incorrect 💀",
    "You’re close... maybe 👑"
  ];

  // Pick random heading
  document.getElementById("entryHeading").innerText =
    wrongHeadings[Math.floor(Math.random() * wrongHeadings.length)];

  const err = document.getElementById("error-container");

  err.classList.add("hidden");
  void err.offsetWidth;
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
   "☕ 10,000,000 x Morning Coffees Together",
  "🤗 100,000,000 x Bone-Crushing Hugs",
  "🍗 500,000 x Fried Chicken Feasts",
  "💋 1,000,000,000 x Soft Kisses",
  "💋 777,777 x Steamy Kisses",
  "🍣 9,999,999,999 x Sushiiiiiiiiii (with extra MORE SUSHIIIIIIII add-on)",
  "🗺️ 250,000 x Delhi Tours",
  "🛍️ 5,000,000 x Shoppppinggg Sprees",
  "🥞 400,000 x Dosas",
  "🥩 350,000 x Galauti Kebabs",
  "🧀 222,222 x Brieeee Cheeeese Boards",
  "🎮 600,000 x Random Games & Vid Gamesssss",
  "🏸 300,000 x Badminton Matches",
  "🕺 150,000 x Bharatnatyam & Capoeira Performances",
  "💃 200,000 x Ass-Jiggle Celebrations",
  "👗 800,000 x Sparkly Dresses & Dope Outfits",
  "📝 1,000,000 x Cute Love Letters",
  "🎁 999,999 x Surprise Babiteeee Moments",
  "🍫 700,000 x Brownieeeeee & Ferrero Rocher Nights",
  "🍕 500,000 x Pepperoni Pizza Dates",
  "🍝 450,000 x Carbonaraaaaaaa Plates",
  "🐟 300,000 x Fish n Chips",
  "🦐 350,000 x Fried Prawnssss",
  "🦑 250,000 x Fried Calamari",
  "🍨 200,000 x Malai Ice Creammmm",
  "🍵 1,000,000 x Chaiiiiii Evenings",
  "🎬 800,000 x Old Movies + Horror Movies Marathons",
  "📺 600,000 x Watching The Vampire Diaries",
  "🎶 700,000 x Bollywood Song Performances",
  "📚 400,000 x Reading Books Together",
  "🎢 120,000 x Disneyland Park Rides",
  "🗼 88,888 x Kisses on the Eiffel Tower",
  "🥐 100,000 x Croque Monsieur Dates",
  "🥖 90,000 x Paris Baguette Runs",
  "🏛️ 70,000 x Walks at Sacré-Cœur",
  "🌆 60,000 x Montparnasse Evenings",
  "🎭 300,000 x Random Situation Laugh Attacks",
  "🔥 200,000 x Playful Roasts",
  "👀 5,000,000 x Catching Glimpses",
  "🤝 10,000,000 x Holding Hands",
  "🧦 250,000 x Socks Pull Gameee Championships",
  "😴 20,000,000 x Cuddlessss & Sleeping",
  "📞 1,500,000 x Kissing on Call",
  "💭 9,000,000 x Missing Each Other",
  "😭 300,000 x Crying & Loving Harder After",
  "🛡️ 1 Lifetime x Protection",
  "💎 1 Eternal x Pampered & Coddled Treatment",
  "🌊 500,000 x Beach Days & Bikinis",
  "💬 ∞ x Nicknames",
  "💞 ∞ x Romance",
"-----------------------------------",
"💌 THANK YOU FOR SHOPPING IN ADRIJA'S HEART",
"Return Policy: No returns. No exchanges. You’re stuck with me.😭💖",
"Next Visit: Every Day ♾️",
"Special Note: Thomas, you are her favorite miracle ✨",
"Complimentary Add Ons:",
"Includes Complimentary", "⭐️“Crunchy Fried Thomasssss",
"⭐️Unlimited  TULKI NEEDS SUSHIIIIIII” Subscription",

"Bonus Add ons - (free of charge) ",
"✨ Random “I miss you” texts",
"✨ Laughing at your jokes (even the bad ones)",
"✨ Being proud of you loudly and unapologetically",
"✨Being Adrija Thomas Retail Mukherjee in every lifetime",
  <br>
"Signed,",
"Your Risquéss❤️"

];

let receiptPrinted = false;

function printReceipt() {
  if (receiptPrinted) return;
  receiptPrinted = true;

  const box = document.getElementById("receiptLines");
  const header = document.getElementById("receiptHeader");
  const sound = document.getElementById("printSound");
  

  /* 💜 PERSONAL DETAILS */
  const herName = "Thomas (Premium Boyfriend Edition)"; // <-- CHANGE THIS
  const relationshipDate = "Valid Forever"; // <-- CHANGE THIS
  const receiptnow = " 000000∞"; 
  const processed = " His Forever Girl"; 

  // Header Info Printed First
  header.innerHTML = `
    <p><b>Customer:</b> ${herName} 💜</p>
    <p><b>Date:</b> ${relationshipDate} 📅</p>
    <p><b>Reciept No:</b> ${receiptnow} </p>
    <p><b>Processed:</b> ${processed}👀</p>
     

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
      total.innerHTML = "TOTAL: Priceless💖";
      box.appendChild(total);
    }
  }

  addLine();
}


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
    "You are Mon trésor 💎",
    "You are My cutie 🥺💖",
    "You are Mon bijoux ✨💍",
    "You are Ma dudu boi 😭💜",
    "You are Ma tete de la bite 😈😂",
    "You are My Shonu 🐻💕",
    "You are Mon Pour tout 🌍❤️",
    "You are Ma biche 🦌💘",
    "You are Mon cochon 🐷💞",
    "You are My Pookie 🍪🥰",
    "You are My Thomalina 🌹💜",
    "You are My Babite 🎀💋",
    "You are Mon amour ❤️✨",
    "You are My Puchku 🐣💖",
    "You are Mon Coeur 💓🫶",
    "You are Ma Beauté 👑💜"
  ];

  // 💎 JACKPOT LOVE MESSAGES (NEW)
  const jackpotLines = [
    "🎉 YOU HAVE BEWITCHED ME BODY AND SOUL, AND I LOVE... LOVE... LOVE YOU THOMAS RETAIL MUKHERJEE. 💜💘",
    "😳 HOW DID YOU BECOME SUCH A PRO? 🔥💋",
    "🥵 YOUR BODY WILL BE THE DEATH OF ME. 😭❤️‍🔥",
    "🎉 YOU HAVE BEWITCHED ME BODY AND SOUL, AND I LOVE... LOVE... LOVE YOU THOMAS RETAIL MUKHERJEE. 💜💘",
    "😳 HOW DID YOU BECOME SUCH A PRO? 🔥💋",
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

      // Pick random jackpot line
      slotText.innerText =
        jackpotLines[Math.floor(Math.random() * jackpotLines.length)] + " " + e1;

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
    music.src = "aud4.mp3";
  }

  else if (mode === "chaos") {
    document.body.style.background = "#ff0054";

    // ⚡ Chaos Song
    music.src = "aud5.mp3";
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

  const msg = 
"My Shona, My Thomas, My Baby, My Valentine, Mon Coeur...\n\n" +
"I truly do not know where words are meant to begin when my heart feels this full.\n\n" +
"You have been the greatest pleasure of my life. Loving you has felt like discovering a hidden constellation in a sky I thought I already scoured with no luck. Yet, I can’t believe I get to explore a love so surreal, so pure, so true and magnanimously heartfelt with you.\n\n" +
"I never thought I would be able to encounter my one true love in today’s chaotic world... one who is so capable beyond measure, so incredibly beautiful in spirit and in presence, so fiercely driven and so endlessly passionate as you.\n\n" +
"I count my stars everyday to have you and I long to be with you, my shona. Your smile is what keeps me going everyday.. to see it every morning and every night; it sustains me.\n\n" +
"I can’t explain the compassion I feel for you whenever you look at me and curve those beautiful lips into a pouty sultry simper, and the carnal love I feel for you when you look at absolutely anything else but me while talking, as if you are taunting me to keep my gaze steadily at you while you make me crave for it.\n\n" +
"It’s chemical, this love. It’s fervent. It’s intrepid.\n\n" +
"From flying flights solo to flying together; from being shy to doing sexy dances online; from being 8k kms far to being 8mms close; from Agra, Jaipur, Delhi to Paris, Goa & My Heart; from first time meeting my family to openly being couples.\n\n" +
"From doubts and insecurity to realising the most concrete veracity... of having you till the end of my life, as my boyfriend, my baby, my lover, my husband, my babydaddy, my bestie, my grandma, my sibling, my everything.\n\n" +
"You have completely changed my life and I wish to be loved and cherished by you every single day.\n\n" +
"You and only you, Thomas. Only you.\n\n" +
"Juste toi, mon amour, pour toujours.\n\n" +
"Thank you for pushing me and believing in me always to do the best in life. I will try to make you proud of choosing to be with me.\n\n" +
"I hope you enjoy today and everyday by my side. I wanna see this life painted by your eyes; hear it through the voice of your heart; and feel it by being wrapped in your arms.\n\n" +
"Everyday is Valentine’s day with you. In fact it’s Thomentine with you, and I would have it no way other.\n\n" +
"Just you and me, with no care or bother; living our best life, giggling as we totter; Seulement loving you and being your kids mother; and well using your fingers as my personal frother.\n\n" +
"These are the promises I expect you to fulfill; aur bass mera haath pakde rehna sada, Thomas, mere dil.";

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
    d > 0 ? d + " days left ❤️" : "Happy Valentine’s Day!❤️";
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
    window.open("https://meet.google.com/det-mezv-sne", "_blank");
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
  window.open("https://meet.google.com/det-mezv-sne", "_blank");
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

