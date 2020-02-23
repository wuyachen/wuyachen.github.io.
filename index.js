let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function makeWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}
function showCompChoice(compChoice){
	if (compChoice === "r"){
		rock_div.classList.add("comp-choice");
	}
	if (compChoice === "p"){
		paper_div.classList.add("comp-choice");
	}
	if (compChoice === "s"){
		scissors_div.classList.add("comp-choice");
	}
	setTimeout(hideChoices, 1500);
}
function hideChoices(){
	rock_div.classList.remove("comp-choice","user-choice");
	paper_div.classList.remove("comp-choice","user-choice");
	scissors_div.classList.remove("comp-choice","user-choice");
}
function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `<span style="color:#00E4F2;">${makeWord(userChoice)}</span> beats <span style="color:#F9F345;">${makeWord(compChoice)}</span>. You win!`;
}

function lose(userChoice, compChoice){
	compScore++;
	compScore_span.innerHTML = compScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `<span style="color:#00E4F2;">${makeWord(userChoice)}</span> gets beaten by <span style="color:#F9F345;">${makeWord(compChoice)}</span>. You lose!`;
}

function draw(userChoice, compChoice){
	showCompChoice(compChoice);
	result_p.innerHTML = `<span style="color:#00E4F2;">${makeWord(userChoice)}</span> is the same as <span style="color:#F9F345;">${makeWord(compChoice)}</span>. It's a draw!`;
}

function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, compChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;		
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
		rock_div.classList.add("user-choice");
	});

	paper_div.addEventListener('click', function(){
		game("p");
		paper_div.classList.add("user-choice");
	});

	scissors_div.addEventListener('click', function(){
		game("s");
		scissors_div.classList.add("user-choice");
	})
};

main();