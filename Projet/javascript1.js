const quizData = [
    {
    question: "Who discovered galaxy rotations?",
    a: "Rosalind Franklin",
    b: "Anna Altkins",
    c: "Annie Jump Cannon",
    d: "Vera Rubin",
    correct: "d",
    },
    {
    question: "Who created the star classification OBAFGKM?",
    a: "Annie Jump Cannon",
    b: "Jane Goodall",
    c: "Grace Hopper",
    d: "Vera Rubin",
    correct: "a",
    },
    {
    question: "Who was the first computer programmer?",
    a: "Annie Jump Cannone",
    b: "Mary Jackson",
    c: "Ada Lovelace",
    d: "Wangari Maathai",
    correct: "c",
    },
    {
    question: "Who was a computer programmer who invented the first compiler related tools that led to COBOL?",
    a: "Ada Lovelace",
    b: "Grace Hopper",
    c: "Clara Barton",
    d: "Rosalind Franklin",
    correct: "b",
    },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button onclick="history.go(0)">Play Again</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });