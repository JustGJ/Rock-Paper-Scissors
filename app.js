var game = document.querySelector('.game__content');
var gameFight = document.querySelector('.game__fight');
var btnGame = document.querySelectorAll('.btn');
var scorePlayer = 0;
var scoreBot = 0;
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
        // == Create popup win or loose
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
                handPlayerClassSelected = handClassSelectedPlayer.rock;
                break;
            case 'rock':
                handPlayerSelected = hands.rock;
                handPlayerClassSelected = handClassSelectedPlayer.scissors;
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
        game.style.display = 'none';
        gameFight.appendChild(resultFightPlayer);
        gameFight.appendChild(resultFightBot);
        // == Insert div isWin
        var isWin = document.createElement('div');
        gameFight.insertBefore(isWin, resultFightBot);
    });
});
