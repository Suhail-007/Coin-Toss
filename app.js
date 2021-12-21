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

animate(randomNumber, userSelection, computerSelection);
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
 let heads = document.querySelector('.heads'); 
	if (randomNum === 1) {
			tails.textContent = 'Heads';
			heads.textContent = 'Tails';
			heads.style.color = 'black';
			tails.style.color = 'red';
		} else if (randomNum === 0) {
				tails.textContent = 'Tails';
				tails.style.color = ''
				heads.style.color = '';
				heads.textContent = 'Heads';
		}	
};

function animate(r, u, c) {
		let tails = document.querySelector('.tails');
		let heads = document.querySelector('.heads');
		
//tails.style.animation = 'upAndRotate 500ms alternate';
//heads.style.animation = 'upAndRotate 500ms alternate';

tails.classList.add('active');
heads.classList.add('active');

		tails.addEventListener('animationend', () => {
		tails.classList.remove('active');
		heads.classList.remove('active');
		addScore(r, u, c)
		}, {once: true})		
};

function isWinner() {
 		let message = document.getElementById('message');
		if (userScore === 5) {		
				message.textContent = 'You Win!!';
		} else if (computerScore === 5) {
				message.textContent = 'Computer Win!!'
		};
};
