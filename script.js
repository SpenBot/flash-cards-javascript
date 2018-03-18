

//////// DOM ELEMENTS ///////////////////////////////////////
/////////////////////////////////////////////////////////////

const welcomeElmnt = document.getElementById('welcomeDiv')
const playButton = document.getElementById('playButton')

const cardElmnt = document.getElementById('flashCardDiv')
const questionsElmnt = document.getElementById('questionsDiv')



//////// GLOBAL VARIABLES ////////////////////////////////////
/////////////////////////////////////////////////////////////

let cardsArray = []
let ans = null
let cardArray = []

console.log(cardArray)

//////// EVENT LISTENERS ////////////////////////////////////
/////////////////////////////////////////////////////////////

playButton.addEventListener('click', ()=> {
  welcomeElmnt.style.display = 'none'
  displayCard()
})






//////// DISPLAY FLASHCARD FUNCTION /////////////////////////
/////////////////////////////////////////////////////////////

function displayCard () {

    removeCardElmnts()

    let cardFromArray = cardArray[ Math.floor(Math.random() * cardArray.length) ]
    let indexOfCard = cardArray.indexOf(cardFromArray)

    createQuestion(cardFromArray)
    createChoices(cardFromArray)

    cardArray.splice(indexOfCard, 1);

    cardElmnt.style.display = 'block'
}



//////// REMOVE FLASHCARD FUNCTION //////////////////////////
/////////////////////////////////////////////////////////////

function removeCardElmnts () {

  cardElmnt.removeChild(cardElmnt.firstChild)

  while (questionsElmnt.firstChild) {
      questionsElmnt.removeChild(questionsElmnt.firstChild);
  }

}






//////// FLASH CARD CREATION FUNCTIONS //////////////////////
/////////////////////////////////////////////////////////////


//////// CREATE CARD Q ELEMENT /////////
function createQuestion (card) {
  let q = document.createElement("h2")
  q.innerHTML = card.question
  q.setAttribute("id", "questionDiv")
  cardElmnt.prepend(q)
}


//////// CREATE CARDS CHOICES ELEMENTS /////////
function createChoices (card) {

  // C1 //
  let c1 = document.createElement("p")
  c1.innerHTML = card.choice1
  c1.addEventListener('click', function () {
    let userInput = card.choice1
    card.checkAnswer(userInput)
    if (ans == false) {
      this.style.visibility = "hidden"
    }
  })
  c1.setAttribute("class", "choiceDiv")

  // C2 //
  let c2 = document.createElement("p")
  c2.innerHTML = card.choice2
  c2.addEventListener('click', function () {
    let userInput = card.choice2
    card.checkAnswer(userInput)
    if (ans == false) {
      this.style.visibility = "hidden"
    }
  })
  c2.setAttribute("class", "choiceDiv")

  // C3 //
  let c3 = document.createElement("p")
  c3.innerHTML = card.choice3
  c3.addEventListener('click', function () {
    let userInput = card.choice3
    card.checkAnswer(userInput)
    if (ans == false) {
      this.style.visibility = "hidden"
    }
  })
  c3.setAttribute("class", "choiceDiv")

  // C4 //
  let c4 = document.createElement("p")
  c4.innerHTML = card.choice4
  c4.addEventListener('click', function () {
    let userInput = card.choice4
    card.checkAnswer(userInput)
    if (ans == false) {
      this.style.visibility = "hidden"
    }
  })
  c4.setAttribute("class", "choiceDiv")

  // Add to DOM //
  questionsElmnt.appendChild(c1)
  questionsElmnt.appendChild(c2)
  questionsElmnt.appendChild(c3)
  questionsElmnt.appendChild(c4)
}





//////// FLASHCARDS CLASS ///////////////////////////////////
/////////////////////////////////////////////////////////////

class FlashCards {
  constructor (question, answer, choice1, choice2, choice3, choice4) {
    this.question = question
    this.answer = answer
    this.choice1 = choice1
    this.choice2 = choice2
    this.choice3 = choice3
    this.choice4 = choice4
  }

  checkAnswer (input) {
    if (input == this.answer) {
      alert("Correct!")
      displayCard()
    } else {
      ans = false
      alert ("Wrong!")
    }
  }

}


//////// FLASHCARDS OBJECTS /////////////////////////////////
/////////////////////////////////////////////////////////////

let card1 = new FlashCards("Who is the current president?", "Trump", "Obama", "Clinton", "Trump", "Biden")

let card2 = new FlashCards("What is sold at Ikea?", "Furniture", "Groceries", "Furniture", "Clothing", "Monkeys")

let card3 = new FlashCards("Which store sells electronics?", "Best Buy", "Best Buy", "McDonalds", "Five Guys", "Wendy's")

let card4 = new FlashCards("What company sells software?", "Microsoft", "Toyota", "Yamaha", "Sony", "Microsoft")


cardArray.push(card1)
cardArray.push(card2)
cardArray.push(card3)
cardArray.push(card4)




/////////////////////////////////////////////////////////////
