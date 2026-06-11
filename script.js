// ===============================
// Nsikak Quiz App Logic
// ===============================

// Quiz data (questions, options, answers)
const quizData = [
    {
        question: "What is JavaScript used for?",
        options: ["Styling pages", "Making pages interactive", "Database", "Server only"],
        answer: "Making pages interactive"
    },
    {
        question: "Which is an ES6 array method?",
        options: [".push()", ".map()", ".style()", ".html()"],
        answer: ".map()"
    },
    {
        question: "What is recursion?",
        options: ["Loop inside CSS", "Function calling itself", "Database type", "HTML tag"],
        answer: "Function calling itself"
    },
    {
        question: "Which keyword declares a variable?",
        options: ["var/let/const", "print", "echo", "define"],
        answer: "var/let/const"
    },
    {
        question: "Which library is used in this project?",
        options: ["React", "SweetAlert2", "Django", "Laravel"],
        answer: "SweetAlert2"
    }
];

// ===============================
// VARIABLES
// ===============================
let currentIndex = 0;
let score = 0;

// ===============================
// DISPLAY QUESTION (DOM OUTPUT)
// ===============================
function showQuestion() {

    let q = quizData[currentIndex];

    document.getElementById("question").innerText = q.question;

    // ES6 MAP METHOD (REQUIRED)
    let optionsHTML = q.options.map(option => {
        return `<div class="option" onclick="checkAnswer('${option}')">${option}</div>`;
    }).join("");

    document.getElementById("options").innerHTML = optionsHTML;
}

// ===============================
// CHECK ANSWER FUNCTION
// ===============================
function checkAnswer(selected) {

    let correct = quizData[currentIndex].answer;

    if (selected === correct) {
        score++;

        // External library (SweetAlert2)
        Swal.fire("Correct!", "Good job Nsikak 👍", "success");
    } else {
        Swal.fire("Wrong!", "Try again next time", "error");
    }

    document.getElementById("score").innerText = "Score: " + score;
}

// ===============================
// RECURSION FUNCTION (REQUIRED)
// ===============================
function loadQuestion(index) {

    if (index >= quizData.length) {
        return showResult();
    }

    currentIndex = index;
    showQuestion();
}

// NEXT BUTTON TRIGGER
function nextQuestion() {
    loadQuestion(currentIndex + 1);
}

// ===============================
// SHOW FINAL RESULT (REDUCE USED)
// ===============================
function showResult() {

    // ES6 REDUCE METHOD (REQUIRED)
    let total = quizData.reduce((sum, item) => sum + 1, 0);

    document.getElementById("quiz").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${total}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// ===============================
// RESTART QUIZ (RECURSION LOGIC)
// ===============================
function restartQuiz() {
    score = 0;
    currentIndex = 0;
    showQuestion();
}

// START QUIZ
showQuestion();