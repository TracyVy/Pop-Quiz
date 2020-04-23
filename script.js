var timeEl = document.querySelector(".navTimer");
var scoresEl = document.getElementById("displayScores");
var secondsLeft = 90;

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
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
}

function selectAnswer() {}

function sendMessage() {
  timeEl.textContent = "Great! You've finished.";
  scoresEl.appendChild();
}

// startGame();

const questions = [
  {
    question: "What is the 1st questions?",
    answers: [
      { text: "correct answer", correct: true },
      { text: "incorrect answer", correct: false },
    ],
  },
];
