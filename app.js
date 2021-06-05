var game = document.querySelector('.game__content');
var gameFight = document.querySelector('.game__fight');
var btnGame = document.querySelectorAll('.btn');
var score = document.querySelector('#score');
var scorePlayer = 0;
var hands;
(function (hands) {
    hands["paper"] = "./images/icon-paper.svg";
    hands["scissors"] = "./images/icon-scissors.svg";
    hands["rock"] = "./images/icon-rock.svg";
})(hands || (hands = {}));
var handClassSelectedPlayer;
(function (handClassSelectedPlayer) {
    handClassSelectedPlayer["paper"] = "game__fight__player--paper";
    handClassSelectedPlayer["scissors"] = "game__fight__player--scissors";
    handClassSelectedPlayer["rock"] = "game__fight__player--rock";
})(handClassSelectedPlayer || (handClassSelectedPlayer = {}));
var handClassSelectedBot;
(function (handClassSelectedBot) {
    handClassSelectedBot["paper"] = "game__fight__bot--paper";
    handClassSelectedBot["scissors"] = "game__fight__bot--scissors";
    handClassSelectedBot["rock"] = "game__fight__bot--rock";
})(handClassSelectedBot || (handClassSelectedBot = {}));
// Current main
var handPlayer = 0;
var handBot = 0;
var random = function () {
    return Math.floor(Math.random() * 3);
};
btnGame.forEach(function (hand) {
    hand.addEventListener('click', function (e) {
        // == Attribute value : rock, paper or scissors
        handPlayer = random();
        handBot = random();
        // == Pick e.target button click
        var element = e.target;
        // == Pick data-hand button
        var dataHand = element.dataset.hand;
        // == Create fight content player
        var resultFightPlayer = document.createElement('div');
        resultFightPlayer.classList.add('game__fight__player');
        var handPlayerSelected;
        var handPlayerClassSelected = '';
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
        var resultFightBot = document.createElement('div');
        resultFightBot.classList.add('game__fight__bot');
        var handBotSelected;
        var handBotClassSelected = '';
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
        resultFightPlayer.innerHTML = "<img src='" + handPlayerSelected + "' alt=''>";
        resultFightPlayer.classList.add(handPlayerClassSelected);
        // == Insert img and style into bot div
        resultFightBot.innerHTML = "<img src='" + handBotSelected + "' alt=''>";
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
        var winOrLoose = function (result) {
            var _a;
            // == Create popup isWin
            var isWin = document.createElement('div');
            isWin.classList.add('game__fight__player__result');
            // == Create button Play Again
            var playAgain = document.createElement('button');
            playAgain.innerHTML = 'PLAY AGAIN';
            playAgain.classList.add('game__fight__player__result__playAgain');
            if (result === 'win') {
                scorePlayer++;
                isWin.innerHTML = '<span>YOU WIN</span>';
                setTimeout(function () {
                    resultFightPlayer.classList.add('animWinner');
                }, 3000);
                console.log(resultFightPlayer);
            }
            else if (result === 'loose') {
                scorePlayer--;
                setTimeout(function () {
                    resultFightBot.classList.add('animWinner');
                }, 3000);
                isWin.innerHTML = '<span>YOU LOSE</span>';
            }
            else {
                isWin.innerHTML = '<span>GAME TIE</span>';
            }
            isWin.appendChild(playAgain);
            (_a = isWin.lastChild) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                if (game.classList.contains('d-none')) {
                    game.classList.remove('d-none');
                    gameFight.classList.add('d-none');
                }
                // == Delete old div
                for (var i = 0; i < gameFight.childNodes.length; i++) {
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
        }
        else if (dataHand === 'paper' && handBot === 1) {
            winOrLoose('loose');
        }
        else if (dataHand === 'paper' && handBot === 2) {
            winOrLoose('win');
        }
        else if (dataHand === 'scissors' && handBot === 0) {
            winOrLoose('win');
        }
        else if (dataHand === 'scissors' && handBot === 1) {
            winOrLoose('egal');
        }
        else if (dataHand === 'scissors' && handBot === 2) {
            winOrLoose('loose');
        }
        else if (dataHand === 'rock' && handBot === 0) {
            winOrLoose('loose');
        }
        else if (dataHand === 'rock' && handBot === 1) {
            winOrLoose('win');
        }
        else if (dataHand === 'rock' && handBot === 2) {
            winOrLoose('egal');
        }
        score.innerHTML = scorePlayer.toString();
    });
});
