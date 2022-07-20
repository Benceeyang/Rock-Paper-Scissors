const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')

const gameGrid = document.getElementById('game') //grabs the game id from rock html
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'My Choice: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Your Opponent Chooses: ' + randomChoice
}

for (let i = 0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i] //you can delete this if you want to use e.target.HTML in the handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch(userChoice + computerChoice){
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
            resultDisplay.innerHTML = "YOU WIN!!!"
        break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
            resultDisplay.innerHTML = "YOU LOSE.."
        break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
            resultDisplay.innerHTML = "GO AGAIN.. Double or Nothing!"
        break
    }
}