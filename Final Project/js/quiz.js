const questions = [
    {
        question: "What genre is Valorant?",
        image: "images/valorant.jpg",
        answers: [
            { text: "FPS", correct: true },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is Dota 2?",
        image: "images/dota2.jpg",
        answers: [
            { text: "FPS", correct: false },
            { text: "MOBA", correct: true },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is Fortnite?",
        image: "images/fortnite.jpg",
        answers: [
            { text: "FPS", correct: false },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: true }
        ]
    },
    {
        question: "What genre is CS2?",
        image: "images/cs2.jpg",
        answers: [
            { text: "FPS", correct: true },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is Warzone?",
        image: "images/warzone.jpg",
        answers: [
            { text: "FPS", correct: true },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: true }
        ]
    },
    {
        question: "What genre is League of Legends?",
        image: "images/leagueoflegends.jpg",
        answers: [
            { text: "FPS", correct: false },
            { text: "MOBA", correct: true },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is Mobile Legends?",
        image: "images/mobilelegends.jpg",
        answers: [
            { text: "FPS", correct: false },
            { text: "MOBA", correct: true },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is Rainbow Six Siege?",
        image: "images/rainbowsixsiege.jpg",
        answers: [
            { text: "FPS", correct: true },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: false }
        ]
    },
    {
        question: "What genre is PUBG?",
        image: "images/pubg.jpg",
        answers: [
            { text: "FPS", correct: false },
            { text: "MOBA", correct: false },
            { text: "Battle Royale", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const imageElement = document.getElementById('game-image');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

function startQuiz() {
    currentQuestionIndex = 0;
    resultContainer.innerHTML = '';
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    imageElement.src = question.image;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (correct) {
        resultContainer.innerHTML = 'Correct!';
    } else {
        resultContainer.innerHTML = 'Wrong!';
    }
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startQuiz();
    }
});

startQuiz();


