var visitedNormalCard = [];
var poolCardList = [];
var myNormalCardList = [];
var mySpecialCardList = [];
var check = false;

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
    document.getElementById('viewporttext').innerHTML = '我方珍稀牌&nbsp;&gt;&gt;&gt;';
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < viewportcontainerElement.childNodes.length; i++) {
        viewportcontainerElement.childNodes[i].style.display = 'inline-block';
    }
    setRecommendedComb('none');
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
    if (!check) {
        ownedcard.innerHTML += '&nbsp;&gt;';
        check = true;
    }
    if (completedcomb.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        completedcomb.innerHTML = '已完成的组对';
        this.innerHTML += '&nbsp;&gt;';
    }
    else if (recommendedcomb.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        recommendedcomb.innerHTML = '查看推荐组对';
        this.innerHTML += '&nbsp;&gt;';
    }
    setRecommendedComb('none');
}

completedcomb.onclick = function () {
    if (ownedcard.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        ownedcard.innerHTML = '已拥有的卡牌';
        this.innerHTML += '&nbsp;&gt;';
    }
    else if (recommendedcomb.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        recommendedcomb.innerHTML = '查看推荐组对';
        this.innerHTML += '&nbsp;&gt;';
    }
    setRecommendedComb('none');
}

recommendedcomb.onclick = function () {
    if (ownedcard.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        ownedcard.innerHTML = '已拥有的卡牌';
        this.innerHTML += '&nbsp;&gt;';
    }
    else if (completedcomb.innerHTML.indexOf('&nbsp;&gt;') != -1) {
        completedcomb.innerHTML = '已完成的组对';
        this.innerHTML += '&nbsp;&gt;';
    }
    setRecommendedComb('block');
}

viewportback.onclick = function () {
    document.getElementById('viewporthead').style.display = 'none';
    document.getElementById('viewportbody').style.display = 'none';
    document.getElementById('leftbox').style.display = 'none';
    init();
}

function start() {
    init();
    constructVisitedNormalCard();
    saveMySpecialCard();
    showMySpecialCard();
    listenMySpecialCard();
    createCardBack(INITIAL_CARDBACK_NUM, INITIAL_CARDBACK_HD, document.getElementById('poolcards'));
    poolCardList = createNormalCard(MIN_CARD_NUM_IN_POOL, CARD_HD_IN_POOL, document.getElementById('poolcards'));
    createCardBack(INITIAL_CARD_NUM, INITIAL_CARD_HD, document.getElementById('yourcards'));
    myNormalCardList = createNormalCard(INITIAL_CARD_NUM, INITIAL_CARD_HD, document.getElementById('mycards'));
    bindSeason();
    createRecommendedComb();
    createRecommendedCard();
    listenNormalCard();
}

