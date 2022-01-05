var time = 30
var timer = document.getElementById("time")
var timerId
var startbtn = document.querySelector(".start-button")
var submitbtn = document.getElementById("submit")
var wc1 = document.querySelector(".wrong")
var wc2 = document.querySelector(".wrong1")
var wc3 = document.querySelector(".wrong2")
var wc4 = document.querySelector(".wrong3")
var wc5 = document.querySelector(".wrong4")
var wc6 = document.querySelector(".wrong5")
var wc7 = document.querySelector(".wrong6")
var wc8 = document.querySelector(".wrong7")
var wc9 = document.querySelector(".wrong8")
var wc10 = document.querySelector(".wrong9")
var wc11 = document.querySelector(".wrong10")
var wc12 = document.querySelector(".wrong11")
startbtn.onclick = start
var correct = document.getElementById("correct")
var correctTwo = document.getElementById("correct2")
var correctThree = document.getElementById("correct3")
var correctFour = document.getElementById("correct4")
var score = document.getElementById("score")
var initalsEl = document.getElementById("initials")
var nextquest = document.querySelectorAll("choice")
// var scoreList = document.querySelector(".score-list")

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
        var questions = document.querySelector(".questions")
        questions.setAttribute("id", "hide")
        var questions = document.querySelector(".questions2")
        questions.setAttribute("id", "hide")
        var questions = document.querySelector(".questions3")
        questions.setAttribute("id", "hide")
        var questions = document.querySelector(".questions4")
        questions.setAttribute("id", "hide")
        var ending = document.getElementById("end")
        ending.setAttribute("id", "show")
    }
}

function wrong() {
        time -= 5
        timer.textContent = time
}

wc1.addEventListener("click", wrong)
wc2.addEventListener("click", wrong)
wc3.addEventListener("click", wrong)
wc4.addEventListener("click", wrong)
wc5.addEventListener("click", wrong)
wc6.addEventListener("click", wrong)
wc7.addEventListener("click", wrong)
wc8.addEventListener("click", wrong)
wc9.addEventListener("click", wrong)
wc10.addEventListener("click", wrong)
wc11.addEventListener("click", wrong)
wc12.addEventListener("click", wrong)

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
 wc1.addEventListener("click", next)
 wc2.addEventListener("click", next)
 wc3.addEventListener("click", next)
 wc4.addEventListener("click", nextTwo)
 wc5.addEventListener("click", nextTwo)
 wc6.addEventListener("click", nextTwo)
 wc7.addEventListener("click", nextThree)
 wc8.addEventListener("click", nextThree)
 wc9.addEventListener("click", nextThree)
 wc10.addEventListener("click", end)
 wc11.addEventListener("click", end)
 wc12.addEventListener("click", end)



 


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
    clearInterval(timerId)
    score.textContent = time
    submitbtn.addEventListener("click", function(e) {
       e.preventDefault()
       var getLocalStrigified = localStorage.getItem("highscoreArr") || '[]'
       var highScoreArr = JSON.parse(getLocalStrigified)
       var hiscore = time
       var userInitials = initalsEl.value
       var hiScoreObj = {
          initials: userInitials,
          score: hiscore
       }
       highScoreArr.push(hiScoreObj)
       var stringifiedArr = JSON.stringify(highScoreArr)
       localStorage.setItem("highscoreArr", stringifiedArr)
       clearForm()
   })
 }

 function clearForm() {
    document.getElementById("initials").value= ""
 }

 correctFour.addEventListener("click", end)
 
//  function scorer() {
//    var scoreList = document.querySelector(".score-list")
//    scoreList.setAttribute("id", "show1")
//    var questions = document.querySelector(".questions4")
//    questions.setAttribute("id", "hide")
//    var ending = document.querySelector(".ender")
//    ending.setAttribute("id", "hide")
//    var questions = document.querySelector(".questions3")
//    questions.setAttribute("id", "hide")
//    var questions = document.querySelector(".questions2")
//    questions.setAttribute("id", "hide")
//    var questions = document.querySelector(".questions")
//    questions.setAttribute("id", "hide")
//    var showIntro = document.getElementById("intro")
//    showIntro.setAttribute("id", "hide")
//  }

//  scoreList.addEventListener("click", scorer)

