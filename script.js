var timeEl = document.querySelector(".navTimer");
var scoresEl = document.getElementById("displayScores");
var secondsLeft = 60;
var answerHTML = "";
const startBtn = document.getElementById("startBtn");
const questionContainerEl = document.getElementById("questionContainer");
const questionEl = document.getElementById("question");
const answerButtonEl = document.getElementById("answerButtons");

let shuffledQuestions, currentQuestionIndex;

// Time Interval
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // cancel setNextQuestion()
      // sendMessage();
      // showScores();
    }
  }, 1000);
}

// Start button & hide
startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.questionText;
  for (var i = 0; i < question.answers.length; i++) {
    var a = question.answers[i];

    // Dynamically display answer buttons
    answerHTML += '<button class="btn">' + a.text + "</button>";
  }
  answerButtonEl.innerHTML = answerHTML;
}

function selectAnswer() {}

function sendMessage() {
  timeEl.textContent = "Great! You've finished.";
  scoresEl.appendChild();
}

// startGame();

// function endGame() {}

const questions = [
  {
    questionText: "What is the 1st question?",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
  },
  {
    questionText: "What is the 2nd question?",
    answers: [
      { text: "correct answer", correct: true },
      { text: "incorrect answer", correct: false },
      { text: "incorrect answer", correct: false },
      { text: "incorrect answer", correct: false },
    ],
  },
  {
    questionText: "What is the 3rd question?",
    answers: [
      { text: "correct answer", correct: true },
      { text: "incorrect answer", correct: false },
      { text: "incorrect answer", correct: false },
      { text: "incorrect answer", correct: false },
    ],
  },
];
