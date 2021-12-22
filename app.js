// Some of these could be const because it will never change.
/*
	Even if the element value changes, the variable still
	targeting the same element so const can be used on elements.
*/
const buttonsDiv = document.querySelector('[data-btns-div]');
let userScore = 0;
let computerScore = 0;
const heads = 1;
const tails = 0;
//Moving declaration here since you are using it in multiple place.
//Also variable naming should be descriptive.
const tailEle = document.querySelector('.tails');
const headEle = document.querySelector('.heads');

buttonsDiv.addEventListener('click', async (event) => {
	//this will generate a random number everytime	
	const randomNumber = Math.round(Math.random());
	const userSelection = event.target.dataset.head ? heads : tails;
	const computerSelection = event.target.dataset.head ? tails : heads;
	await animate(randomNumber, userSelection, computerSelection);
	//Code below await will pause until animate is finish
	addScore(
		randomNumber,
		userSelection, 
		computerSelection
	)
});

function addScore(randomNum, userPick, comPick) {
	isHeadTail(randomNum)
	const playerOutput = document.querySelector('#player');
	const compOutput = document.querySelector('#comp');
	//randomNum which will be either 0 or 1
	if (userPick === randomNum) {
		userScore++
		playerOutput.textContent = `Player: ${userScore}`;
		playerOutput.style.fontWeight = 'bold';
		playerOutput.style.color = 'green';
		compOutput.style.fontWeight = '';
		compOutput.style.color = 'red';
	} else if (comPick === randomNum) {
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
	if(randomNum !== 1 && randomNum !== 0) throw "Invalid number";
	tailEle.style.color = randomNum === 1 ? 'red' : '';
	tailEle.textContent = randomNum === 1 ? 'Heads' : 'Tails';
	headEle.style.color = randomNum === 1 ? 'black' : '';
	headEle.textContent = randomNum === 1 ? 'Tails' : 'Heads';
};


// Functions should only do what they are meant/named after
// Therefore, the animate function should only animate.
/*
	Adding event listener works. But only if there's only 1 animation.
	Other unexpected animation will also trigger the event which is not safe.
	Hence I prefer to use setTimeout in this situation. Also since you,
	already know it's going to be 1s and this methods allow much more precise
	manipulation.
*/
// Promise, AsyncAwait are powerful feature, every JS dev should know it.
function animate(r, u, c) {
	return new Promise((resolve)=>{
		//tails.style.animation = 'upAndRotate 500ms alternate';
		//heads.style.animation = 'upAndRotate 500ms alternate';
		tailEle.classList.add('active');
		headEle.classList.add('active');
		setTimeout(()=>{
			tailEle.classList.remove('active');
			headEle.classList.remove('active');
			resolve()
		}, 1000)
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
