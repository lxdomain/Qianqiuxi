var visitedNormalCardList = [];
var yourNormalCardList = [];
var yourSpecialCardList = [];
var yourOwnedCardList = [];
var yourCompletedCombList = new Map();
var yourCurrentScore = 0;
var poolCardList = [];
var myNormalCardList = [];
var mySpecialCardList = [];
var myOwnedCardList = [];
var myCompletedCombList = new Map();
var myCurrentScore = 0;

var normalCardList = new Map(
    [
        ['风晴雪', ['2', ' 青丝银栉别样梳，<br>天付婆娑入画图。', '春']],
        ['方兰生', ['2', '嫏嬛久觅紫云乡，<br>半枕清风鹤梦长。', '春']],
        ['阿阮', ['2', ' 楚梦沉醉朝复暮，<br>清歌远上巫山低。', '春']],
        ['沈曦', ['2', '梦呓短歌消长夜，<br>吉光片羽碎琉璃。', '春']],
        ['巽芳', ['2', '芳华如梦佳期逝，<br>蓦然回首柔情旧。', '春']],
        ['襄铃', ['2', '额前未肯点胭脂，<br>懒把相思细细知。', '夏']],
        ['乐无异', ['2', '杨柳风前歌玉树，<br>黄金堂下卧麒麟。', '夏']],
        ['谢衣', ['2', '花落庭前浮图现，<br>人间尽是晚晴天。', '夏']],
        ['禺期', ['2', '一世仙身为剑痴，<br>晗光蕴灵万事知。', '夏']],
        ['悭臾', ['2', '东海祖洲识命魂，<br>不周山下多古意。', '夏']],
        ['红玉', ['2', '九重环佩艳琳琅，<br>一段红绡旖旎长。', '秋']],
        ['尹千觞', ['2', '江湖肝胆风波促，<br>万里云山醉梦真。', '秋']],
        ['闻人羽', ['2', '朱颜流落东风里，<br>月满千山倚筑歌。', '秋']],
        ['欧阳少恭', ['2', '风前独坐弄琴筝，<br>明灭蓬山九万程。', '秋']],
        ['清和真人', ['2', '明哲通达出太华，<br>山河秀丽诗酒花。', '秋']],
        ['夏夷则', ['2', '八极乘龙巡碧落，<br>一襟风雪载昆仑。', '冬']],
        ['百里屠苏', ['2', '古剑铁衣映清辉，<br>百劫阎浮一念微。', '冬']],
        ['沈夜', ['2', '时烬未烬陷永夜，<br>归期无期月寒沉。', '冬']],
        ['陵越', ['2', '剑意御风凌山月，<br>往事伴烛映霜雪。', '冬']],
        ['华月', ['2', '元月夜下箜篌引，<br>不负相思不负君。', '冬']],
        ['琴川', ['2', '杏花微雨沾衣湿，<br>陌路少年檐下识。', '春']],
        ['长安', ['2', '众人揽胜逐朝霞，<br>游子笑折一枝花。', '春']],
        ['天墉城', ['2', '昆仑山巅修至道，<br>剑御四野灵空明。', '夏']],
        ['百草谷', ['2', '横戈盘马草如茵，<br>介胄执枹郁成阴。', '夏']],
        ['巫山', ['2', '风飖轻举降暮雨，<br>碧峭绵延匿神女。', '夏']],
        ['蓬莱', ['2', '青阶似洗驻岁华，<br>蓬山曲径情无暇。', '夏']],
        ['青玉坛', ['2', '试心桥上分阴阳，<br>魂兮魄兮难辨章。', '秋']],
        ['紫榕林', ['2', '湖天春色归路迷，<br>幼狐梦醒眼迷离。', '秋']],
        ['榣山', ['2', '沧海桑田新几度，<br>月明还照旧容颜。', '秋']],
        ['太华山', ['2', '巍巍云巅鹤长唳，<br>亭亭尘外山色霁。', '冬']],
        ['幽都', ['2', '娲皇故里聚先贤，<br>风雨如晦葬龙渊。', '冬']],
        ['流月城', ['2', '月冷千山孤城悬，<br>神木凋零远人间。', '冬']],
        ['昭明', ['2', '星屑玉魄结剑还，<br>光耀四野止寒夜。', '春']],
        ['露草', ['2', '天地灵韵凝霜骨，<br>剑心支离相思苦。', '春']],
        ['凤来', ['2', '神识邈邈拂丝弦，<br>人间离散月又圆。', '春']],
        ['黑龙鳞片', ['2', '浮云一别未虚掷，<br>光阴荏冉故人来。', '夏']],
        ['古剑焚寂', ['2', '琴心剑魄今何在，<br>留见星虹贯九天。', '夏']],
        ['古剑红玉', ['2', '枫落龙渊宿此间，<br>青锋不再伴恨眠。', '夏']],
        ['青玉司南佩', ['2', '曲终人散心不悔，<br>一魂一魄永相随。', '春']],
        ['焦炭', ['2', '天地为炉生妙物，<br>阴阳为炭造化功。', '夏']],
        ['通天之器', ['2', '天道浩瀚难穷尽，<br>若涉渊水正道心。', '秋']],
        ['无名之剑', ['2', '上古威仪难复现，<br>敛光为华唤明心。', '秋']],
        ['金麒麟', ['2', '江上熏风鸳鸯游，<br>两小无猜赠麒麟。', '秋']],
        ['兔子抱枕', ['2', '长长折耳护稚童，<br>圆圆黑眸沐春风。', '秋']],
        ['古剑晗光', ['2', '传世利刃寒光荧，<br>千秋凡铁宿魂灵。', '冬']],
        ['百胜刀', ['2', '白刃出鞘饮煞气，<br>世事斗转换乾坤。', '冬']],
        ['忘川', ['2', '寂灭幻断前缘尽，<br>旋刺斩决君子心。', '冬']],
        ['华月箜篌', ['2', '凝音织梦倚阑珊，<br>清商抚羽月沉沦。', '冬']],
        ['桃花谷', ['2', '花开花落蜂蝶舞，<br>日出日落泉叮咚。', '春']],
        ['静水湖', ['2', '水天一色洗尘嚣，<br>帘栊垂落与神交。', '春']],
        ['安陆', ['2', '醉白楼旁杏林黄，<br>岁首辞君别无恙。', '秋']],
        ['神女墓', ['2', '神农座下披华藻，<br>行云带雨香殒早。', '冬']],
        ['北洛', ['2', '璞玉浑金啸天地，<br>冷铁戍梦荡山平。', '秋']],
        ['云无月', ['2', '既出丹渊交光夜，<br>凝雾点漆逸流萤。', '冬']],
        ['岑缨', ['2', '豆火薪传笑嫣然，<br>书帷漫卷睛灵秀。', '夏']],
        ['姬轩辕', ['2', '天何所沓梦归崖，<br>日月入怀星分阵。', '春']],
        ['缙云', ['2', '岁付征鸿挥斗柄，<br>剑破寰宇卫荒服。', '秋']],
        ['巫炤', ['2', '空阶拥璇献沉壁，<br>枉消虚过碎玉衡。', '冬']],
        ['司危', ['2', '韶颜稚齿芳菲逝，<br>朱轮惘惘笑移烛。', '夏']],
        ['玄戈&霓商', ['2', '惊风奔雷骋四野，<br>重帘暮深落星沉。', '冬']],
        ['嫘祖', ['2', '掷镜秉钺自光辉，<br>孤城折冲影巍巍。', '夏']],
        ['刘兄', ['2', '青丘尘中犹独醒，<br>夕寐宵兴叙多情。', '春']],
        ['鄢陵', ['2', '折花掷果麹盈车，<br>华红叠翠醉春晖。', '春']],
        ['天鹿城', ['2', '霄虹纹彩九千仞，<br>莫见阙角倚碧海。', '秋']],
        ['西陵', ['2', '鸢飞丘墟千嶂叠，<br>狼烟横亘背花烬。', '秋']],
        ['有熊', ['2', '固城筑基共拾火，<br>绯云漫卷覆濠墙。', '秋']],
        ['白梦泽', ['2', '旧时泽畔刺荆心，<br>云散雾始咏初年。', '春']],
        ['巫之国', ['2', '寂寂无声伴永生，<br>堭堭空音歌未央。', '冬']],
        ['鼎湖', ['2', '神舆行处凝涧壑，<br>帐殿倚云破冰枝。', '冬']],
        ['赤水', ['2', '未闻龙啸绝凌云，<br>残灯耿夜拾遗珠。', '夏']],
        ['阳平', ['2', '谷旦净扫立修竹，<br>翠园燕语暖春光。', '夏']],
        ['无名之地', ['2', '生生死死漠无声，<br>影影绰绰空载魂。', '冬']],
        ['太岁', ['2', '照之以日月，<br>经之以星辰。<br>纪之以四时，<br>要之以太岁。', '冬']],
        ['原天柿', ['2', '结庐莲境持家计，<br>饱卧汤泉乡音齐。', '春']],
        ['画板', ['2', '聿画三界行九州，<br>千秋入墨成陈迹。', '夏']],
        ['半魂莲', ['2', '浮生聚散梦连陇，<br>天星摇落尽成空。', '夏']],
        ['玉梳', ['2', '旧梦如昨梳叠云，<br>故国凋零意难平。', '春']],
        ['梦魂枝', ['2', '切切以旧梦为恨，<br>点点以残魂为引。', '秋']],
        ['青丘尘中记', ['2', '闲情偶寄旦付梓，<br>一语成谶结狐缘。', '春']],
        ['天鹿', ['2', '披荆斩棘炫明光，<br>护城悬阵却群魔。', '秋']],
        ['馋鸡', ['2', '北溟鲲游翻海震，<br>袖藏禅机翥天飞。', '春']],
        ['红叶湖', ['2', '野睛露染狐呜咿，<br>红塘落叶榕须摇。', '夏']],
        ['捐毒', ['2', '玉门关外祭坛成，<br>浑邪葬处沙倾城。', '秋']],
        ['阿翔', ['2', '一团冰雪含奇质，<br>万里云霄豁俊眸。', '冬']],
    ]);

