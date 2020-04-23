const startBtn = document.getElementById("startBtn");
const questionContainerEl = document.getElementById("questionContainer");
const questionEl = document.getElementById("question");
const answerButtonEl = document.getElementById("answerButtons");

let shuffledQuestions, currentQuestionIndex;

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

const questions = [
  {
    question: "What is the 1st questions?",
    answers: [
      { text: "correct answer", correct: true },
      { text: "incorrect answer", correct: false },
    ],
  },
];
