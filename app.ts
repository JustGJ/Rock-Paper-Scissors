const game = document.querySelector<HTMLElement>('.game__content')!;
const gameFight = document.querySelector('.game__fight')!;
const btnGame = document.querySelectorAll('.btn');
const scorePlayer: number = 0;
const scoreBot: number = 0;

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
		// == Create popup win or loose

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
				handPlayerClassSelected = handClassSelectedPlayer.rock;
				break;
			case 'rock':
				handPlayerSelected = hands.rock;
				handPlayerClassSelected = handClassSelectedPlayer.scissors;
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
		game.style.display = 'none';
		gameFight.appendChild(resultFightPlayer);
		gameFight.appendChild(resultFightBot);

		// == Insert div isWin
		let isWin = document.createElement('div');
		gameFight.insertBefore(isWin, resultFightBot);
	});
});
