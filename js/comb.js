var recommendedCardList = new Map();

var combList = new Map([
    [['风晴雪', '百里屠苏'], ['3', '与子成说', false]],
    [['百里屠苏', '悭臾'], ['3', '乘龙归', false]],
    [['百里屠苏', '欧阳少恭'], ['3', '琴心剑魄', false]],
    [['百里屠苏', '天墉城'], ['3', '云涌昆仑', false]],
    [['黑龙鳞片', '百里屠苏'], ['3', '故友赠礼', false]],
    [['百里屠苏', '古剑焚寂'], ['3', '焚焰血戮', false]],
    [['风晴雪', '尹千觞'], ['4', '陌相逢', false]],
    [['风晴雪', '幽都'], ['4', '幽都灵女', false]],
    [['风晴雪', '天鹿城'], ['4', '荒魂述', false]],
    [['欧阳少恭', '方兰生'], ['4', '琴川友', false]],
    [['琴川', '方兰生'], ['4', '望乡', false]],
    [['方兰生', '青玉司南佩'], ['4', '永相随', false]],
    [['百胜刀', '方兰生'], ['4', '无情客', false]],
    [['昭明', '阿阮'], ['4', '芳草心', false]],
    [['露草', '阿阮'], ['4', '共株生', false]],
    [['沈曦', '沈夜'], ['4', '三日遥', false]],
    [['流月城', '沈曦'], ['4', '月中生', false]],
    [['兔子抱枕', '沈曦'], ['4', '伴长眠', false]],
    [['巽芳', '欧阳少恭'], ['4', '仙山眷侣', false]],
    [['巽芳', '蓬莱'], ['4', '蓬莱公主', false]],
    [['紫榕林', '襄铃'], ['4', '故林栖', false]],
    [['襄铃', '青丘尘中记'], ['4', '青丘有狐', false]],
    [['襄铃', '红叶湖'], ['4', '清馨戏碟', false]],
    [['谢衣', '乐无异'], ['4', '春风雨', false]],
    [['长安', '乐无异'], ['4', '玉京游', false]],
    [['馋鸡', '乐无异'], ['4', '沧海飞尘', false]],
    [['谢衣', '沈夜'], ['4', '孤月寒灯', false]],
    [['流月城', '谢衣'], ['4', '胡不归', false]],
    [['谢衣', '通天之器'], ['4', '空留忆', false]],
    [['谢衣', '忘川'], ['4', '别破军', false]],
    [['谢衣', '静水湖'], ['4', '重山隐', false]],
    [['禺期', '红玉'], ['4', '古剑剑灵', false]],
    [['禺期', '昭明'], ['4', '铸剑仙师', false]],
    [['禺期', '无名之剑'], ['4', '历劫重生', false]],
    [['禺期', '古剑晗光'], ['4', '未成之剑', false]],
    [['悭臾', '欧阳少恭'], ['4', '榣山遗韵', false]],
    [['榣山', '悭臾'], ['4', '水虺醉琴', false]],
    [['黑龙鳞片', '悭臾'], ['4', '应龙信物', false]],
    [['悭臾', '赤水'], ['4', '空徊', false]],
    [['天墉城', '红玉'], ['4', '千古剑灵', false]],
    [['古剑红玉', '红玉'], ['4', '剑舞红袖', false]],
    [['安陆', '红玉'], ['4', '明月青霜', false]],
    [['尹千觞', '欧阳少恭'], ['4', '醉梦江湖', false]],
    [['尹千觞', '幽都'], ['4', '幽都巫咸', false]],
    [['欧阳少恭', '蓬莱'], ['4', '栖身之所', false]],
    [['欧阳少恭', '青玉坛'], ['4', '丹芷长老', false]],
    [['榣山', '欧阳少恭'], ['4', '故地重回', false]],
    [['欧阳少恭', '凤来'], ['4', '揽琴独照', false]],
    [['欧阳少恭', '梦魂枝'], ['4', '烂柯', false]],
    [['太华山', '清和真人'], ['4', '太华山人', false]],
    [['夏夷则', '清和真人'], ['4', '严师胜父', false]],
    [['夏夷则', '露草'], ['4', '待佳期', false]],
    [['阿翔', '百里屠苏'], ['4', '飞羽凌杀', false]],
    [['华月', '沈夜'], ['4', '护孤城', false]],
    [['流月城', '沈夜'], ['4', '永夜寒沉', false]],
    [['天墉城', '陵越'], ['4', '天墉掌门', false]],
    [['流月城', '华月'], ['4', '月之殇', false]],
    [['华月箜篌', '华月'], ['4', '廉贞曲', false]],
    [['神女墓', '巫山'], ['4', '神女静眠', false]],
    [['北洛', '云无月'], ['4', '静水流深', false]],
    [['缙云', '北洛'], ['4', '昨日影', false]],
    [['玄戈&霓商', '北洛'], ['4', '参商交辉', false]],
    [['天鹿城', '北洛'], ['4', '来日可期', false]],
    [['北洛', '太岁'], ['4', '杀伐之剑', false]],
    [['北洛', '原天柿'], ['4', '得力助手', false]],
    [['云无月', '白梦泽'], ['4', '独歌', false]],
    [['云无月', '梦魂枝'], ['4', '无梦之魇', false]],
    [['鄢陵', '岑缨'], ['4', '鸿雁于飞', false]],
    [['原天柿', '岑缨'], ['4', '一见喜', false]],
    [['画板', '岑缨'], ['4', '澄心若璃', false]],
    [['姬轩辕', '岑缨'], ['4', '吾道不孤', false]],
    [['姬轩辕', '嫘祖'], ['4', '昔年之乐', false]],
    [['姬轩辕', '有熊'], ['4', '轩辕氏', false]],
    [['姬轩辕', '鼎湖'], ['4', '龙去鼎湖', false]],
    [['缙云', '云无月'], ['4', '云本无心', false]],
    [['缙云', '太岁'], ['4', '千锋辟易', false]],
    [['巫炤', '司危'], ['4', '邃古遗幽', false]],
    [['半魂莲', '巫炤'], ['4', '恨生天地', false]],
    [['天鹿城', '玄戈&霓商'], ['4', '星坠', false]],
    [['天鹿', '玄戈&霓商'], ['4', '镇厄', false]],
    [['西陵', '嫘祖'], ['4', '烽烟锁城', false]],
    [['刘兄', '阳平'], ['4', '妙笔退魔', false]],
    [['刘兄', '青丘尘中记'], ['4', '神游狐乡', false]],
    [['天鹿', '天鹿城'], ['4', '却邪', false]],
    [['西陵', '有熊'], ['4', '人世星火', false]],
    [['半魂莲', '巫之国'], ['4', '天星尽摇', false]],
    [['半魂莲', '阳平'], ['4', '黑莲厄', false]],
    [['半魂莲', '无名之地'], ['4', '苏生之罪', false]],
    [['玉梳', '司危'], ['4', '负青丝', false]],
    [['夏夷则', '阿阮'], ['5', '光逐影', false]],
    [['巫山', '阿阮'], ['5', '山鬼', false]],
    [['闻人羽', '乐无异'], ['5', '比肩行', false]],
    [['古剑晗光', '乐无异'], ['5', '家传宝贝', false]],
    [['百草谷', '闻人羽'], ['5', '星海天罡', false]],
    [['夏夷则', '太华山'], ['5', '逸尘', false]],
    [['风晴雪', '焦炭', '谢衣'], ['10', '厨房功夫', false]],
    [['风晴雪', '尹千觞', '幽都'], ['10', '幽夜苍茫', false]],
    [['风晴雪', '百里屠苏', '桃花谷'], ['10', '桃花幻梦', false]],
    [['巫山', '露草', '阿阮'], ['10', '露草流萤', false]],
    [['蓬莱', '巽芳', '欧阳少恭'], ['10', '芳华如梦', false]],
    [['百里屠苏', '红叶湖', '襄铃'], ['10', '尾巴尖儿', false]],
    [['禺期', '古剑晗光', '乐无异'], ['10', '剑主之谊', false]],
    [['金麒麟', '闻人羽', '乐无异'], ['10', '长相忆', false]],
    [['夏夷则', '太华山', '清和真人'], ['10', '温茶相待', false]],
    [['百里屠苏', '陵越', '天墉城'], ['10', '天墉旧事', false]],
    [['昭明', '无名之剑', '古剑晗光'], ['10', '千年一器', false]],
    [['白梦泽', '北洛', '云无月'], ['10', '宿世秋', false]],
    [['巫之国', '北洛', '刘兄'], ['10', '玳之梦', false]],
    [['姬轩辕', '缙云', '有熊'], ['10', '以玉为戈', false]],
    [['姬轩辕', '嫘祖', '赤水'], ['10', '赤水遗珠', false]],
    [['缙云', '白梦泽', '云无月'], ['10', '刺荆心', false]],
    [['司危', '玉梳', '嫘祖'], ['10', '生辰礼', false]],
    [['无名之地', '西陵', '巫之国'], ['10', '巫之血', false]],
    [['夏夷则', '阿阮', '闻人羽', '乐无异'], ['20', '蓝衫偃师记', false]],
    [['巫山', '露草', '阿阮', '神女墓'], ['20', '巫山神女', false]],
    [['谢衣', '沈夜', '沈曦', '华月'], ['20', '烈山遗族', false]],
    [['谢衣', '沈夜', '捐毒', '乐无异'], ['20', '往事浮沙', false]],
    [['昭明', '无名之剑', '古剑晗光', '禺期'], ['20', '天地熔炉', false]],
    [['姬轩辕', '北洛', '云无月', '岑缨'], ['20', '首山梦时书', false]],
    [['姬轩辕', '缙云', '鼎湖', '嫘祖'], ['20', '眠霜卧雪', false]],
    [['姬轩辕', '缙云', '巫炤', '嫘祖'], ['20', '故梦', false]],
    [['西陵', '巫炤', '司危', '嫘祖'], ['20', '西陵曲', false]],
    [['谢衣', '沈夜', '沈曦', '流月城', '华月'], ['40', '红月', false]],
    [['风晴雪', '方兰生', '百里屠苏', '红玉', '尹千觞', '襄铃'], ['60', '黑衣少侠传', false]],
    [['百里屠苏', '原天柿', '阿翔', '北洛', '馋鸡', '乐无异'], ['60', '携宠同行', false]],
    [['天鹿', '昭明', '古剑焚寂', '古剑红玉', '太岁', '无名之剑', '古剑晗光'], ['80', '古剑奇谭', false]]
]);

