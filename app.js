let buttons = document.querySelector('[data-btns-div]');

let playerOutput = document.getElementById('player');
let compOutput = document.querySelector('#comp');

let userScore = 0;
let computerScore = 0;
let heads = 1;
let tails = 0;

//this will change according to the random number
function headsAndTails(random) {
		if (random === 1) {
				let showTails = document.querySelector('.tails');
				showTails.textContent = 'Heads';
				showTails.style.color = 'red';
		}
		
		if (random === 0) {
				let showTails = document.querySelector('.tails');
				showTails.textContent = 'Tails';
				showTails.style.color = '';
		}
}

//random number either be 1 or 0
function score(random, userChoose, computerChoose) {
		if (random === userChoose) {
				playerOutput.style.color = 'green';
				playerOutput.style.fontWeight = 'bold';
			 userScore++;
				playerOutput.textContent = `Player: ${userScore}`;
				compOutput.style.color = 'red';
		} else if (random === computerChoose) {
				compOutput.style.color = 'green';
				compOutput.style.fontWeight = 'bold';
				playerOutput.style.color = 'red';
				computerScore++;
				compOutput.textContent = `Computer: ${computerScore}`;
		}
		//calling this function here so it won't get delay showing the heads and tails
		headsAndTails(random)
}

function winner() {
}

function animate(random, userChoose, computerChoose) {
	let tails = document.querySelector('.tails');
//		let heads = document.querySelector('.heads');
	//	tails.classList.add('active');
//		heads.classList.add('active');
tails.classList.add('active')

tails.addEventListener('animationend', () => {
		userChoose = heads;
		computerChoose = tails;
		score(randomn, userChoosep, computerChoosep);
})
}

buttons.addEventListener('click', (e) => {
		let userSelection;
		let computerSelection;
		
	//this will generate a new number everytime we call on click function, math.round will round the number to nearest integer
	let randomNumber = Math.round(Math.random()); //0 or 1
		console.log(randomNumber);
		
			if (e.target.dataset.head) {
					animate(randomNumber, userSelection, computerSelection);
					
					//1 is heads and 0 is tails line 8 and 9
			} else if (e.target.dataset.tail) {
				userSelection = tails;
				computerSelection = heads;
			}
			
	//call the score function here and add the userSelection and computerSelection as parameter	
		})

