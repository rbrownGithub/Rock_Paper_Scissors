// Define the hands array
const hands = ['rock', 'paper', 'scissors'];

// Define a function to get a random hand from the hands array
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define Player objects
const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

// Define function to play a round
function playRound(player1, player2) {
    // Get hands from each player
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Determine the winner
    let winner = null;
    if (hand1 === hand2) {
        console.log(`Both players chose ${hand1}. It's a tie!`);
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        winner = player1;
        console.log(`${player1.name} wins with ${hand1} against ${hand2}`);
    } else {
        winner = player2;
        console.log(`${player2.name} wins with ${hand2} against ${hand1}`);
    }

    return winner;
}