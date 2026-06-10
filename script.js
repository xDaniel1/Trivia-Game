// Phase 1: Select DOM Elements
const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const questionCard = document.getElementById("question-card")
const answerList = document.getElementById("answer-list")
const nextBtn = document.getElementById("next-btn")
const endScreen = document.getElementById("end-screen")

// Two ways to grab the answer buttons
const answerBtnsCollection = document.getElementsByClassName("answer-btn")
const answerBtnsNodeList = document.querySelectorAll(".answer-btn")

// Log both to compare in DevTools
console.log("HTMLCollection:", answerBtnsCollection)
console.log("NodeList:", answerBtnsNodeList)

// getElementsByClassName returns an HTMLCollection
// querySelectorAll returns a NodeList
// To use .map() on either, convert with Array.from()




// Phase 2: Read and Modify the DOM
gameTitle.textContent = "⚡ Quick Fire Trivia"

console.log("First question:", questionText.textContent)

questionNumber.textContent = questionNumber.textContent.toUpperCase()

const firstBtn = answerBtnsNodeList[0]
const firstLi = firstBtn.parentElement

console.log("The first button:", firstBtn)
console.log("Its parent <li>:", firstLi)
console.log("The <ul> that holds all buttons:", firstLi.parentElement)

questionCard.classList.add("answered")