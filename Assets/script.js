var time = 30
var timer = document.getElementById("time")
var timerid
var startbtn = document.querySelector(".start-button")
var wrongChoice = document.querySelector(".wrong")
startbtn.onclick = start

function start() {
    var startQuiz = document.getElementById("intro")
    startQuiz.setAttribute("id", "hide") //"class" of "hide" didnt work so i had to change to id???

    timerid = setInterval(counter, 1000)
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


