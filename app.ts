const game = document.querySelector<HTMLElement>('.game__content')!; 
const gameFight = document.querySelector('.game__fight')!;
const btnGame = document.querySelectorAll('.btn');

enum hands {
    paper = './images/icon-paper.svg',
    scissors = './images/icon-scissors.svg',
    rock = './images/icon-rock.svg',
}

// == Score
const scorePlayer: number = 0;
const scoreBot: number = 0;

// Current main
let handPlayer: number = 0;
let handBot: number = 0;

let random = ():number => {
	return Math.floor(Math.random() * 3);
};

btnGame.forEach(hand => {
	hand.addEventListener('click', (e) => {
		handPlayer = random();
		handBot = random();

        // == Récupère le bouton cliqué
        const element = e.target as HTMLElement;
        // == Récupère le data-hand du bouton
        const dataHand = element.dataset.hand;

        let imgPlayer = document.createElement('div');
        imgPlayer.classList.add("game__fight__player");

        // result player
        switch (dataHand){
            case 'paper':
                imgPlayer.innerHTML = `<img src='${hands.paper}' alt=''>`;
                imgPlayer.classList.add("game__fight__player--paper");
                break;
            case 'scissors' :
                imgPlayer.innerHTML = `<img src='${hands.scissors}' alt=''>`;
                imgPlayer.classList.add("game__fight__player--scissors");
                break;
            case 'rock' : 
                imgPlayer.innerHTML = `<img src='${hands.rock}' alt=''>`;
                imgPlayer.classList.add("game__fight__player--rock");
                break;
            default : alert('Error');
                break;
        }
      

		let imgBot = document.createElement('div');
        imgBot.classList.add("game__fight__bot")

        // == result bot
        switch (handBot) {
			case 0:
                imgBot.innerHTML = `<img src='${hands.paper}' alt=''>`;
                imgBot.classList.add("game__fight__bot--paper");

				break;
			case 1:
                imgBot.innerHTML = `<img src='${hands.scissors}' alt=''>`;
                imgBot.classList.add("game__fight__bot--scissors");
                break;
			case 2:
                imgBot.innerHTML = `<img src='${hands.rock}' alt=''>`;
                imgBot.classList.add("game__fight__bot--rock");
				break;
		}

        
		game.style.display = 'none';
		gameFight.appendChild(imgPlayer);
		gameFight.appendChild(imgBot);
	});
})

