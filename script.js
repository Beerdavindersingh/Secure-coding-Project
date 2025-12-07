// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: 1
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "15"],
        correct: 1
    }
];

// Variables
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

// Load question
function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = "";

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

// Check answer
function checkAnswer(selected) {
    const currentQuiz = quizData[currentQuestion];
    if (selected === currentQuiz.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Show score
function showScore() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.textContent = `Your score: ${score}/${quizData.length}`;
}

// Initialize quiz
loadQuestion();
