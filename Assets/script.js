var time = 30
var timer = document.getElementById("time")
var timerId
var startbtn = document.querySelector(".start-button")
var wrongChoice = document.querySelector(".wrong")
startbtn.onclick = start
var correct = document.getElementById("correct")
var correctTwo = document.getElementById("correct2")
var correctThree = document.getElementById("correct3")
var correctFour = document.getElementById("correct4")

function start() {
    var startQuiz = document.getElementById("intro")
    startQuiz.setAttribute("id", "hide") //"class" of "hide" didnt work so i had to change to id???

    timerId = setInterval(counter, 1000)
    timer.textContent = time

    nextQuestion()
}

function counter() {
    time--
    timer.textContent = time

    if (time <= 0) {
        time = 1 // 0 wouldnt work here???? showed -1 so i had to do +1 to fix
    }
}

function wrong() {
        time -= 5
        timer.textContent = time
}

wrongChoice.addEventListener("click", wrong)

function nextQuestion() {
    var questions = document.querySelector(".questions") //why cant i do quertSelectorAll?
    questions.setAttribute("id", "show")
 }
 
 function next() {
    var q2 = document.getElementById("q2")
    q2.setAttribute("id", "show")
    var questions = document.querySelector(".questions")
    questions.setAttribute("id", "hide")
 }

 correct.addEventListener("click", next)

 function nextTwo() {
    var q3 = document.getElementById("q3")
    q3.setAttribute("id", "show")
    var questions = document.querySelector(".questions2")
    questions.setAttribute("id", "hide")
 }

 correctTwo.addEventListener("click", nextTwo)

 function nextThree() {
    var q4 = document.getElementById("q4")
    q4.setAttribute("id", "show")
    var questions = document.querySelector(".questions3")
    questions.setAttribute("id", "hide")
 }

 correctThree.addEventListener("click", nextThree)

 function end() {
    var ending = document.getElementById("end")
    ending.setAttribute("id", "show")
    var questions = document.querySelector(".questions4")
    questions.setAttribute("id", "hide")
 }

 correctFour.addEventListener("click", end)





