const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let questions = [
    {
        question: 'What is 9 + 10?',
        choice1: '2',
        choice2: '19',
        choice3: '21',
        choice4: '21 for the meme, but the actual answer is 19',
        answer: 4,
    },
    {
        question:
            "Do you recognize the bodies in the water?",
        choice1: "'No'",
        choice2: "I DO NOT RECOGNIZE THE BODIES IN THE WATER",
        choice3: "'Yeah, I think so.'",
        choice4: "'Maybe'",
        answer: 2,
    },
    {
        question: "How much power did Frieza use to block Goku's Kaioken x20 Kamehameha?",
        choice1: "20%",
        choice2: "50%",
        choice3: "77%",
        choice4: "48%",
        answer: 2,
    },
    {
        question: "Is this a quiz",
        choice1: "no",
        choice2: "NO",
        choice3: "nah",
        choice4: "yea",
        answer: 4,
    },
    {
        question: "what's up",
        choice1: "the sky",
        choice2: "good",
        choice3: "im fine",
        choice4: "dog",
        answer: 4
    },
    {
        question: "is pineapple pizza good",
        choice1: "no",
        choice2: "ofc it tastes delicious",
        choice3: "nah",
        choice4: "ew",
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + seconds;

        if (--timer < 0) {
            timer = 0;
            return window.location.assign('end.html');
        }
    }, 1000);
}

window.onload = function () {
    var time = 45, // your time in seconds here
        display = document.querySelector('#timer_secs');
    startTimer(time, display);
};


startGame()