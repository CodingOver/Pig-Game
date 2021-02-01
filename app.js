/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer; 
var btnRoll = document.querySelector('.btn-roll');


scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

btnRoll.addEventListener('click', () => {

    // Rabdom Number 
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display The Result
    var diceImg = document.querySelector('.dice');
    diceImg.style.display = 'block';
    diceImg.src = 'dice-' + dice + '.png';

    // Update The Round Score If The Rolled number was a 1 
    if(dice > 1) {
        
    }

});




























// document.querySelector('.dice').style.display = 'none';
// document.getElementById('current-' + activePlayer).textContent = dice;
// var x = document.getElementById('score-' + activePlayer).textContent;