function reflowRecommendedComb(which) {
    clearChildNodes(viewportcontainer);
    var viewportcontainerElement = document.getElementById('viewportcontainer');
    viewportcontainerElement.style.overflowY = 'scroll';
    for (let [key, value] of which.entries()) {
        var comb = document.createElement('div');
        comb.classList.add('combpiece');
        viewportcontainerElement.appendChild(comb);
        for (let i = 0; i < key.length; i++) {
            var combCard = document.createElement('div');
            combCard.classList.add('combcard');
            combCard.style.left = 10 + i * 3 + '%';
            combCard.style.zIndex = key.length - i - 1;
            combCard.style.backgroundImage = 'url(img/' + key[i] + '.jpg)';
            comb.appendChild(combCard);
        }
        var combName = document.createElement('div');
        combName.classList.add('combname');
        combName.innerHTML = value[1] + '&nbsp;&nbsp;&nbsp;' + value[0] + '分';
        var hr = document.createElement('hr');
        combName.appendChild(hr);
        comb.appendChild(combName);
        var content = '';
        for (let i = 0; i < key.length; i++) {
            var combContent = document.createElement('div');
            combContent.classList.add('combcontent');
            content += (key[i] + (i == key.length - 1 ? '' : '、'));
        }
        combContent.innerHTML = content;
        comb.appendChild(combContent);
    }
}

