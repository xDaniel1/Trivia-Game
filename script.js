// Phase 3: Question Data
const questions = [
  {
    text: "Who invented the World Wide Web?",
    answers: ["Tim Berners-Lee", "Bill Gates", "Linus Torvalds", "Ada Lovelace"],
    correct: 0
  },
  {
    text: "What does CPU stand for?",
    answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
    correct: 0
  },
  {
    text: "Which language runs in a web browser?",
    answers: ["Java", "C++", "JavaScript", "Python"],
    correct: 2
  },
  {
    text: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Home Tool Markup Language"],
    correct: 0
  },
  {
    text: "Which company created the JavaScript language?",
    answers: ["Microsoft", "Google", "Netscape", "Apple"],
    correct: 2
  }
]

let currentIndex = 0
let score = 0

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

function loadQuestion(index) {
    const current = questions[index]

    questionNumber.textContent = current.text

    Array.from(answerBtnsNodeList).forEach((btn, i) => {
        btn.textContent = current.answers[i]
        btn.className = "answer-btn"
    })

    nextBtn.classList.add("hidden")
    questionCard.classList.remove("answered")
}

loadQuestion(0)