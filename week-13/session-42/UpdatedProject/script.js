let questions = [
    {
        question: "Which method adds item to array?",
        options: ["push()", "pop()", "shift()"],
        answer: "push()"
    },
    {
        question: "Which keyword declares block-scoped variable?",
        options: ["var", "let", "define"],
        answer: "let"
    },
    {
        question: "Which object stores data in browser?",
        options: ["storage()", "localStorage", "browserDB"],
        answer: "localStorage"
    }
];

// 🔀 Shuffle questions
questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function loadQuestion() {
    let quizDiv = document.getElementById("quiz");
    let q = questions[currentQuestion];

    quizDiv.innerHTML = `
        <div class="question-box">
            <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
            <p>${q.question}</p>
            ${q.options.map(option =>
                `<label>
                    <input type="radio" name="option" value="${option}">
                    ${option}
                </label><br>`
            ).join("")}
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);

    score = 0;

    questions.forEach((q, index) => {
        let selected = document.querySelectorAll("input[name='option']");
        selected.forEach(input => {
            if (input.checked && input.value === q.answer) {
                score++;
            }
        });
    });

    let percentage = (score / questions.length) * 100;

    document.getElementById("result").innerHTML =
        `Your Score: ${score}/${questions.length} (${percentage}%)`;

    saveBestScore(score);

    document.getElementById("submitBtn").disabled = true;
}

function saveBestScore(score) {
    let best = localStorage.getItem("bestScore");

    if (!best || score > best) {
        localStorage.setItem("bestScore", score);
        best = score;
    }

    document.getElementById("bestScore").textContent =
        "Best Score: " + best;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    document.getElementById("submitBtn").disabled = false;
    startTimer();
    loadQuestion();
    document.getElementById("result").textContent = "";
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

loadQuestion();
startTimer();
saveBestScore(0);