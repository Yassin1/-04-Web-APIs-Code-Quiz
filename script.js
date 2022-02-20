var startQuiz = document.getElementById("start-quiz");
var starQuizSection = document.getElementById("start-section")
var quizsection = document.getElementById("quiz-section")



startQuiz.addEventListener("click",
    function () {
        starQuizSection.classList.add("hide");

        quizsection.classList.remove("hide")
    }
)

































// var questions = [
//     {
//         title: 'What is your name?',
//         correctAnswer: "sam",
//         answers: [
//             "john",
//             "sam",
//             "peter",
//             "kim"
//         ]
//     },
//     {
//         title: 'What is your age?',
//         correctAnswer: "22",
//         answers: [
//             "11",
//             "30",
//             "25",
//             "22"
//         ]
//     },
//     {
//         title: 'Where are you from?',
//         correctAnswer: "canada",
//         answers: [
//             "newyork",
//             "la",
//             "vegas",
//             "canada"
//         ]

//     },

// ]

















































// console.log("I'm connected");

// var imgTag = document.createElement("img");

// imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
// imgTag.setAttribute("alt", "Start Test");

// imgTag.addEventListener("click", function(){
//     console.log("Maybe this will start");
// });

// document.body.appendChild(imgTag);