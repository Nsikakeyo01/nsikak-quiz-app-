// ===============================
// Nsikak Quiz App (FINAL VERSION)
// ===============================

// Quiz data (questions, options, answers)
const quizData = [
    {
        question: "What is JavaScript mainly used for?",
        options: ["Styling pages", "Making pages interactive", "Database design", "Operating system"],
        answer: "Making pages interactive"
    },
    {
        question: "Which of these is an ES6 array method?",
        options: [".push()", ".map()", ".print()", ".style()"],
        answer: ".map()"
    },
    {
        question: "What best describes recursion?",
        options: [
            "A loop inside HTML",
            "Function calling itself",
            "A CSS property",
            "A database system"
        ],
        answer: "Function calling itself"
    },
    {
        question: "Which library is used in this project?",
        options: ["React", "SweetAlert2", "Laravel", "Vue"],
        answer: "SweetAlert2"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        answer: "const"
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

    let currentQuestion = quizData[currentIndex];

    document.getElementById("question").innerText =
        currentQuestion.question;

    // ES6 MAP METHOD (REQUIRED)
    let optionsHTML = currentQuestion.options.map(option => {
        return `
            <div class="option" onclick="checkAnswer('${option}')">
                ${option}
            </div>
        `;
    }).join("");

    document.getElementById("options").innerHTML = optionsHTML;
}

// ===============================
// CHECK ANSWER (WITH EXCEPTION HANDLING FIX)
// ===============================
function checkAnswer(selected) {

    try {
        let correctAnswer = quizData[currentIndex].answer;

        // THROW ERROR IF INVALID INPUT
        if (!selected) {
            throw new Error("No answer selected");
        }

        if (selected === correctAnswer) {
            score++;

            // External library (SweetAlert2)
            Swal.fire({
                title: "Correct!",
                text: "Well done Nsikak 👍",
                icon: "success"
            });

        } else {
            Swal.fire({
                title: "Wrong!",
                text: "Correct answer: " + correctAnswer,
                icon: "error"
            });
        }

        document.getElementById("score").innerText =
            "Score: " + score;

    } catch (error) {
        console.log("Error caught:", error.message);

        Swal.fire({
            title: "Error",
            text: "Something went wrong. Please try again.",
            icon: "warning"
        });
    }
}

// ===============================
// RECURSION FUNCTION (REQUIRED)
// ===============================
function loadQuestion(index) {

    // Base condition (ends quiz)
    if (index >= quizData.length) {
        return showResult();
    }

    currentIndex = index;
    showQuestion();
}

// NEXT QUESTION BUTTON
function nextQuestion() {
    loadQuestion(currentIndex + 1);
}

// ===============================
// SHOW FINAL RESULT (ES6 REDUCE USED)
// ===============================
function showResult() {

    // ES6 REDUCE METHOD (REQUIRED)
    let totalQuestions = quizData.reduce((accumulator) => {
        return accumulator + 1;
    }, 0);

    document.getElementById("quiz").innerHTML = `
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: ${score} / ${totalQuestions}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// ===============================
// RESTART QUIZ (RECURSION RESET LOGIC)
// ===============================
function restartQuiz() {
    score = 0;
    currentIndex = 0;
    showQuestion();
}

// ===============================
// START QUIZ
// ===============================
showQuestion();