reloadbtn.onclick = function () {
    window.location.reload();
}

startbtn.onclick = function () {
    start();
}

specialcard.onclick = function () {
    showOverview();
    reflowMySpecialCard();
    document.getElementById('viewporttext').innerHTML = '我方珍稀牌&nbsp;&gt;&gt;&gt;';
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < viewportcontainerElement.childNodes.length; i++) {
        viewportcontainerElement.childNodes[i].style.display = 'inline-block';
    }
}

yourboard.onclick = function () {
    showOverview();
    document.getElementById('viewporttext').innerHTML = '对方牌组&nbsp;&gt;&gt;&gt;';
    document.getElementById('leftbox').style.display = 'block';
    recommendedcomb.style.display = 'none';
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < viewportcontainerElement.childNodes.length; i++) {
        viewportcontainerElement.childNodes[i].style.display = 'none';
    }
    ownedcard.onclick();
}

myboard.onclick = function () {
    showOverview();
    document.getElementById('viewporttext').innerHTML = '我方牌组&nbsp;&gt;&gt;&gt;';
    document.getElementById('leftbox').style.display = 'block';
    recommendedcomb.style.display = 'block';
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < viewportcontainerElement.childNodes.length; i++) {
        viewportcontainerElement.childNodes[i].style.display = 'none';
    }
    ownedcard.onclick();
}

