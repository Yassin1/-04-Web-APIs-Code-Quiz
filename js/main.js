var startQuizBtn = document.getElementById("start-quiz");
var starQuizSection = document.getElementById("start-section");
var scoreSection = document.getElementById('score-card');

var quizsection = document.getElementById("quiz-section");
var questionPlaceHolder = document.getElementById('question');
var answersPlaceHolder = document.getElementById('answer');
let currentQuestion = 0;
let points = 0;
let timerInterval = null;

var questions = [

    {
        question: 'What is HTML?',
        answer1: "Hyper Text Markup Language",
        answer2: "High Text Markup Language",
        answer3: "Hyper Interpreted Language",
        answer4: "Javascript",
        correctAnswer: "answer1"
    },
    {
        question: 'JavaScript is a client side langauge ?',
        answer1: "False",
        answer2: "True",
        answer3: "None",
        answer4: "I dont know",
        correctAnswer: "answer2"
    },
    {
        question: 'What is API ?',
        answer1: "Appilication Interpreted Language",
        answer2: "Application Styling Language",
        answer3: "Application Programming Interface",
        answer4: "None of above",
        correctAnswer: "answer3"
    }

];

startQuizBtn.addEventListener("click", function () {
    startQuiz();
});

function startQuiz() {

    starQuizSection.classList.add("hide");
    quizsection.classList.remove("hide")

    let question = questions[currentQuestion];

    questionPlaceHolder.textContent = question.question;
    answersPlaceHolder.innerHTML = `
        <li onClick="submitAnswer(${currentQuestion},'answer1')">${question.answer1}</li>
        <li onClick="submitAnswer(${currentQuestion},'answer2')">${question.answer2}</li>
        <li onClick="submitAnswer(${currentQuestion},'answer3')">${question.answer3}</li>
        <li onClick="submitAnswer(${currentQuestion},'answer4')">${question.answer4}</li>
    `;

    startTimer();
}

function submitAnswer(questionIndex, answer) {

    let correctAnswer = questions[questionIndex].correctAnswer;


    if (answer == correctAnswer) {
        points++;
    }

    moveToNextQuestion();

}

function moveToNextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showScoreCard();
    }
    else {
        let question = questions[currentQuestion];

        questionPlaceHolder.textContent = question.question;
        answersPlaceHolder.innerHTML = `
            <li onClick="submitAnswer(${currentQuestion},'answer1')">${question.answer1}</li>
            <li onClick="submitAnswer(${currentQuestion},'answer2')">${question.answer2}</li>
            <li onClick="submitAnswer(${currentQuestion},'answer3')">${question.answer3}</li>
            <li onClick="submitAnswer(${currentQuestion},'answer4')">${question.answer4}</li>
        `;
    }

}

function showScoreCard() {
    starQuizSection.classList.add("hide");
    quizsection.classList.add("hide");
    scoreSection.classList.remove('hide');

    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('correct-answers').textContent = points;
    document.getElementById('wrong-answers').textContent = questions.length - points;
    document.getElementById('total-points').textContent = points;



}

function playAgain() {

    points = 0;
    currentQuestion = 0;

    starQuizSection.classList.add("hide");
    quizsection.classList.remove("hide");
    scoreSection.classList.add('hide');
    document.getElementById('name').value = '';

    startQuiz();
}

function startTimer() {

    clearInterval(timerInterval);
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (1 * 60 * 1000));
    var countDownDate = new Date(currentDate).getTime();


    timerInterval = setInterval(function () {


        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Time Over";
            showScoreCard();
        }
    }, 1000);

}

function saveIntitals() {
    let name = document.getElementById('name').value;

    let scoreCard = {
        name: name,
        totalQuestions: questions.length,
        correctAnswers: points,
        wrongAnswers: questions.length - points,
        points: points
    };

    let oldScoreCard = localStorage.getItem("quiz-score-card");

    if (oldScoreCard != null && oldScoreCard != undefined && oldScoreCard != '') {
        oldScoreCard = JSON.parse(oldScoreCard);

        oldScoreCard.push(scoreCard);
    }
    else {

        oldScoreCard = [];
        oldScoreCard.push(scoreCard);
    }



    let scoreCardString = JSON.stringify(oldScoreCard);

    localStorage.setItem('quiz-score-card', scoreCardString);

}



