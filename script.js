const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let Getresult

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
resultDisplay()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1
if (randomNumber === 1)
{
    computerChoice = 'Tas'
}
if (randomNumber === 2)
{
    computerChoice = 'Kagit'
}
if (randomNumber === 3)
{
    computerChoice = 'Makas'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function resultDisplay() {
    if (userChoice === computerChoice) {
        result.innerHTML =  'Berabere!'
    }
    if (userChoice === 'Tas' && computerChoice === 'Kagit') {
        result.innerHTML ='Bilgisayar Kazandı'
    }
    
    if (userChoice === 'Tas' && computerChoice === 'Makas') {
        result.innerHTML ='Sen kazandın'
    }
    if (userChoice === 'Makas' && computerChoice === 'Tas') {
        result.innerHTML ='Bilgisayar Kazandı'
    }
    if (userChoice === 'Makas' && computerChoice === 'Kagit') {
        result.innerHTML ='Sen kazandın'
    }
    if (userChoice === 'Kagit' && computerChoice === 'Tas') {
        result.innerHTML ='Sen kazandın'
    }
    if (userChoice === 'Kagit' && computerChoice === 'Makas') {
        result.innerHTML ='Bilgisayar Kazandı'
    }
    
}
