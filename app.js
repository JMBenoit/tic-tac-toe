function $(value) {
	return document.getElementById(value);
}

let guesses = [];
let playerTurn = 1;
const cells = document.getElementsByClassName('cell');

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', makeGuess);
}

function makeGuess() {
	if (this.textContent != '') {
		$('displayText').textContent.append = 'Please choose a valid space';
	} else {
		guesses[this.id] = playerTurn;
		if (playerTurn == 1) {
			this.textContent = 'X';
			this.classList.add('player1');
			playerTurn = 2;
			$('displayText').textContent = "Player 2's turn";
		} else {
			this.textContent = 'O';
			this.classList.add('player2');
			playerTurn = 1;
			$('displayText').textContent = "Player 1's turn";
		}
	}
	checkEnd();
}

function checkEnd() {
	for (let i = 1; i < 3; i++) {
		if (
			(guesses[1] == i && guesses[2] == i && guesses[3] == i) ||
			(guesses[4] == i && guesses[5] == i && guesses[6] == i) ||
			(guesses[7] == i && guesses[8] == i && guesses[9] == i) ||
			(guesses[1] == i && guesses[4] == i && guesses[7] == i) ||
			(guesses[2] == i && guesses[5] == i && guesses[8] == i) ||
			(guesses[3] == i && guesses[6] == i && guesses[9] == i) ||
			(guesses[1] == i && guesses[5] == i && guesses[9] == i) ||
			(guesses[3] == i && guesses[5] == i && guesses[7] == i)
		) {
			$('displayText').textContent = `Player ${i} Wins!`;
			$('displayText').classList.add(`player${i}`);
			playerTurn = 0;
			for (let i = 0; i < cells.length; i++) {
				cells[i].removeEventListener('click', makeGuess);
			}
		}
	}
	if (playerTurn != 0) {
		let emptySlot = false;
		for (let j = 1; j < 10; j++) {
			if (guesses[j] == null) {
				emptySlot = true;
			}
		}
		if (!emptySlot) {
			$('displayText').textContent = `Tie!`;
		}
	}
}
