// Start game variable
const startBtn = document.getElementById("startBtn");

// Timer variables
const startingMinutes = 1;
let time = startingMinutes * 59;
const timerEl = document.getElementById("timer");
let countdownTimer;

// Quiz variables
const quizContainerEl = document.getElementById("quizContainer");
const initialsContainerEl = document.getElementById("initialsContainer");
const initialsEl = document.getElementById("initials");
const quizQue = document.getElementById("question");
let answerHTML = "";
const answerButtonEl = document.getElementById("answerButtons");
let shuffledQuestions, currentQuestionIndex;
const questionsMaxLength = 10;
let points = 0;

// Start button & hide
startBtn.addEventListener("click", startGame);

function countdown() {
  console.log("Starting countdownTimer...");
  // Time Interval
  countdownTimer = setInterval(function () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    console.log("seconds=" + seconds);
    console.log("time=" + time);
    if (time <= 0) {
      timerEl.innerHTML = "Game Over";
      // Stop timer
      clearInterval(countdownTimer);
      // Show end game results
      endGame();
    }
  }, 1000);
}

function startGame() {
  startBtn.classList.add("hide");
  // Shuffle questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  quizContainerEl.classList.remove("hide");
  showQuestion();
  answerButtonEl.addEventListener("click", showQuestion);

  // Start counting down
  countdown();
}

function showQuestion() {
  var question = shuffledQuestions[currentQuestionIndex];
  // console.log("showQuestion...");
  // console.log("event.type=" + event);
  if (currentQuestionIndex == 10) {
    endGame();
  } else {
    console.log("showQuestion=" + question.questionText);
    answerHTML = "";
    quizQue.innerText = question.questionText;
    for (var i = 0; i < question.answers.length; i++) {
      var a = question.answers[i];

      // Dynamically display answer buttons
      answerHTML +=
        '<button class="btn" onclick="submitAnswer(' +
        a.correct +
        ')">' +
        a.text +
        "</button>";
    }
    answerButtonEl.innerHTML = answerHTML;
    currentQuestionIndex++;
  }
}

function submitAnswer(isCorrect) {
  console.log("XXX submitAnswer=" + isCorrect);
  if (isCorrect == true) {
    points++;
    console.log("points=" + points);
  } else {
    time = time - 10;
  }
}

let highScores = JSON.parse(localStorage.getItem("points")) || {};
(endGame) => {
  clearInterval(countdownTimer);
  console.log("End game.");
  quizContainerEl.setAttribute("style", "visibility:hidden");
  //createInitInput();
  initialsContainerEl.setAttribute("style", "visibility:visible");
  initialsEl.addEventListener("keyup", function (e) {
    console.log("initials entered...");
    //e.preventDefault();
    if (e.keyCode == 13) {
      console.log("initInput=" + initialsEl.value);
      initials = initialsEl.value + "::" + new Date();
      alert("Click 'View Highscores' to see the scoreboard");
      // localStorage.setItem(initials, points);
      highScores[initials] = points;
      localStorage.setItem("points", JSON.stringify(highScores));
    }
  });
};

// Pop Quiz questions array
const questions = [
  {
    questionText: "What is the real last name of will.i.am?",
    answers: [
      { text: "Adams", correct: true },
      { text: "Smith", correct: false },
      { text: "Jackson", correct: false },
      { text: "William", correct: false },
    ],
  },
  {
    questionText:
      "'Gangnam Style' refers to a lifestyle associated with the Gangnam District of which capital city?",
    answers: [
      { text: "Tokyo, Japan", correct: false },
      { text: "Seoul, South Korea", correct: true },
      { text: "Beijing, China", correct: false },
      { text: "Hanoi, Vietnam", correct: false },
    ],
  },
  {
    questionText: "How is artist Robyn Fenty better known as?",
    answers: [
      { text: "Madonna", correct: false },
      { text: "Robin Thicke", correct: false },
      { text: "Rihanna", correct: true },
      { text: "Adele", correct: false },
    ],
  },
  {
    questionText:
      "Peter Hernandez is professionally known by his stage name...",
    answers: [
      { text: "Bruno Mars", correct: true },
      { text: "Pete Wentz", correct: false },
      { text: "David Hernandez", correct: false },
      { text: "Pete Davidson", correct: false },
    ],
  },
  {
    questionText:
      "In the film Muriel's Wedding, Muriel was obsessed with the music of which pop group?",
    answers: [
      { text: "The Beatles", correct: false },
      { text: "U2", correct: false },
      { text: "ABBA", correct: true },
      { text: "Depeche Mode", correct: false },
    ],
  },
  {
    questionText:
      "The most expensive paparazzi photo ever sold was of which bald pop star?",
    answers: [
      { text: "Britney Spears", correct: true },
      { text: "Phil Collins", correct: false },
      { text: "Sinead O'Connor", correct: false },
      { text: "Billy Joel", correct: false },
    ],
  },
  {
    questionText:
      "Who released the albums 'Around the World in a Day' in 1985 and 'Parade' in 1986?",
    answers: [
      { text: "Michael Jackson", correct: false },
      { text: "Prince", correct: true },
      { text: "Adam Levine", correct: false },
      { text: "Tupac Shakur", correct: false },
    ],
  },
  {
    questionText: "How many members were in the Backstreet Boys?",
    answers: [
      { text: "six", correct: false },
      { text: "three", correct: false },
      { text: "four", correct: false },
      { text: "five", correct: true },
    ],
  },
  {
    questionText:
      "The tile of which song by the pop group Destiny's Child was added to the Oxford English Dictionary in 2004?",
    answers: [
      { text: "Bom Bidi Bom", correct: false },
      { text: "Bootylicious", correct: true },
      { text: "Californication", correct: false },
      { text: "Bartier Cardi", correct: false },
    ],
  },
  {
    questionText:
      "Which band achieved worldwide fame with the release of the single 'Yellow' in 2000?",
    answers: [
      { text: "NSync", correct: false },
      { text: "Green Day", correct: false },
      { text: "Coldplay", correct: true },
      { text: "Blink 182", correct: false },
    ],
  },
];