ownedcard.onclick = function () {
    check(ownedcard);
    reflow();
}

completedcomb.onclick = function () {
    check(completedcomb);
    reflow();
}

recommendedcomb.onclick = function () {
    check(recommendedcomb);
    reflow();
}

viewportback.onclick = function () {
    document.getElementById('viewporthead').style.display = 'none';
    document.getElementById('viewportbody').style.display = 'none';
    document.getElementById('leftbox').style.display = 'none';
    initStage();
}

function check(element) {
    ownedcard.innerHTML = '已拥有的卡牌';
    completedcomb.innerHTML = '已完成的组对';
    recommendedcomb.innerHTML = '查看推荐组对';
    element.innerHTML += '&nbsp;&gt;';
}

function reflow() {
    if (leftbox.style.display == 'block') {
        if (viewporttext.innerHTML.indexOf('我方牌组') != -1) {
            if (ownedcard.innerHTML.indexOf('&gt;') != -1) {
                reflowOwnedCard(myOwnedCardList);
            }
            else if (completedcomb.innerHTML.indexOf('&gt;') != -1) {
                reflowCompletedComb(myCompletedCombList);
            }
            else if (recommendedcomb.innerHTML.indexOf('&gt;') != -1) {
                reflowRecommendedComb(combList);
            }
        }
        else if (viewporttext.innerHTML.indexOf('对方牌组') != -1) {
            if (ownedcard.innerHTML.indexOf('&gt;') != -1) {
                reflowOwnedCard(yourOwnedCardList);
            }
            else if (completedcomb.innerHTML.indexOf('&gt;') != -1) {
                reflowCompletedComb(yourCompletedCombList);
            }
        }
    }
    else {
        reflowMySpecialCard();
    }
}

function start() {
    initStage();
    initVisitedNormalCard();
    saveMySpecialCard();
    showMySpecialCard();
    createRecommendedCard();

    var poolcardsElement = document.getElementById('poolcards');
    var yourcardsElement = document.getElementById('yourcards');
    var mycardsElement = document.getElementById('mycards');
    createCardBack(INITIAL_CARD_NUM, INITIAL_CARD_HD, yourcardsElement);
    yourNormalCardList = createNormalCard(INITIAL_CARD_NUM);

    createCardBack(INITIAL_CARDBACK_NUM, INITIAL_CARDBACK_HD, poolcardsElement);
    poolCardList = createNormalCard(MIN_CARD_NUM_IN_POOL, CARD_HD_IN_POOL, poolcardsElement);
    listenNormalCard(poolcardsElement, INITIAL_CARDBACK_NUM);
    bindPoolCard(INITIAL_CARDBACK_NUM);

    myNormalCardList = createNormalCard(INITIAL_CARD_NUM, INITIAL_CARD_HD, mycardsElement);
    listenNormalCard(mycardsElement);
    bindNormalCard(mycardsElement);

    abandonCard(myNormalCardList, mycardsElement);
}

