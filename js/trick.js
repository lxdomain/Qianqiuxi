function clearChildNodes(dom) {
    while (dom.hasChildNodes()) {
        dom.removeChild(dom.lastChild);
    }
}

function removeContextmenuEvents(dom) {
    for (let i = 0; i < dom.childNodes.length; i++) {
        dom.childNodes[i].oncontextmenu = null;
    }
}

function abandonCard(normalCardList, dom) {
    for (let i = 0; i < normalCardList.length; i++) {
        dom.childNodes[i].oncontextmenu = function () {
            infobox.style.zIndex = ZINDEX_INF;
            trickbox.style.display = 'block';
            clearChildNodes(trickimage);
            trickback.onclick = () => {
                infobox.style.zIndex = 'auto';
                trickbox.style.display = 'none';
                clearChildNodes(trickimage);
            }
            let selectedCard = document.createElement('div');
            selectedCard.classList.add('alertimage');
            selectedCard.style.backgroundImage = 'url(' + "img/" + normalCardList[i] + ".jpg" + ')';
            trickimage.appendChild(selectedCard);


            while (card.length < 3) {
                index = getRandom(TOTAL_NORMAL_CARD);
                if (!visitedNormalCardList[index][1]) {
                    if (card.indexOf(visitedNormalCardList[index][0]) == -1) {
                        card.push(visitedNormalCardList[index][0]);
                    }
                }
            }
            for (let j = 0; j < card.length; j++) {
                let swappedCard = document.createElement('div');
                swappedCard.classList.add('alertimage', 'noborder');
                swappedCard.style.backgroundImage = 'url(' + "img/" + card[j] + ".jpg" + ')';
                trickimage.appendChild(swappedCard);
            }
            listenNormalCard(trickimage, 1);

            for (let k = 1; k < trickimage.childNodes.length; k++) {
                trickimage.childNodes[k].onclick = () => {
                    for (let index = 0; index < visitedNormalCardList.length; index++) {
                        if (normalCardList[i] == visitedNormalCardList[index][0]) {
                            visitedNormalCardList[index][1] = false;
                            break;
                        }
                    }
                    for (let index = 0; index < visitedNormalCardList.length; index++) {
                        if (card[k - 1] == visitedNormalCardList[index][0]) {
                            visitedNormalCardList[index][1] = true;
                            break;
                        }
                    }
                    console.log('我方 丢弃[' + normalCardList[i] + '] 换取[' + card[k - 1] + ']');
                    normalCardList[i] = card[k - 1];
                    this.style.backgroundImage = 'url(' + "img/" + card[k - 1] + ".jpg" + ')';
                    listenNormalCard(mycards);
                    bindNormalCard(mycards);
                    removeContextmenuEvents(dom);
                    card = [];
                    trickback.onclick();
                }
            }
        }
    }
}
