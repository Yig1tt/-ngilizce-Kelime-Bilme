const words = [
    { en: "apple", tr: "elma" },
    { en: "sun", tr: "güneş" },
    { en: "book", tr: "kitap" },
    { en: "car", tr: "araba" },
    { en: "water", tr: "su" },
    { en: "flower", tr: "çiçek" },
    { en: "house", tr: "ev" },
    { en: "wallet", tr: "cüzdan" },
    { en: "phone", tr: "telefon" },
    { en: "tree", tr: "ağaç" },
    { en: "computer", tr: "bilgisayar" },
    { en: "table", tr: "masa" },
    { en: "chair", tr: "sandalye" },
    { en: "window", tr: "pencere" },
    { en: "door", tr: "kapı" },
    { en: "pen", tr: "kalem" },
    { en: "pencil", tr: "kurşun kalem" },
    { en: "notebook", tr: "defter" },
    { en: "school", tr: "okul" },
    { en: "teacher", tr: "öğretmen" },
    { en: "student", tr: "öğrenci" },
    { en: "clock", tr: "saat" },
    { en: "bottle", tr: "şişe" },
    { en: "bag", tr: "çanta" },
    { en: "shoes", tr: "ayakkabı" },
    { en: "hat", tr: "şapka" },
    { en: "shirt", tr: "gömlek" },
    { en: "pants", tr: "pantolon" },
    { en: "dress", tr: "elbise" },
    { en: "glass", tr: "bardak" },
    { en: "milk", tr: "süt" },
    { en: "bread", tr: "ekmek" },
    { en: "cheese", tr: "peynir" },
    { en: "egg", tr: "yumurta" },
    { en: "butter", tr: "tereyağı" },
    { en: "salt", tr: "tuz" },
    { en: "sugar", tr: "şeker" },
    { en: "meat", tr: "et" },
    { en: "fish", tr: "balık" },
    { en: "chicken", tr: "tavuk" },
    { en: "cat", tr: "kedi" },
    { en: "dog", tr: "köpek" },
    { en: "bird", tr: "kuş" },
    { en: "cow", tr: "inek" },
    { en: "horse", tr: "at" },
    { en: "sheep", tr: "koyun" },
    { en: "goat", tr: "keçi" },
    { en: "rabbit", tr: "tavşan" },
    { en: "mouse", tr: "fare" },
    { en: "lion", tr: "aslan" },
    { en: "tiger", tr: "kaplan" },
    { en: "monkey", tr: "maymun" },
    { en: "bear", tr: "ayı" },
    { en: "fox", tr: "tilki" },
    { en: "wolf", tr: "kurt" },
    { en: "zebra", tr: "zebra" },
    { en: "giraffe", tr: "zürafa" },
    { en: "elephant", tr: "fil" },
    { en: "truck", tr: "kamyon" },
    { en: "bicycle", tr: "bisiklet" },
    { en: "motorcycle", tr: "motosiklet" },
    { en: "bus", tr: "otobüs" },
    { en: "train", tr: "tren" },
    { en: "airplane", tr: "uçak" },
    { en: "boat", tr: "tekne" },
    { en: "ship", tr: "gemi" },
    { en: "road", tr: "yol" },
    { en: "street", tr: "sokak" },
    { en: "city", tr: "şehir" },
    { en: "village", tr: "köy" },
    { en: "country", tr: "ülke" },
    { en: "world", tr: "dünya" },
    { en: "map", tr: "harita" },
    { en: "flag", tr: "bayrak" },
    { en: "music", tr: "müzik" },
    { en: "song", tr: "şarkı" },
    { en: "movie", tr: "film" },
    { en: "game", tr: "oyun" },
    { en: "ball", tr: "top" },
    { en: "team", tr: "takım" },
    { en: "sport", tr: "spor" },
    { en: "tennis", tr: "tenis" },
    { en: "football", tr: "futbol" },
    { en: "basketball", tr: "basketbol" },
    { en: "swimming", tr: "yüzme" },
    { en: "running", tr: "koşu" },
    { en: "jump", tr: "zıplamak" },
    { en: "sleep", tr: "uyumak" },
    { en: "eat", tr: "yemek" },
    { en: "drink", tr: "içmek" },
    { en: "read", tr: "okumak" },
    { en: "write", tr: "yazmak" },
    { en: "listen", tr: "dinlemek" },
    { en: "speak", tr: "konuşmak" },
    { en: "walk", tr: "yürümek" },
    { en: "run", tr: "koşmak" },
    { en: "play", tr: "oynamak" },
    { en: "open", tr: "açmak" },
    { en: "close", tr: "kapatmak" },
    { en: "love", tr: "sevmek" },
    { en: "see", tr: "görmek" },
    { en: "look", tr: "bakmak" },
    { en: "hear", tr: "duymak" },
    { en: "smile", tr: "gülümsemek" }
  ];
  
  let shuffledWords = [];
  let currentIndex = 0;
  let locked = false;
  let correctCount = 0;
  let wrongCount = 0;
  let timer = 20;
  let timerInterval = null;
  let timerStarted = false;
  
  const englishWord = document.getElementById("english-word");
  const turkishWord = document.getElementById("turkish-word");
  const answerInput = document.getElementById("answer-input");
  const card = document.getElementById("card");
  const correctMeaning = document.getElementById("correct-meaning");
  const correctCountEl = document.getElementById("correct-count");
  const wrongCountEl = document.getElementById("wrong-count");
  const timerDisplay = document.getElementById("timer");
  const endMessage = document.getElementById("end-message");
  const restartBtn = document.getElementById("restart-btn");
  
  function shuffleWords() {
    shuffledWords = [...words].sort(() => Math.random() - 0.5);
  }
  
  function loadWord() {
    const word = shuffledWords[currentIndex];
    englishWord.textContent = word.en;
    turkishWord.textContent = word.tr;
    answerInput.value = "";
    correctMeaning.classList.add("hidden");
    card.classList.remove("correct", "incorrect");
    locked = false;
    answerInput.focus();
  }
  
  function startTimer() {
    timerDisplay.textContent = `⏱️ ${timer}`;
    timerInterval = setInterval(() => {
      timer--;
      timerDisplay.textContent = `⏱️ ${timer}`;
      if (timer <= 0) {
        clearInterval(timerInterval);
        finishGame();
      }
    }, 1000);
  }
  
  function finishGame() {
    locked = true;
    answerInput.disabled = true;
  
    if (correctCount > wrongCount) {
      endMessage.textContent = `🏆 Tebrikler! ${correctCount} doğru yaptın!`;
      endMessage.classList.remove("hidden");
      endMessage.classList.add("success");
    } else {
      endMessage.textContent = `😕 Biraz daha dikkat etmelisin!`;
      endMessage.classList.remove("hidden");
      endMessage.classList.add("fail");
    }
  
    restartBtn.classList.remove("hidden");
  }
  
  restartBtn.addEventListener("click", () => {
    correctCount = 0;
    wrongCount = 0;
    timer = 20;
    currentIndex = 0;
    timerStarted = false;
  
    correctCountEl.textContent = "0";
    wrongCountEl.textContent = "0";
    answerInput.disabled = false;
  
    endMessage.className = "hidden";
    endMessage.textContent = "";
  
    restartBtn.classList.add("hidden");
    timerDisplay.textContent = `⏱️ ${timer}`;
  
    shuffleWords();
    loadWord();
    answerInput.focus();
  });
  
  function showConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  function checkAnswerOnEnter(event) {
    if (event.key === "Enter" && !locked && timer > 0) {
      const userAnswer = answerInput.value.trim().toLowerCase();
      const correctAnswer = shuffledWords[currentIndex].tr.toLowerCase();
  
      locked = true;
  
      if (userAnswer === correctAnswer) {
        card.classList.add("correct");
        correctCount++;
        correctCountEl.textContent = correctCount;
        showConfetti();
      } else {
        card.classList.add("incorrect");
        wrongCount++;
        wrongCountEl.textContent = wrongCount;
        correctMeaning.classList.remove("hidden");
      }
  
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % shuffledWords.length;
        loadWord();
      }, 1500);
    }
  }
  
  answerInput.addEventListener("keydown", (event) => {
    if (!timerStarted && event.key.length === 1) {
      timerStarted = true;
      startTimer();
    }
  });
  
  answerInput.addEventListener("keydown", checkAnswerOnEnter);
  
  document.addEventListener("DOMContentLoaded", () => {
    shuffleWords();
    loadWord();
    timerDisplay.textContent = `⏱️ ${timer}`;
  });
  