//Hide firt stage and show second stage.
function initStage() {
    var previewboxElement = document.getElementById('previewbox');
    var descriptiontextElements = document.getElementsByClassName('descriptiontext');
    previewboxElement.style.backgroundImage = '';
    descriptiontextElements[0].innerHTML = '';
    descriptiontextElements[1].innerHTML = '';
    descriptiontextElements[2].innerHTML = '';

    var configuratorElements = document.getElementsByClassName('configurator');
    for (let i = 0; i < configuratorElements.length; i++) {
        configuratorElements[i].style.display = 'none';
    }
    var controllerElements = document.getElementsByClassName('controller');
    for (let i = 0; i < controllerElements.length; i++) {
        controllerElements[i].style.display = 'block';
    }
}

//Initialize marked array.
function initVisitedNormalCard() {
    for (let key of normalCardList.keys()) {
        visitedNormalCardList.push([key, false]);
    }
}

//Save selected special cards on first stage.
function saveMySpecialCard() {
    var cardcontainerElement = document.getElementById('cardcontainer');
    for (let i = 0; i < cardcontainerElement.childNodes.length; i++) {
        if (cardcontainerElement.childNodes[i].classList.contains('scanned')) {
            var name = cardcontainerElement.childNodes[i].style.backgroundImage.slice(9, -6);
            mySpecialCardList.push([name, false]);
        }
    }
}

//Show selected special cards on second stage.
function showMySpecialCard() {
    for (let i = 0; i < mySpecialCardList.length; i++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = 'url(img/' + mySpecialCardList[i][0] + '.jpg)';
        card.style.transform = 'rotate(' + getRandom(45) * (i & 1 ? -1 : 1) + 'deg)';
        specialcard.appendChild(card);
    }
}

//Listen selected special cards on second stage.
function reflowMySpecialCard() {
    clearChildNodes(viewportcontainer);
    var previewboxElement = document.getElementById('previewbox');
    var descriptiontextElements = document.getElementsByClassName('descriptiontext');
    for (let i = 0; i < mySpecialCardList.length; i++) {
        if (!mySpecialCardList[i][1]) {
            var card = document.createElement('div');
            card.classList.add('scanned');
            card.style.backgroundImage = 'url(img/' + mySpecialCardList[i][0] + '.jpg)';
            var viewportcontainerElement = document.getElementById('viewportcontainer');
            viewportcontainerElement.appendChild(card);

            card.addEventListener('mouseover', function () {
                previewboxElement.style.backgroundImage = this.style.backgroundImage;
                descriptiontextElements[0].innerHTML = mySpecialCardList[i][0].split('·')[0] + '&#9733' + ' ' + specialCardList.get(mySpecialCardList[i][0])[0] + '分' + '<br>' + '<hr>';
                descriptiontextElements[1].innerHTML = mySpecialCardList[i][0] + '<br>' + specialCardList.get(mySpecialCardList[i][0])[1] + '<br>';
                descriptiontextElements[2].innerHTML = specialCardList.get(mySpecialCardList[i][0])[2];
                transform(previewboxElement, 'hide', 'show');
                transform(descriptiontextElements[0], 'hide', 'show');
                transform(descriptiontextElements[1], 'hide', 'show');
                transform(descriptiontextElements[2], 'hide', 'show');
            }, true);

            card.addEventListener('mouseout', function () {
                transform(previewboxElement, 'show', 'hide');
                transform(descriptiontextElements[0], 'show', 'hide');
                transform(descriptiontextElements[1], 'show', 'hide');
                transform(descriptiontextElements[2], 'show', 'hide');
            }, true);
        }

    }
}

function reflowOwnedCard(ownedcardList) {
    clearChildNodes(viewportcontainer);
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < ownedcardList.length; i++) {
        var card = document.createElement('div');
        card.style.backgroundImage = 'url(img/' + ownedcardList[i] + '.jpg)';
        for (let j = 0; j < mySpecialCardList.length; j++) {
            if (mySpecialCardList[j][0].split('·')[0] == ownedcardList[i]) {
                ownedcardList[i] = mySpecialCardList[j][0];
                card.style.backgroundImage = 'url(img/' + mySpecialCardList[j][0] + '.jpg)';
                break;
            }
        }
        card.classList.add('scanned');
        viewportcontainerElement.appendChild(card);
    }
    listenMyOwnedlCard(viewportcontainerElement);
}

function reflowCompletedComb(completedCombList) {
    reflowRecommendedComb(completedCombList);
}

