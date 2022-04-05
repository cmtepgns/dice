/* Player 1 */

// Random value 
let dice1 = Math.floor(Math.random() * 6) + 1 

// Random image
let randomDiceImage = 'img/dado' + dice1 + '.png' 

// 1st dice 
let img1 = document.querySelectorAll('img')[0]

// Generate new source of image
img1.setAttribute('src', randomDiceImage)



/* Player 2 */
let dice2 = Math.floor(Math.random() * 6) + 1 

let randomDiceImage2 = 'img/dado' + dice2 + '.png'

let img2 = document.querySelectorAll('img')[1]

img2.setAttribute('src', randomDiceImage2)


// Condition 
if (randomDiceImage > randomDiceImage2) {
    document.querySelector('h1').innerHTML = 'O jogador 1 venceu 🏆'
} else if (randomDiceImage < randomDiceImage2) {
    document.querySelector('h1').innerHTML = 'O jogador 2 venceu 🏆'
} else { document.querySelector('h1').innerHTML = 'Empate' }

