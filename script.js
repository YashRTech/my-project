const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const rockImg = document.querySelector(".rockImg");
const paperImg = document.querySelector(".paperImg");
const scissorImg = document.querySelector(".scissorImg");
const rockImgCompt = document.querySelector(".rockImgCompt");
const paperImgCompt = document.querySelector(".paperImgCompt");
const scissorImgCompt = document.querySelector(".scissorImgCompt");
const playerGlow = document.querySelector(".playerGlow");
const drawGlow = document.querySelector(".drawGlow");
const computerGlow = document.querySelector(".computerGlow");

// sound effects
const winSound = new Audio("/soundeffects/gamewin.mp3");
const loseSound = new Audio("/soundeffects/gamelose.mp3");
const drawSound = new Audio("/soundeffects/gamedraw.mp3");
const resetSound= new Audio("/soundeffects/resetsound.mp3");

const playSound = (sound) => {
  sound.currentTime = 0; // Resetting audio to the start
  sound.play().catch((error) => console.error("Error playing sound:", error));
};
const glow = (element) => {
  element.classList.add("animate-glow");
  setTimeout(() => {
    element.classList.remove("animate-glow");
  }, 1000);
};

let player = document.querySelector(".player");
let computerC = document.querySelector(".computer");
let draw = document.querySelector(".draw");

const btns = document.querySelector(".btns");

let winner = document.querySelector(".winner");
const applyShake = (element) => {
  element.classList.add("animate-shake");
  setTimeout(() => {
    element.classList.remove("animate-shake");
  }, 700);
};
const applyShakeOpposite = (element) => {
  element.classList.add("animate-shake-opposite");
  setTimeout(() => {
    element.classList.remove("animate-shake-opposite");
  }, 700);
};

const showResultAnimation = () => {
  winner.classList.add("animate-fade-scale");
  setTimeout(() => {
    winner.classList.remove("animate-fade-scale");
  }, 500);
};

let playerCount = parseInt(localStorage.getItem("playerScore")) || 0;
let computerCount = parseInt(localStorage.getItem("computerScore")) || 0;
let drawCount = parseInt(localStorage.getItem("drawScore")) || 0;

const loadScore = () => {
  player.innerText = playerCount;
  computerC.innerText = computerCount;
  draw.innerText = drawCount;
};

// Load scores when the page loads
loadScore();

const saveScore = () => {
  localStorage.setItem("playerScore", playerCount);
  localStorage.setItem("computerScore", computerCount);
  localStorage.setItem("drawScore", drawCount);
};


const choices = ["rock", "paper", "scissors"];

let computer;
let user;

const computerChoice = () => {
  computer = Math.floor(Math.random() * 3);
  if (computer == 0) {
    rockImgCompt.classList.replace("hidden", "inline");
    paperImgCompt.classList.replace("inline", "hidden");
    scissorImgCompt.classList.replace("inline", "hidden");
  } else if (computer == 1) {
    paperImgCompt.classList.replace("hidden", "inline");
    rockImgCompt.classList.replace("inline", "hidden");
    scissorImgCompt.classList.replace("inline", "hidden");
  } else if (computer == 2) {
    scissorImgCompt.classList.replace("hidden", "inline");
    paperImgCompt.classList.replace("inline", "hidden");
    rockImgCompt.classList.replace("inline", "hidden");
  }
};

// console.log(computer);

const winCheck = () => {
  if (computer == user) {
    winner.innerText = "Its a Draw ! 🙃🙃";
    drawCount++;
    draw.innerText = drawCount;
    playSound(drawSound);
    glow(drawGlow);
  } else {
    if (computer == 0 && user == 1) {
      winner.innerText = "Player Win ! 🎉🎉";
      playerCount++;
      player.innerText = playerCount;
      playSound(winSound);
      glow(playerGlow);
    } else if (computer == 0 && user == 2) {
      winner.innerText = "computer Win ! 🎉🎉";
      computerCount++;
      computerC.innerText = computerCount;
      playSound(loseSound);
      glow(computerGlow);
    } else if (computer == 1 && user == 0) {
      winner.innerText = "computer Win ! 🎉🎉";
      computerCount++;
      computerC.innerText = computerCount;
      playSound(loseSound);
      glow(computerGlow);
    } else if (computer == 1 && user == 2) {
      winner.innerText = "Player Win ! 🎉🎉";
      playerCount++;
      player.innerText = playerCount;
      playSound(winSound);
      glow(playerGlow);
    } else if (computer == 2 && user == 0) {
      winner.innerText = "Player Win ! 🎉🎉";
      playerCount++;
      player.innerText = playerCount;
      playSound(winSound);
      glow(playerGlow);
    } else if (computer == 2 && user == 1) {
      winner.innerText = "computer Win ! 🎉🎉";
      computerCount++;
      computerC.innerText = computerCount;
      playSound(loseSound);
      glow(computerGlow);
    }
  }
  saveScore();
  showResultAnimation();
};

rockBtn.addEventListener("click", () => {
  rockImg.classList.replace("hidden", "inline");
  paperImg.classList.replace("inline", "hidden");
  scissorImg.classList.replace("inline", "hidden");
  computer = Math.floor(Math.random() * 3);
  user = 0;
  computerChoice();
  winCheck();
});
paperBtn.addEventListener("click", () => {
  paperImg.classList.replace("hidden", "inline");
  rockImg.classList.replace("inline", "hidden");
  scissorImg.classList.replace("inline", "hidden");
  user = 1;
  computerChoice();
  winCheck();
});
scissorBtn.addEventListener("click", () => {
  scissorImg.classList.replace("hidden", "inline");
  paperImg.classList.replace("inline", "hidden");
  rockImg.classList.replace("inline", "hidden");
  user = 2;

  computerChoice();
  winCheck();
});

document.querySelector(".resetBtn").addEventListener("click", () => {
  computerCount = 0;
  playerCount = 0;
  drawCount = 0;
  player.innerText = playerCount;
  computerC.innerText = computerCount;
  draw.innerText = drawCount;
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("computerScore", 0);
  localStorage.setItem("drawScore", 0);

  playSound(resetSound);
  

  winner.innerText = "Let's Play!";
  paperImg.classList.replace("hidden", "inline");
  rockImg.classList.replace("inline", "hidden");
  scissorImg.classList.replace("inline", "hidden");

  paperImgCompt.classList.replace("hidden", "inline");
  rockImgCompt.classList.replace("inline", "hidden");
  scissorImgCompt.classList.replace("inline", "hidden");
});

rockBtn.addEventListener("click", () => {
  applyShake(paperImg);
  applyShakeOpposite(paperImgCompt);
  applyShake(rockImg);
  applyShakeOpposite(rockImgCompt);
  applyShake(scissorImg);
  applyShakeOpposite(scissorImgCompt);
});

paperBtn.addEventListener("click", () => {
  applyShake(paperImg);
  applyShakeOpposite(paperImgCompt);
  applyShake(rockImg);
  applyShakeOpposite(rockImgCompt);
  applyShake(scissorImg);
  applyShakeOpposite(scissorImgCompt);
});

scissorBtn.addEventListener("click", () => {
  applyShake(paperImg);
  applyShakeOpposite(paperImgCompt);
  applyShake(rockImg);
  applyShakeOpposite(rockImgCompt);
  applyShake(scissorImg);
  applyShakeOpposite(scissorImgCompt);
});
