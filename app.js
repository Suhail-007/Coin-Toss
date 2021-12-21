let buttonsDiv = document.querySelector('[data-btns-div]');
let userScore = 0;
let computerScore = 0;
let heads = 1;
let tails = 0;

buttonsDiv.addEventListener('click', (event) => {
	let userSelection;
	let computerSelection;
//this will generate a random number everytime	
	let randomNumber = Math.round(Math.random());
	
		if (event.target.dataset.head) {
				userSelection = heads;
				computerSelection = tails;
		} else if (event.target.dataset.tail) {
				userSelection = tails;
				computerSelection = heads;
		}
		
setTimeout(() => {
addScore(randomNumber, userSelection, computerSelection)}, 500);

animate();
});

function addScore(randomNum, userPick, comPick) {
isHeadTail(randomNum)
	let playerOutput = document.querySelector('#player');
	let compOutput = document.querySelector('#comp');
	//randomNum which will be either 0 or 1
		if (userPick === randomNum) {
				userScore++
				playerOutput.textContent = `Player: ${userScore}`;
				playerOutput.style.fontWeight = 'bold';
				playerOutput.style.color = 'green';
				compOutput.style.fontWeight = '';
			 compOutput.style.color = 'red';
		} else 	if (comPick === randomNum) {
				computerScore++
		  	compOutput.textContent = `Computer: ${computerScore}`;
				compOutput.style.fontWeight = 'bold';
			 compOutput.style.color = 'green';
			 playerOutput.style.color = 'red';
				playerOutput.style.fontWeight = '';			 
		}
		isWinner()
};

function isHeadTail(randomNum) {
 let tails = document.querySelector('.tails');
		if (randomNum === 1) {
				tails.textContent = 'Heads';
				tails.style.color = 'red';
		} else {
				tails.textContent = 'Tails';
				tails.style.color = '';
		}		
};

function animate() {
		let tails = document.querySelector('.tails');
		let heads = document.querySelector('.heads');
		
		tails.style.animation = 'upAndRotate 500ms alternate';
		heads.style.animation = 'upAndRotate 500ms alternate';
		
		tails.addEventListener('animationend', () => {
		tails.style.animation = '';
		heads.style.animation = '';
		})
};

function isWinner() {
 		let message = document.getElementById('message');
		if (userScore === 5) {		
				message.textContent = 'You Win!!';
		} else if (computerScore === 5) {
				message.textContent = 'Computer Win!!'
		};
};