function createRecommendedCard() {
    for (let key of normalCardList.keys()) {
        var value = [];
        for (let list of combList.keys()) {
            if (list.indexOf(key) != -1) {
                for (let i = 0; i < list.length; i++) {
                    if (value.indexOf(list[i]) == -1) {
                        value.push(list[i]);
                    }
                }
            }
        }
        recommendedCardList.set(key, value);
    }
}

function checkComb(ownedCardList) {
    var cnt = 0;
    if (ownedCardList == myOwnedCardList) {
        myCurrentScore += 4;
    }
    else {
        yourCurrentScore += 4;
    }
    for (let [key, value] of combList.entries()) {
        let check = true;
        for (let i = 0; i < key.length; i++) {
            if (ownedCardList.indexOf(key[i]) == -1) {
                check = false;
                break;
            }
        }
        if (check) {
            if (!value[2]) {
                value[2] = true;
                if (ownedCardList == myOwnedCardList) {
                    myCurrentScore += parseInt(value[0]);
                    myCompletedCombList.set(key, value);
                    console.log('~我方 完成组对[' + value[1] + ']' + ' 获得额外分值' + value[0] + '分');
                    alertComb(key, value, cnt++, '我方');
                }
                else {
                    yourCurrentScore += parseInt(value[0]);
                    yourCompletedCombList.set(key, value);
                    console.log('~对方 完成组对[' + value[1] + ']' + ' 获得额外分值' + value[0] + '分');
                    alertComb(key, value, cnt++, '对方');
                }
            }
        }
    }
    console.log('');
    return cnt;
}

function setScore(element, currentScore) {
    element.innerHTML = currentScore;
}

function alertComb(key, value, dfn, side) {
    setTimeout(() => { setDisplay(alertbox, 'block', key, value, side) }, 0 + 2000 * dfn);
    setTimeout(() => { transform(alertbox, 'hide', 'show'); }, 0 + 2000 * dfn);
    setTimeout(() => { transform(alertbox, 'show', 'hide'); }, 1200 + 2000 * dfn);
    setTimeout(() => { setDisplay(alertbox, 'none', key, value, side) }, 1800 + 2000 * dfn);
}

function setDisplay(element, display, key, value, side) {
    if (display == 'block' && key && value && side) {
        var combSide = document.getElementsByTagName('span')[1];
        var combName = document.getElementsByTagName('span')[2];
        var combScore = document.getElementsByTagName('span')[3];
        combSide.innerHTML = side;
        combName.innerHTML = value[1];
        combScore.innerHTML = value[0];
        var broadcastimageElement = document.getElementById('broadcastimage');
        while (broadcastimageElement.hasChildNodes()) {
            broadcastimageElement.removeChild(broadcastimageElement.lastChild);
        }
        for (let i = 0; i < key.length; i++) {
            var card = document.createElement('div');
            card.classList.add('alertimage');
            card.style.backgroundImage = 'url(img/' + key[i] + '.jpg)';
            broadcastimageElement.appendChild(card);
        }
    }
    element.style.display = display;
}

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}