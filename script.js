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

// localStorage, initials and score (sort descending)
// var textbox = document.getElementById("textbox")
// var button = document.getElementById("btn")
// button.addEventListener("click", function (){
//  localStorage.name = textbox.value
// });
// document.write(localStorage.name);
