let buttons = document.querySelector('[data-btns-div]');

let playerOutput = document.getElementById('player');
let compOutput = document.querySelector('#comp');

let userScore = 0;
let computerScore = 0;
let heads = 1;
let tails = 0;

let p = document.createElement('p');
 
 
//this will change according to the random number
function headsAndTails(random) {
let showHeads = document.querySelector('.heads');

		if (random === 1) {
				showHeads.textContent = 'Heads';
				showHeads.style.color = 'red';
		}
		
		if (random === 0) {
				showHeads.textContent = 'Tails';
				showHeads.style.color = '';
		}
}

//random number either be 1 or 0
function score(random, userChoose, computerChoose) {
		//calling this function here so it won't get delay showing the heads and tails
		headsAndTails(random);
		if (random === userChoose) {
				playerOutput.style.color = 'green';
				playerOutput.style.fontWeight = 'bold';
				compOutput.style.fontWeight = '';
			 userScore++;
				playerOutput.textContent = `Player: ${userScore}`;
				compOutput.style.color = 'red';
		} else if (random === computerChoose) {
				compOutput.style.color = 'green';
				compOutput.style.fontWeight = 'bold';
				playerOutput.style.fontWeight = '';
				playerOutput.style.color = 'red';
				computerScore++;
				compOutput.textContent = `Computer: ${computerScore}`;
		}
}

function winner() {
		if (userScore === 3) {		
				p.innerHTML		= `You Won!!!`
		} else if (computerScore === 3) {
				p.innerText = 'Computer won!'
		}
		document.querySelector('.container').append(p);
}


buttons.addEventListener('click', (e) => {
		let userSelection;
		let computerSelection;
					
		//this will generate a new number everytime we call on click function, math.round will round the number to nearest integer
	let randomNumber = Math.round(Math.random()); //0 or 1
		console.log(randomNumber)	
			
			if (e.target.dataset.head)	{
					userSelection = heads;
					computerSelection = tails;	
			//1 is heads and 0 is tails line 8 and 9
			} else if (e.target.dataset.tail) {
				userSelection = tails;
				computSelection = heads;			
			}      

 	let coin = document.querySelector('.coin');
	coin.classList.add('active');
	
   setTimeout(() => {
   		score(randomNumber, userSelection, computerSelection);
   		}, 1000);
              
 setTimeout(() => {
   coin.classList.toggle('active');
            }, 2000); 
winner();   			
		});