//Template for creating card backs in container.
function createCardBack(num, hd, parent) {
    for (let i = 0; i < num; i++) {
        var cardBack = document.createElement('div');
        cardBack.classList.add('card');
        cardBack.style.backgroundImage = 'url(' + 'cardback.jpg' + ')';
        if (hd == INITIAL_CARDBACK_HD) {
            cardBack.style.right = hd * i + '%';
            cardBack.style.bottom = i + '%';
        }
        else if (hd == INITIAL_CARD_HD) {
            cardBack.style.left = hd * i + '%';
            cardBack.style.bottom = (i & 1) + '%';
        }
        cardBack.style.zIndex = num - i - 1 + ZINDEX_BASE;
        parent.appendChild(cardBack);
    }
}

//Template for creating normal cards in container.
function createNormalCard(num, hd, parent) {
    var cards = [];
    while (cards.length < num) {
        let index = getRandom(TOTAL_NORMAL_CARD);
        if (!visitedNormalCardList[index][1]) {
            visitedNormalCardList[index][1] = true;
            cards.push(visitedNormalCardList[index][0]);
        }
    }
    if (hd != undefined && parent != undefined) {
        for (let i = 0; i < num; i++) {
            var card = document.createElement('div');
            card.classList.add('card');
            card.style.backgroundImage = 'url(img/' + cards[i] + '.jpg)';
            card.style.left = hd * (i + (hd == CARD_HD_IN_POOL)) + '%';
            card.style.bottom = (i & 1) + '%';
            card.style.zIndex = num - i - 1 + ZINDEX_BASE;
            parent.appendChild(card);
        }
    }
    return cards;
}

//Listen normal cards in container.
function listenNormalCard(element, st = 0) {
    var infotitleElement = document.getElementById('infotitle');
    var infobodyElement = document.getElementById('infobody');
    for (let j = st; j < element.childNodes.length; j++) {
        let cardName = element.childNodes[j].style.backgroundImage.slice(9, -6);
        element.childNodes[j].onmouseover = () => {
            infotitleElement.innerHTML = cardName + '&nbsp;&nbsp;&nbsp;&nbsp;' + '2分' + '<hr>';
            var str = '<br>' + '可形成组合的卡牌：' + '<br>';
            for (let i = 0; i < recommendedCardList.get(cardName).length; i++) {
                if (recommendedCardList.get(cardName)[i] != cardName) {
                    str += recommendedCardList.get(cardName)[i] + '、';
                }
            }
            str = str.substring(0, str.length - 1);
            infobodyElement.innerHTML = str;
            transform(infotitleElement, 'hide', 'show');
            transform(infobodyElement, 'hide', 'show');
        }

        element.childNodes[j].onmouseout = () => {
            transform(infotitleElement, 'show', 'hide');
            transform(infobodyElement, 'show', 'hide');
        }
    }
}

function listenMyOwnedlCard(element) {
    var previewboxElement = document.getElementById('previewbox');
    var descriptiontextElements = document.getElementsByClassName('descriptiontext');
    for (let j = 0; j < element.childNodes.length; j++) {
        let cardName = element.childNodes[j].style.backgroundImage.slice(9, -6);
        element.childNodes[j].onmouseover = () => {
            previewboxElement.style.backgroundImage = element.childNodes[j].style.backgroundImage;
            if (cardName.includes('·')) {
                descriptiontextElements[0].innerHTML = cardName.split('·')[0] + '&#9733' + '&nbsp;' + specialCardList.get(cardName)[0] + '分' + '<br>' + '<hr>';
                descriptiontextElements[1].innerHTML = cardName + '<br>' + specialCardList.get(cardName)[1] + '<br>';
                descriptiontextElements[2].innerHTML = specialCardList.get(cardName)[2];
            }
            else {
                descriptiontextElements[0].innerHTML = cardName + '&nbsp;&nbsp;&nbsp;&nbsp;' + '2分' + '<hr>';
                descriptiontextElements[1].innerHTML = normalCardList.get(cardName)[1];
                var str = '可形成组合的卡牌：' + '<br>';
                for (let i = 0; i < recommendedCardList.get(cardName).length; i++) {
                    if (recommendedCardList.get(cardName)[i] != cardName) {
                        str += recommendedCardList.get(cardName)[i] + '、';
                    }
                }
                str = str.substring(0, str.length - 1);
                descriptiontextElements[2].innerHTML = str;
            }
            transform(previewboxElement, 'hide', 'show');
            transform(descriptiontextElements[0], 'hide', 'show');
            transform(descriptiontextElements[1], 'hide', 'show');
            transform(descriptiontextElements[2], 'hide', 'show');
        }
        element.childNodes[j].onmouseout = () => {
            transform(previewboxElement, 'show', 'hide');
            transform(descriptiontextElements[0], 'show', 'hide');
            transform(descriptiontextElements[1], 'show', 'hide');
            transform(descriptiontextElements[2], 'show', 'hide');
        }
    }
}