function init() {
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

function constructVisitedNormalCard() {
    for (let key of normalCardList.entries()) {
        visitedNormalCard.push([key[0], false]);
    }
}

function saveMySpecialCard() {
    var cardcontainerElement = document.getElementById('cardcontainer');
    for (let i = 0; i < cardcontainerElement.childNodes.length; i++) {
        if (cardcontainerElement.childNodes[i].classList.contains('scanned')) {
            var name = cardcontainerElement.childNodes[i].style.backgroundImage.slice(9, -6);
            mySpecialCardList.push(name);
        }
    }
}

function showMySpecialCard() {
    for (let i = 0; i < mySpecialCardList.length; i++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = 'url(img/' + mySpecialCardList[i] + '.jpg)';
        card.style.transform = 'rotate(' + getRandom(45) * (i & 1 ? -1 : 1) + 'deg)';
        specialcard.appendChild(card);
    }
}

function listenMySpecialCard() {
    var previewboxElement = document.getElementById('previewbox');
    var descriptiontextElements = document.getElementsByClassName('descriptiontext');
    for (let i = 0; i < mySpecialCardList.length; i++) {
        var card = document.createElement('div');
        card.classList.add('scanned');
        card.style.backgroundImage = 'url(img/' + mySpecialCardList[i] + '.jpg)';
        var viewportcontainerElement = document.getElementById('viewportcontainer');
        viewportcontainerElement.appendChild(card);

        card.addEventListener('mouseover', function () {
            previewboxElement.style.backgroundImage = this.style.backgroundImage;
            descriptiontextElements[0].innerHTML = mySpecialCardList[i].split('·')[0] + '&#9733' + ' ' + specialCardList.get(mySpecialCardList[i])[0] + '分' + '<br>' + '<hr>';
            descriptiontextElements[1].innerHTML = mySpecialCardList[i] + '<br>' + specialCardList.get(mySpecialCardList[i])[1] + '<br>';
            descriptiontextElements[2].innerHTML = specialCardList.get(mySpecialCardList[i])[2];
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
        cardBack.style.zIndex = num - i - 1;
        parent.appendChild(cardBack);
    }
}

function createNormalCard(num, hd, parent) {
    var cards = [];
    while (cards.length < num) {
        let index = getRandom(TOTAL_NORMAL_CARD);
        if (!visitedNormalCard[index][1]) {
            visitedNormalCard[index][1] = true;
            cards.push(index);
        }
    }
    for (let i = 0; i < num; i++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = 'url(img/' + visitedNormalCard[cards[i]][0] + '.jpg)';
        card.style.left = hd * (i + (hd == CARD_HD_IN_POOL)) + '%';
        card.style.bottom = (i & 1) + '%';
        card.style.zIndex = num - i - 1;
        parent.appendChild(card);
    }
    return cards;
}

function listenNormalCard() {
    var infotitleElement = document.getElementById('infotitle');
    var infobodyElement = document.getElementById('infobody');
    var poolcardsElement = document.getElementById('poolcards');
    var mycardsElement = document.getElementById('mycards');
    listen(poolcardsElement, INITIAL_CARDBACK_NUM);
    listen(mycardsElement, 0);
    function listen(element, st) {
        for (let j = st; j < element.childNodes.length; j++) {
            let cardName = element.childNodes[j].style.backgroundImage.slice(9, -6);
            element.childNodes[j].addEventListener('mouseover', function () {
                infotitleElement.innerHTML = cardName + '&nbsp;&nbsp;&nbsp;&nbsp;' + '2分' + '<hr>';
                var str = '<br>' + '可形成组合的卡牌：' + '<br>';
                for (let i = 0; i < recommendedCardList.get(cardName).length; i++) {
                    if (recommendedCardList.get(cardName)[i] != cardName) {
                        str += recommendedCardList.get(cardName)[i]+'、';
                    }
                }
                str = str.substring(0,str.length-1);
                infobodyElement.innerHTML = str;
                transform(infotitleElement, 'hide', 'show');
                transform(infobodyElement, 'hide', 'show');
            }, true)
            element.childNodes[j].addEventListener('mouseout', function () {
                transform(infotitleElement, 'show', 'hide');
                transform(infobodyElement, 'show', 'hide');
            }, true)
        }
    }
}

function bindSeason() {
    var mycardsElement = document.getElementById('mycards');
    for (let i = 0; i < mycardsElement.childNodes.length; i++) {
        mycardsElement.childNodes[i].addEventListener('click', function () {
            var poolcardsElement = document.getElementById('poolcards');
            for (let j = INITIAL_CARDBACK_NUM; j < poolcardsElement.childNodes.length; j++) {
                if (poolcardsElement.childNodes[j].classList.contains('cardshadow')) {
                    poolcardsElement.childNodes[j].classList.remove('cardshadow');
                }
            }
            for (let i = 0; i < mycardsElement.childNodes.length; i++) {
                if (mycardsElement.childNodes[i].classList.contains('cardshadow')) {
                    mycardsElement.childNodes[i].style.top = '';
                    mycardsElement.childNodes[i].classList.remove('cardshadow');
                    if (this == mycardsElement.childNodes[i])
                        return;
                }
            }
            mycardsElement.childNodes[i].style.top = '-30%';
            mycardsElement.childNodes[i].classList.add('cardshadow');
            var myCardName = mycardsElement.childNodes[i].style.backgroundImage.slice(9, -6);
            for (let j = INITIAL_CARDBACK_NUM; j < poolcardsElement.childNodes.length; j++) {
                var poolCardName = poolcardsElement.childNodes[j].style.backgroundImage.slice(9, -6);
                if (normalCardList.get(myCardName)[2] == normalCardList.get(poolCardName)[2]) {
                    poolcardsElement.childNodes[j].classList.add('cardshadow');
                }
            }
        }, true)
    }
}

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

function setRecommendedComb(display) {
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    for (let i = 0; i < viewportcontainerElement.childNodes.length; i++) {
        if (viewportcontainerElement.childNodes[i].classList.contains('combpiece')) {
            viewportcontainerElement.childNodes[i].style.display = display;
        }
    }
}

function getRandom(maxn) {
    return Math.floor(Math.random() * maxn);
}
