CEILING = 15;
var selected = document.getElementById('cardcontainer');

window.onload = function () {
    for (var i = 0; i < 2; i++) {
        var line = document.createElement('div');
        for (var j = 0; j < (i ? 7 : 8); j++) {
            var selectedCard = document.createElement('div');
            selectedCard.classList.add('selected');
            line.appendChild(selectedCard);
        }
        line.classList.add('line');
        cardcontainer.appendChild(line);
    }
}