// Tiny Valentine site logic – Virtual Date Version

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const letterCard = document.getElementById("letterCard");
const questionCard = document.getElementById("questionCard");
const heartPopTemplate = document.getElementById("heart-pop-template");

let currentStep = 0;
let answers = [];

/* =========================
   NO BUTTON FUN ESCALATING MESSAGES
========================= */
let noClickCount = 0;
const noMessages = [
  "Are you sureee? 🥺",
  "Think again... I'm kinda cute tho 😌",
  "What if I bring snacks? 🍿",
  "I'll let you pick the food 👀",
  "Okay okay but at least consider it? 💌",
  "You really trying to break my heart? 💔",
  "Fine… but you owe me a hug 😭💘"
];

function activateNoButtonFun() {
  if (!noButton) return;

  noButton.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
      noButton.textContent = noMessages[noClickCount];
      noClickCount++;
    } else {
      noButton.textContent = "Okay fine... just press Yes 😭💘";
    }

    // Tiny shake animation
    noButton.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" }
      ],
      { duration: 300 }
    );
  });
}

/* =========================
   VIRTUAL DATE FLOW
========================= */

const dateFlow = [
  {
    type: "date",
    question: "When are you free for our virtual date? 📅"
  },
  {
    type: "choice",
    question: "What are you craving? 🍽",
    options: [
      { name: "KBBQ", img: "https://images.unsplash.com/photo-1708388064672-6536507fdf6e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Sushi", img: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Ramen", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZW58ZW58MHx8MHx8fDA%3D" },
      { name: "Pho", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvfGVufDB8fDB8fHww" },
      { name: "Pasta", img: "https://images.unsplash.com/photo-1612152328178-4a6c83d96429?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhc3RhfGVufDB8fDB8fHww" },
      { name: "Steak", img: "https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RlYWt8ZW58MHx8MHx8fDA%3D" }
    ]
  },
  {
    type: "choice",
    question: "There’s always room for dessert… 🍰",
    options: [
      { name: "Chocolate Cake", img: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D" },
      { name: "Mochi Donut", img: "https://images.unsplash.com/photo-1714887195273-f9537814b749?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9jaGklMjBkb251dHxlbnwwfHwwfHx8MA%3D%3D" },
      { name: "Ice Cream", img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww" },
      { name: "Chè", img: "https://coupleeatsfood.com/wp-content/uploads/2022/03/Che-Thai-Vietnamese-Dessert-Drink-6.jpg" },
      { name: "Bubble Tea", img: "https://images.unsplash.com/photo-1734770580735-796a00e42cb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnViYmxlJTIwdGVhfGVufDB8fDB8fHww" }
    ]
  },
  {
    type: "choice",
    question: "What should we do after? 🎡",
    options: [
      { name: "Watch Anime", img: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Get Lost in the Park", img: "https://images.unsplash.com/photo-1605540827677-693bad36b91f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { name: "Go Stargazing", img: "https://images.unsplash.com/photo-1557229678-7a6b79e7ad2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RhcmdhemluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { name: "Feed Squirrels", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d" },
      { name: "Cook a New Recipe", img: "https://plus.unsplash.com/premium_photo-1661520870657-b55062321239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D" }
    ]
  }
];

/* =========================
   YES BUTTON → START DATE
========================= */

function onYesClick() {
  startVirtualDate();
}

function startVirtualDate() {
  currentStep = 0;
  answers = [];
  showStep();
}

/* =========================
   SHOW EACH STEP
========================= */

function showStep() {
  const step = dateFlow[currentStep];

  if (!step) return;

  // DATE TYPE
  if (step.type === "date") {
    questionCard.innerHTML = `
      <h1 class="title">${step.question}</h1>
      <input type="date" id="dateInput" style="margin:20px 0;padding:12px;width:100%;border-radius:12px;border:1px solid #ddd;font-size:16px;"/>
      <div class="buttons">
        <button class="btn btn-yes" id="nextBtn">Next →</button>
      </div>
    `;

    const today = new Date().toISOString().split("T")[0];
    document.getElementById("dateInput").setAttribute("min", today);

    document.getElementById("nextBtn").addEventListener("click", () => {
      const value = document.getElementById("dateInput").value;
      if (!value) {
        alert("You have to pick a date 😌");
        return;
      }
      answers[currentStep] = value;
      currentStep++;
      showStep();
    });

    return;
  }

  // CHOICE TYPE
  if (step.type === "choice") {
    const optionsHTML = step.options.map(option => `
      <div class="choice-card" data-value="${option.name}">
        <img src="${option.img}" alt="${option.name}" />
        <p>${option.name}</p>
      </div>
    `).join("");

    questionCard.innerHTML = `
      <h1 class="title">${step.question}</h1>
      <div class="choice-grid">${optionsHTML}</div>
    `;

    const cards = document.querySelectorAll(".choice-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        answers[currentStep] = card.dataset.value;
        currentStep++;

        if (currentStep < dateFlow.length) {
          showStep();
        } else {
          showSummary();
        }
      });
    });

    return;
  }
}

/* =========================
   FINAL SUMMARY PAGE
========================= */

function showSummary() {
  questionCard.innerHTML = `
    <h1 class="title">Our Virtual Valentine’s Date 💘</h1>
    <p class="subtitle">
      📅 When: ${answers[0] || "We’ll figure it out 😉"}<br/>
      🍽 Dinner: ${answers[1] || "Chef’s surprise"}<br/>
      🍰 Dessert: ${answers[2] || "Extra sweet"}<br/>
      🎉 Activity: ${answers[3] || "Something fun"}
    </p>
    <p style="margin-top:20px;">
      Can’t wait for our virtual date! Let’s make it extra special 💖
    </p>
    <div class="profile-pics">
      <img src="assets/me.jpg" alt="You" />
      <img src="assets/her.jpg" alt="Partner" />
    </div>
  `;

  createHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
}

/* =========================
   HEART BURST
========================= */

function createHeartBurst(centerX, centerY) {
  if (!heartPopTemplate) return;

  const container = document.body;
  const heartsCount = 12;

  for (let i = 0; i < heartsCount; i++) {
    const clone = heartPopTemplate.content.firstElementChild.cloneNode(true);
    const angle = (Math.PI * 2 * i) / heartsCount;
    const radius = 10 + Math.random() * 30;

    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius - 10;

    clone.style.left = `${centerX + offsetX}px`;
    clone.style.top = `${centerY + offsetY}px`;

    container.appendChild(clone);

    setTimeout(() => clone.remove(), 900);
  }
}

/* =========================
   MUSIC BUTTON
========================= */

function initMusic() {
  const audio = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");
  const iconEl = btn?.querySelector(".music-btn-icon");
  const labelEl = btn?.querySelector(".music-btn-label");

  if (!audio || !btn) return;

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add("is-playing");
      if (iconEl) iconEl.textContent = "⏸";
      if (labelEl) labelEl.textContent = "Pause";
    } else {
      audio.pause();
      btn.classList.remove("is-playing");
      if (iconEl) iconEl.textContent = "🎵";
      if (labelEl) labelEl.textContent = "Play music";
    }
  });
}

/* =========================
   LETTER OPEN
========================= */

function openLetter() {
  if (letterCard && questionCard) {
    letterCard.classList.add("card--hidden");
    questionCard.classList.remove("card--hidden");
  }
}

function initLetterCard() {
  if (!letterCard) return;

  letterCard.addEventListener("click", openLetter);
  letterCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLetter();
    }
  });
}

/* =========================
   INIT
========================= */

function init() {
  initLetterCard();

  if (yesButton) yesButton.addEventListener("click", onYesClick);
  activateNoButtonFun();
  initMusic();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}