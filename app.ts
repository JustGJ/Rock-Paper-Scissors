const game = document.querySelector<HTMLElement>('.game__content')!;
const gameFight = document.querySelector<HTMLElement>('.game__fight')!;
const btnGame = document.querySelectorAll('.btn');
const score = document.querySelector('#score')!;

let scorePlayer: number = 0;

enum hands {
	paper = './images/icon-paper.svg',
	scissors = './images/icon-scissors.svg',
	rock = './images/icon-rock.svg',
}
enum handClassSelectedPlayer {
	paper = 'game__fight__player--paper',
	scissors = 'game__fight__player--scissors',
	rock = 'game__fight__player--rock',
}
enum handClassSelectedBot {
	paper = 'game__fight__bot--paper',
	scissors = 'game__fight__bot--scissors',
	rock = 'game__fight__bot--rock',
}

// Current main
let handPlayer: number = 0;
let handBot: number = 0;

let random = (): number => {
	return Math.floor(Math.random() * 3);
};

btnGame.forEach(hand => {
	hand.addEventListener('click', e => {
		// == Attribute value : rock, paper or scissors
		handPlayer = random();
		handBot = random();

		// == Pick e.target button click
		const element = e.target as HTMLElement;
		// == Pick data-hand button
		const dataHand = element.dataset.hand;

		// == Create fight content player
		let resultFightPlayer = document.createElement('div');
		resultFightPlayer.classList.add('game__fight__player');

		let handPlayerSelected;
		let handPlayerClassSelected: string = '';

		// == Choice player (style)
		switch (dataHand) {
			case 'paper':
				handPlayerSelected = hands.paper;
				handPlayerClassSelected = handClassSelectedPlayer.paper;
				break;
			case 'scissors':
				handPlayerSelected = hands.scissors;
				handPlayerClassSelected = handClassSelectedPlayer.scissors;
				break;
			case 'rock':
				handPlayerSelected = hands.rock;
				handPlayerClassSelected = handClassSelectedPlayer.rock;
				break;
		}

		// == Create fight content bot
		let resultFightBot = document.createElement('div');
		resultFightBot.classList.add('game__fight__bot');

		let handBotSelected;
		let handBotClassSelected: string = '';

		// == Choice bot (style)
		switch (handBot) {
			case 0:
				handBotSelected = hands.paper;
				handBotClassSelected = handClassSelectedBot.paper;
				break;
			case 1:
				handBotSelected = hands.scissors;
				handBotClassSelected = handClassSelectedBot.scissors;
				break;
			case 2:
				handBotSelected = hands.rock;
				handBotClassSelected = handClassSelectedBot.rock;
				break;
		}

		// == Insert img and style into bot div
		resultFightPlayer.innerHTML = `<img src='${handPlayerSelected}' alt=''>`;
		resultFightPlayer.classList.add(handPlayerClassSelected);

		// == Insert img and style into bot div
		resultFightBot.innerHTML = `<img src='${handBotSelected}' alt=''>`;
		resultFightBot.classList.add(handBotClassSelected);

		// == Insert div into game
		game.classList.add('d-none');
		gameFight.appendChild(resultFightPlayer);
		gameFight.appendChild(resultFightBot);

		if (gameFight.classList.contains('d-none')) {
			gameFight.classList.remove('d-none');
			game.classList.add('d-none');
		}

		// WIN OR LOOSE
		const winOrLoose = (result: string) => {
			// == Create popup isWin
			const isWin = document.createElement('div');
			isWin.classList.add('game__fight__player__result');

			// == Create button Play Again
			const playAgain = document.createElement('button');
			playAgain.innerHTML = 'PLAY AGAIN';
			playAgain.classList.add('game__fight__player__result__playAgain');

			if (result === 'win') {
				scorePlayer++;
				isWin.innerHTML = '<span>YOU WIN</span>';
				setTimeout(() => {
					resultFightPlayer.classList.add('animWinner');
				}, 3000);
				console.log(resultFightPlayer);
			} else if (result === 'loose') {
				scorePlayer--;
				setTimeout(() => {
					resultFightBot.classList.add('animWinner');
				}, 3000);
				isWin.innerHTML = '<span>YOU LOSE</span>';
			} else {
				isWin.innerHTML = '<span>GAME TIE</span>';
			}

			isWin.appendChild(playAgain);

			isWin.lastChild?.addEventListener('click', () => {
				if (game.classList.contains('d-none')) {
					game.classList.remove('d-none');
					gameFight.classList.add('d-none');
				}
				// == Delete old div
				for (let i = 0; i < gameFight.childNodes.length; i++) {
					gameFight.removeChild(gameFight.childNodes[i]);
				}
				gameFight.removeChild(gameFight.childNodes[0]);
			});

			// == Insert div isWin
			gameFight.insertBefore(isWin, resultFightBot);
		};

		// == Result fight between player and bot
		if (dataHand === 'paper' && handBot === 0) {
			winOrLoose('egal');
		} else if (dataHand === 'paper' && handBot === 1) {
			winOrLoose('loose');
		} else if (dataHand === 'paper' && handBot === 2) {
			winOrLoose('win');
		} else if (dataHand === 'scissors' && handBot === 0) {
			winOrLoose('win');
		} else if (dataHand === 'scissors' && handBot === 1) {
			winOrLoose('egal');
		} else if (dataHand === 'scissors' && handBot === 2) {
			winOrLoose('loose');
		} else if (dataHand === 'rock' && handBot === 0) {
			winOrLoose('loose');
		} else if (dataHand === 'rock' && handBot === 1) {
			winOrLoose('win');
		} else if (dataHand === 'rock' && handBot === 2) {
			winOrLoose('egal');
		}

		score.innerHTML = scorePlayer.toString();
	});
});


