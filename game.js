const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Test question 1',
        choice1: 'testanswer1',
        choice2: 'testanswer2',
        choice3: 'testanswer3',
        choice4: 'testanswer4',
        answer: 1,
    },
    {
        question: 'Test question 1',
        choice1: 'testanswer1',
        choice2: 'testanswer2',
        choice3: 'testanswer3',
        choice4: 'testanswer4',
        answer: 1,
    },
    {
        question: 'Test question 1',
        choice1: 'testanswer1',
        choice2: 'testanswer2',
        choice3: 'testanswer3',
        choice4: 'testanswer4',
        answer: 1,
    },
    {
        question: 'Test question 1',
        choice1: 'testanswer1',
        choice2: 'testanswer2',
        choice3: 'testanswer3',
        choice4: 'testanswer4',
        answer: 1,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS ) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choicedataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
    }

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
            'incorrect'

            if(classToApply == 'correct') {
                incrementScore(SCORE_POINTS)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)
        })
    })