//Cards of the same season will be luminous.
//Do not use EventListener on this recursive function!
function bindNormalCard(dom) {
    var mycardsElement = document.getElementById('mycards');
    var poolcardsElement = document.getElementById('poolcards');
    for (let i = 0; i < dom.childNodes.length; i++) {
        if (checkSeason()) {
            dom.childNodes[i].onclick = function () {
                for (let j = INITIAL_CARDBACK_NUM; j < poolcardsElement.childNodes.length; j++) {
                    if (poolcardsElement.childNodes[j].classList.contains('cardshadow')) {
                        poolcardsElement.childNodes[j].classList.remove('cardshadow');
                    }
                }
                for (let i = 0; i < dom.childNodes.length; i++) {
                    if (dom.childNodes[i].classList.contains('cardshadow')) {
                        dom.childNodes[i].style.top = '';
                        dom.childNodes[i].classList.remove('cardshadow');
                        if (this === dom.childNodes[i])
                            return;
                    }
                }
                dom.childNodes[i] && (dom.childNodes[i].style.top = '-30%');
                dom.childNodes[i] && (dom.childNodes[i].classList.add('cardshadow'));
                dom.childNodes[i] && (myCardName = dom.childNodes[i].style.backgroundImage.slice(9, -6));
                for (let j = INITIAL_CARDBACK_NUM; j < poolcardsElement.childNodes.length; j++) {
                    var poolCardName = poolcardsElement.childNodes[j].style.backgroundImage.slice(9, -6);
                    if (normalCardList.get(myCardName)[2] == normalCardList.get(poolCardName)[2]) {
                        poolcardsElement.childNodes[j].classList.add('cardshadow');
                    }
                }
            }
        }
        else {
            dom.childNodes[i].onclick = function () {
                if (poolcardsElement.childNodes.length >= MAX_CARD_NUM_IN_POOL + INITIAL_CARDBACK_NUM) {
                    shuffleDeck();
                    bindNormalCard(mycardsElement);
                    return;
                }
                reflowPoolCards();
                swapCards(this, poolcardsElement.lastChild);
            }
        }
    }
}

function shuffleDeck() {
    var poolcardsElement = document.getElementById('poolcards');
    while (poolcardsElement.childNodes.length > INITIAL_CARDBACK_NUM) {
        let name = poolcardsElement.lastChild.style.backgroundImage.slice(9, -6);
        for (let j = 0; j < visitedNormalCardList.length; j++) {
            if (visitedNormalCardList[j][0] == name) {
                visitedNormalCardList[j][1] = false;
                break;
            }
        }
        poolcardsElement.removeChild(poolcardsElement.lastChild);
    }
    poolCardList = createNormalCard(MIN_CARD_NUM_IN_POOL, CARD_HD_IN_POOL, poolcardsElement);
    listenNormalCard(poolcardsElement, INITIAL_CARDBACK_NUM);
    bindPoolCard(INITIAL_CARDBACK_NUM);

}

//Swap card between pool container and your container.
function swapCards(myCard, poolCard) {
    poolCardName = poolCard.style.backgroundImage.slice(9, -6);
    myCardName = myCard.style.backgroundImage.slice(9, -6);
    console.log('@我方 使用[' + myCardName + '] 换取[' + poolCardName + ']');
    poolCardList = deleteCard(poolCardList, poolCardName);
    poolCardList.push(myCardName);
    for (let i = 0; i < myNormalCardList.length; i++) {
        if (myNormalCardList[i] == myCardName) {
            myNormalCardList[i] = poolCardName;
            break;
        }
    }
    var poolcardsElement = document.getElementById('poolcards');
    var mycardsElement = document.getElementById('mycards');
    var temp = myCard.style.backgroundImage;
    myCard.style.backgroundImage = poolCard.style.backgroundImage
    poolCard.style.backgroundImage = temp;
    listenNormalCard(poolcardsElement, INITIAL_CARDBACK_NUM);
    bindPoolCard(INITIAL_CARDBACK_NUM);
    listenNormalCard(mycardsElement);
    bindNormalCard(mycardsElement);
}

//Check whether it is need to swap card or not.
function checkSeason() {
    var poolcardsElement = document.getElementById('poolcards');
    var mycardsElement = document.getElementById('mycards');
    for (let i = 0; i < mycardsElement.childNodes.length; i++) {
        var myCardName = mycardsElement.childNodes[i].style.backgroundImage.slice(9, -6);
        for (let j = INITIAL_CARDBACK_NUM; j < poolcardsElement.childNodes.length; j++) {
            var poolCardName = poolcardsElement.childNodes[j].style.backgroundImage.slice(9, -6);
            if (normalCardList.get(myCardName)[2] == normalCardList.get(poolCardName)[2]) {
                return true;
            }
        }
    }
    return false;
}

