var game = document.querySelector('.game__content');
var gameFight = document.querySelector('.game__fight');
var btnGame = document.querySelectorAll('.btn');
var hands;
(function (hands) {
    hands["paper"] = "./images/icon-paper.svg";
    hands["scissors"] = "./images/icon-scissors.svg";
    hands["rock"] = "./images/icon-rock.svg";
})(hands || (hands = {}));
// == Score
var scorePlayer = 0;
var scoreBot = 0;
// Current main
var handPlayer = 0;
var handBot = 0;
var random = function () {
    return Math.floor(Math.random() * 3);
};
btnGame.forEach(function (hand) {
    hand.addEventListener('click', function (e) {
        handPlayer = random();
        handBot = random();
        // == Récupère le bouton cliqué
        var element = e.target;
        // == Récupère le data-hand du bouton
        var dataHand = element.dataset.hand;
        var imgPlayer = document.createElement('div');
        imgPlayer.classList.add("game__fight__player");
        // result player
        switch (dataHand) {
            case 'paper':
                imgPlayer.innerHTML = "<img src='" + hands.paper + "' alt=''>";
                imgPlayer.classList.add("game__fight__player--paper");
                break;
            case 'scissors':
                imgPlayer.innerHTML = "<img src='" + hands.scissors + "' alt=''>";
                imgPlayer.classList.add("game__fight__player--scissors");
                break;
            case 'rock':
                imgPlayer.innerHTML = "<img src='" + hands.rock + "' alt=''>";
                imgPlayer.classList.add("game__fight__player--rock");
                break;
            default:
                alert('Error');
                break;
        }
        var imgBot = document.createElement('div');
        imgBot.classList.add("game__fight__bot");
        // == result bot
        switch (handBot) {
            case 0:
                imgBot.innerHTML = "<img src='" + hands.paper + "' alt=''>";
                imgBot.classList.add("game__fight__bot--paper");
                break;
            case 1:
                imgBot.innerHTML = "<img src='" + hands.scissors + "' alt=''>";
                imgBot.classList.add("game__fight__bot--scissors");
                break;
            case 2:
                imgBot.innerHTML = "<img src='" + hands.rock + "' alt=''>";
                imgBot.classList.add("game__fight__bot--rock");
                break;
        }
        game.style.display = 'none';
        gameFight.appendChild(imgPlayer);
        gameFight.appendChild(imgBot);
    });
});