//Add click EventListener to cards in pool container.
function bindPoolCard(st) {
    var poolcardsElement = document.getElementById('poolcards');
    var mycardsElement = document.getElementById('mycards');
    for (let i = st; i < poolcardsElement.childNodes.length; i++) {
        poolcardsElement.childNodes[i].addEventListener('click', function () {
            if (this.classList.contains('cardshadow')) {
                this.classList.remove('cardshadow');
                for (let j = 0; j < mycardsElement.childNodes.length; j++) {
                    if (mycardsElement.childNodes[j].classList.contains('cardshadow')) {
                        mycardsElement.childNodes[j].classList.remove('cardshadow');
                        var poolCardName = this.style.backgroundImage.slice(9, -6);
                        var myCardName = mycardsElement.childNodes[j].style.backgroundImage.slice(9, -6);
                        myOwnedCardList.push(myCardName, poolCardName);
                        poolCardList = deleteCard(poolCardList, poolCardName);
                        myNormalCardList = deleteCard(myNormalCardList, myCardName);
                        console.log('我方 消耗[' + myCardName + ']' + ' 入手[' + poolCardName + ']');
                        console.log('我方 已拥有的卡牌 ' + myOwnedCardList + '\n');
                        for (let pos = 2; pos >= 1; pos--) {
                            for (let k = 0; k < specialcard.childNodes.length; k++) {
                                var specialCardName = specialcard.childNodes[k].style.backgroundImage.slice(9, -6);
                                if (specialCardName.split('·')[0] == (pos == 1 ? poolCardName : myCardName)) {
                                    myOwnedCardList[myOwnedCardList.length - pos] = specialCardName;
                                    console.log('我方 触发特殊牌[' + specialCardName + ']');
                                    console.log('我方 已拥有的卡牌 ' + myOwnedCardList + '\n');
                                    specialcard.removeChild(specialcard.childNodes[k]);
                                    for (let index = 0; index < mySpecialCardList.length; index++) {
                                        if (mySpecialCardList[index][0] == specialCardName) {
                                            mySpecialCardList[index][1] = true;
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        transfer([this, mycardsElement.childNodes[j]], myboard, mySpecialCardList);
                        reflowPoolCards();
                        reflowNormalCards(mycardsElement.childNodes);
                        bindNormalCard(mycardsElement);
                        break;
                    }
                }
                for (let k = INITIAL_CARDBACK_NUM; k < poolcardsElement.childNodes.length; k++) {
                    if (poolcardsElement.childNodes[k].classList.contains('cardshadow')) {
                        poolcardsElement.childNodes[k].classList.remove('cardshadow');
                    }
                }
                var dfn = checkComb(myOwnedCardList);
                setScore(myscore, myCurrentScore);
                setTimeout("simulate()", 2000 + 2000 * dfn);
                abandonCard(myNormalCardList, mycardsElement);
            }
        }, true)
    }
}

//Transfer card from container to board.
function transfer(elements, board, specialCardList) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.top = 0;
        elements[i].style.left = 0;
        elements[i].style.transform = 'rotate(' + getRandom(22.5) * (i & 1 ? -1 : 1) + 'deg)';
        elements[i].style.zIndex = board.childNodes.length + i + 1;
        elements[i].onmouseover = null;
        elements[i].onmouseout = null;
        if (specialCardList != undefined) {
            for (let j = 0; j < specialCardList.length; j++) {
                if (specialCardList[j][0].split('·')[0] == elements[i].style.backgroundImage.slice(9, -6)) {
                    elements[i].style.backgroundImage = 'url(img/' + specialCardList[j][0] + '.jpg)';
                    break;
                }
            }
        }
        board.appendChild(elements[i]);
    }
}

//Reflow all the cards in pool container.
function reflowPoolCards() {
    var poolcardsElement = document.getElementById('poolcards');
    var mycardsElement = document.getElementById('mycards');
    for (var i = INITIAL_CARDBACK_NUM, l = CARD_HD_IN_POOL; i < poolcardsElement.childNodes.length; i++ , l += CARD_HD_IN_POOL) {
        poolcardsElement.childNodes[i].style.left = l + '%';
        poolcardsElement.childNodes[i].style.bottom = (i & 1) + '%';
    }
    var index;
    while (true) {
        index = getRandom(TOTAL_NORMAL_CARD);
        if (!visitedNormalCardList[index][1]) {
            visitedNormalCardList[index][1] = true;
            poolCardList.push(visitedNormalCardList[index][0]);
            break;
        }
    }
    var card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = 'url(img/' + visitedNormalCardList[index][0] + '.jpg)';
    card.style.left = l + '%';
    card.style.bottom = (i & 1) + '%';
    card.style.zIndex = poolcardsElement.childNodes[i - 1].style.zIndex - 1;
    poolcardsElement.appendChild(card);
    listenNormalCard(poolcardsElement, i);
    bindPoolCard(i);
    bindNormalCard(mycardsElement);
}

//Reflow all the cards in your container.
function reflowNormalCards(cards) {
    for (let i = 0, l = 0; i < cards.length; i++ , l += INITIAL_CARD_HD) {
        cards[i].style.left = l + '%';
        cards[i].style.bottom = (i & 1) + '%';
    }
}

//Hide second stage and show third stage.
function showOverview() {
    var controllerElements = document.getElementsByClassName('controller');
    for (let i = 0; i < controllerElements.length; i++) {
        controllerElements[i].style.display = 'none';
    }
    document.getElementById('infotitle').innerHTML = '';
    document.getElementById('infobody').innerHTML = '';
    document.getElementById('viewportbody').style.display = 'block';
    document.getElementById('viewporthead').style.display = 'block';
    document.getElementById('rightbox').style.display = 'block';
}

//Get random number among [0, maxn-1].
function getRandom(maxn) {
    return Math.floor(Math.random() * maxn);
}

function simulate() {
    var check = true;
    var deletePoolCardName;
    var deleteYourCardName;
    var poolcardsElement = document.getElementById('poolcards');
    var yourcardsElement = document.getElementById('yourcards');
    for (let i = 0; (i < yourNormalCardList.length) && check; i++) {
        var yourCardSeason = normalCardList.get(yourNormalCardList[i])[2];
        for (let j = 0; (j < poolCardList.length) && check; j++) {
            var poolCardSeason = normalCardList.get(poolCardList[j])[2];
            if (yourCardSeason == poolCardSeason) {
                check = false;
                deleteYourCardName = yourNormalCardList[i];
                deletePoolCardName = poolCardList[j];
            }
        }
    }
    if (!check) {
        yourNormalCardList = deleteCard(yourNormalCardList, deleteYourCardName);
        yourOwnedCardList.push(deleteYourCardName, deletePoolCardName);
        for (let i = 0; i < poolcardsElement.childNodes.length; i++) {
            var poolCardName = poolcardsElement.childNodes[i].style.backgroundImage.slice(9, -6);
            if (poolCardName == deletePoolCardName) {
                poolcardsElement.removeChild(poolcardsElement.childNodes[i]);
                poolCardList = deleteCard(poolCardList, poolCardName);
                var yourCard = document.createElement('div');
                yourCard.classList.add('card');
                yourCard.style.backgroundImage = 'url(img/' + deleteYourCardName + '.jpg)';
                var poolCard = document.createElement('div');
                poolCard.classList.add('card');
                poolCard.style.backgroundImage = 'url(img/' + deletePoolCardName + '.jpg)';
                console.log('对方 消耗[' + deleteYourCardName + ']' + ' 入手[' + deletePoolCardName + ']');
                console.log('对方 已拥有的卡牌 ' + yourOwnedCardList + '\n');
                transfer([poolCard, yourCard], yourboard);
                reflowPoolCards();
                yourcardsElement.removeChild(yourcardsElement.childNodes[0]);
                reflowNormalCards(yourcardsElement.childNodes);
                break;
            }
        }
        var dfn = checkComb(yourOwnedCardList);
        setScore(yourscore, yourCurrentScore);
        if (!yourNormalCardList.length) {
            setTimeout("alertResult()", 2000 + 2000 * dfn);
        }
    }
    else {
        if (poolcardsElement.childNodes.length >= MAX_CARD_NUM_IN_POOL + INITIAL_CARDBACK_NUM) {
            shuffleDeck();
            setTimeout("simulate()", 1600);
            return;
        }
        reflowPoolCards();
        var yourCardName = yourNormalCardList[0];
        var poolCardName = poolCardList.pop();
        console.log('@对方 使用[' + yourCardName + '] 换取[' + poolCardName + ']');
        yourNormalCardList = deleteCard(yourNormalCardList, yourCardName);
        yourNormalCardList.push(poolCardName);
        poolCardList.push(yourCardName);
        poolcardsElement.lastChild.style.backgroundImage = 'url(img/' + yourCardName + '.jpg)';
        listenNormalCard(poolcardsElement, INITIAL_CARDBACK_NUM);
        bindPoolCard(INITIAL_CARDBACK_NUM);
        setTimeout("simulate()", 1600);
    }
}

function deleteCard(cardList, cardName) {
    var cards = [];
    for (let i = 0; i < cardList.length; i++) {
        if (cardList[i] != cardName) {
            cards.push(cardList[i]);
        }
    }
    return cards;
}

function alertResult() {
    setDisplay(alertbox, 'block');
    transform(alertbox, 'hide', 'show');
    broadcasttext.innerHTML = '点击任意按键退出牌局';
    if (myCurrentScore > yourCurrentScore) {
        broadcastimage.innerHTML = '胜利';
        broadcastimage.classList.add('winner');
    }
    else {
        broadcastimage.innerHTML = '败北';
        broadcastimage.classList.add('loser');
    }
    window.onclick = () => {
        window.location.reload();
    }
}