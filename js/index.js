const CEILING = 15;
const TOTAL_SPECIAL_CARD = 44;
const TOTAL_NORMAL_CARD = 84;
const INITIAL_CARDBACK_NUM = 3;
const INITIAL_CARDBACK_HD = 2;
const INITIAL_CARD_NUM = 10;
const INITIAL_CARD_HD = 8;
const MIN_CARD_NUM_IN_POOL = 8;
const MAX_CARD_NUM_IN_POOL = 10;
const CARD_HD_IN_POOL = 7;
const ZINDEX_BASE = 99;
const ZINDEX_INF = 999;

var specialCardList = new Map(
    [
        ['风晴雪·凤羲', ['4', '好向寒节报花信，<br>春风一脉动幽都。', '技能效果一：<br>百里屠苏的分数增加15分']],
        ['方兰生·浮灯', ['4', '六艺四书全抛却，<br>一身尽染素心香。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能']],
        ['阿阮·神女', ['4', '云垂水镜参差影，<br>十二峰头月欲西。', '技能效果一：<br>露草流萤的分数增加15分']],
        ['沈曦·魔化', ['4', '稚童新衫犹未裁，<br>一点红痕一世哀。', '技能效果一：<br>随机翻开对手手牌两张']],
        ['巽芳·寂桐', ['4', '妾心声声唤情郎，<br>天涯处处皆苍茫。', '技能效果一：<br>若欧阳少恭在公共卡池中，则下一回合一定出现欧阳少恭']],
        ['襄铃·泉边掬影', ['4', '谁家女儿娇，<br>垂发尚年少。<br>树下抱香眠，<br>泉边掬影笑。', '技能效果一：<br>随机翻开对手手牌一张 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色']],
        ['乐无异·捐毒', ['4', '长安年少重游侠，<br>抱酒弹铗杏花阴。', '技能效果一：<br>复制对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['谢衣·初七', ['4', '霜刃初试驱长夜，<br>破云开天相决绝。', '技能效果一：<br>烈山遗族的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['禺期·无名', ['4', '贤者无名入神识，<br>一片丹心报苍生。', '技能效果一：<br>增加昭明、古剑晗光、无名之剑的出现概率 <br><br>技能效果二：<br>自身能形成的组合每个增加10分']],
        ['悭臾·水虺', ['4', '榣山水湄遇长琴，<br>通天彻地为知音。', '技能效果一：<br>自身能形成的组合每个增加10分 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['红玉·道服', ['4', '霜雪凝精神，<br>桃花铸肌骨。<br>还报一寸心，<br>愿同尘与土。', '技能效果一：<br>复制对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['尹千觞·巫咸', ['4', '漫举觥筹殷殷劝，<br>石火光隙寄此身。', '技能效果一：<br>若风晴雪在公共卡池中，则下回合一定出现风晴雪 <br><br>技能效果二：<br>禁用对方任意一张《古剑奇谭一》珍稀牌的技能']],
        ['闻人羽·闺秀', ['4', '塞雪连城堕婆娑，<br>云雕怒马走冰河。', '技能效果一：<br>增加《古剑奇谭二》主要角色出现的概率']],
        ['欧阳少恭·蓬莱', ['4', '偏有漏长惊永夜，<br>梦魂又觉第几生。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>芳华如梦的分数增加20分']],
        ['清和真人·温留', ['4', '赤血丹心照夙昔，<br>殊途与归执道心。', '技能效果一：<br>禁止夏夷则珍稀牌的技能 <br><br>技能效果二：<br>温茶相待的分数增加30分']],
        ['夏夷则·太华', ['4', '江山倦夜眠孤客，<br>红堕沾衣冷血痕。', '技能效果一：<br>蓝衫偃师记的分数增加20分']],
        ['百里屠苏·天墉', ['4', '许向长空倾碧血，<br>由他业火寸心摧。', '技能效果一：<br>古剑焚寂的分数增加15分 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色']],
        ['沈夜·紫微', ['4', '天命难解此中局，<br>神血护佑心魔曲。', '技能效果一：<br>下一回合一定出现一个流月城角色 <br><br>技能效果二：<br>随机翻开对手手牌两张']],
        ['陵越·掌门', ['4', '任侠为道守仙门，<br>见素抱朴未忘尘。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['华月·魔化', ['4', '戾天狂歌琴声啸，<br>朔雪为刃止喧嚣。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['风晴雪·绵羊', ['6', '寿无金石固，<br>随时爱景光。<br>与君一执手，<br>衣袖十年香。', '技能效果一：<br>若焦炭在公共卡池中，则下回合一定出现焦炭 <br><br>技能效果二：<br>厨房功夫的分数增加20分']],
        ['方兰生·蓝鲲', ['6', '庭中生嘉树，<br>华叶自飘摇。<br>温然发秀质，<br>馥兰映琼瑶。', '技能效果一：<br>永相随的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['阿阮·山鬼', ['6', '崔嵬未起逐风舞，<br>羲和停云坠玉露。', '技能效果一：<br>若夏夷则在公共卡池中，则下回合一定出现夏夷则 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['乐无异·偃师', ['6', '金刚力士舞灵木，<br>墨意非攻定乾坤。', '技能效果一：<br>随机翻开对手手牌三张 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['襄铃·熊猫', ['6', '笑里秋千轻自语，<br>背人斗草弄晴丝。', '技能效果一：<br>黑衣少侠传的分数增加30分 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色']],
        ['红玉·兔子', ['6', '昔日匣中三尺水，<br>曾与明月斗青霜。', '技能效果一：<br>剑舞红袖的分数增加30分 <br><br>技能效果二：<br>禁用对方任意一张珍稀牌的技能']],
        ['尹千觞·大狗', ['6', '久把江湖宿，<br>落拓年复年。<br>唤醪濯尘骨，<br>钓月伴酒仙。', '技能效果一：<br>醉梦江湖的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['闻人羽·天罡', ['6', '天罡夜枕绿沉枪，<br>敌血尚温金甲凉。', '技能效果一：<br>蓝衫偃师记的分数增加30分 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['夏夷则·鲛人', ['6', '沧海遗珠鲛人泪，<br>易骨托生帝王脉。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>随机翻开对手手牌两张']],
        ['百里屠苏·黑猫', ['6', '眼底无故人，<br>世事冷如铁。<br>谁与长相约，<br>眉间刺新血。', '技能效果一：<br>若古剑焚寂在公共卡池中，则下回合一定出现古剑焚寂 <br><br>技能效果二：<br>桃花幻梦的分数增加30分']],
        ['北洛·冕服', ['4', '阵云循涌炎风震，<br>清辉灼烁万物生。', '技能效果一：<br>打出后给自身增加10分']],
        ['云无月·华裳', ['4', '清眸剪沧海，<br>罗袂舞桑田。<br>红尘本无意，<br>重逢竟有期。', '技能效果一：<br>随机翻开对手手牌一张']],
        ['岑缨·劲装', ['4', '江天绘幅远无垠，<br>一页春秋一叶舟。', '技能效果一：<br>一见喜的分数增加15分']],
        ['姬轩辕·绣春', ['4', '乾坤承转昔年事，<br>余音茫茫赠熏风。', '技能效果一：<br>复制对方任意一张珍稀牌的技能']],
        ['北洛·辟邪', ['6', '微茫窥无尽，<br>垂辉映中天。<br>杂音没金足，<br>狂啸裂穹宇。', '技能效果一：<br>首山梦时书的分数增加30分']],
        ['云无月·魇魅', ['6', '华翎一展云蔽月，<br>敢以长歌魇鬼神。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>北洛的分数增加15分']],
        ['岑缨·菡萏', ['6', '彤霞然昙静，<br>云渊展鸿图。<br>少年相谈笑，<br>辫发垂肩行。', '技能效果一：<br>下一回合一定出现一个《古剑奇谭三》的主要角色 <br><br>技能效果二：<br>随机翻开对手手牌两张']],
        ['姬轩辕·玄鹿', ['6', '天意多无据，<br>人间寄多情。<br>岁华逢故交，<br>崆峒惜旦暮。', '技能效果一：<br>下一回合一定出现一个《古剑奇谭三》的主要角色 <br><br>技能效果二：<br>眠霜卧雪的分数增加30分']],
        ['缙云·卸甲', ['4', '玄甲浸苍烟，<br>皓首远人间。<br>十载常独坐，<br>半身是离绝。', '技能效果一：<br>以玉为戈的分数增加30分 <br><br>技能效果二：<br>随机翻开对手手牌一张']],
        ['巫炤·吞恨', ['4', '寒灯一芯尽，<br>角楼囚霜星。<br>独站群崖底，<br>风物皆无情。', '技能效果一：<br>西陵曲的分数增加30分 <br><br>技能效果二：<br>禁用对方任意一张珍稀牌的技能']],
        ['司危·嫣然', ['4', '垂髫粉腮犹带笑，<br>不见城深春易老。', '技能效果一：<br>下一回合一定出现一个西陵角色 <br><br>技能效果二：<br>禁用对方任意一张《古剑奇谭三》珍稀牌的技能']],
        ['玄戈&霓商·流光', ['4', '朔风凛凛掠尘去，<br>故人凭栏晓天寒。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['嫘祖·梦中人', ['4', '昔年共饮一枝春，<br>今朝唯余梦中人。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效']],
        ['刘兄·比木', ['4', '寒渊梦远几时真，<br>但将笔砚换裙钗。', '技能效果一：<br>玳之梦的分数增加30分 <br><br>技能效果二：<br>若巫之国在公共卡池中，则下回合一定出现巫之国']],
    ]);

window.onload = function () {
    // window.card = [];
    // document.oncontextmenu = new Function("event.returnValue=false");
    // document.onselectstart = new Function("event.returnValue=false");
    createBlankElement();
    listenSpecialCard();
}

function createBlankElement() {
    for (let i = 0; i < CEILING; i++) {
        var blankElement = document.createElement('div');
        blankElement.classList.add('blank');
        cardcontainer.appendChild(blankElement);
    }
}

function listenSpecialCard() {
    var previewboxElement = document.getElementById('previewbox');
    var descriptiontextElements = document.getElementsByClassName('descriptiontext');
    var blankElements = document.getElementsByClassName('blank');
    var countElement = document.getElementsByTagName('span')[0];
    function isCeiling() {
        return countElement.innerHTML == CEILING;
    }
    for (let [key, value] of specialCardList.entries()) {
        var card = document.createElement('div');
        card.style.backgroundImage = 'url(' + "img/" + key + ".jpg" + ')';
        card.classList.add('scanned');
        cardrepository.appendChild(card);

        card.addEventListener('mouseover', function () {
            previewboxElement.style.backgroundImage = this.style.backgroundImage;
            descriptiontextElements[0].innerHTML = key.split('·')[0] + '&#9733' + '&nbsp;' + value[0] + '分' + '<br>' + '<hr>';
            descriptiontextElements[1].innerHTML = key + '<br>' + value[1] + '<br>';
            descriptiontextElements[2].innerHTML = value[2];
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

        card.addEventListener('click', function () {
            var selectedCardName = this.style.backgroundImage.slice(9, -6).split('·')[0];
            if (this.parentElement.id == 'cardrepository') {
                if (isCeiling())
                    return;
                else {
                    if (this.childNodes.length > 0)
                        return;
                    cardrepository.removeChild(this);
                    cardcontainer.replaceChild(this, blankElements[0]);
                    for (let i = 0; i < cardrepository.childNodes.length; i++) {
                        var repositoryCardName = cardrepository.childNodes[i].style.backgroundImage.slice(9, -6).split('·')[0];
                        if (selectedCardName == repositoryCardName) {
                            var ban = document.createElement('div');
                            ban.innerHTML = '已存在<br>相同人物';
                            ban.classList.add('banned');
                            cardrepository.childNodes[i].classList.add('shadow');
                            cardrepository.childNodes[i].appendChild(ban);
                            break;
                        }
                    }
                }
            }
            else if (this.parentElement.id == 'cardcontainer') {
                for (let i = 0; i < cardrepository.childNodes.length; i++) {
                    var repositoryCardName = cardrepository.childNodes[i].style.backgroundImage.slice(9, -6).split('·')[0];
                    if (selectedCardName == repositoryCardName) {
                        cardrepository.childNodes[i].removeChild(cardrepository.childNodes[i].childNodes[0]);
                        cardrepository.childNodes[i].classList.remove('shadow');
                        break;
                    }
                }
                cardcontainer.removeChild(this);
                cardrepository.appendChild(this);
                var blankElement = document.createElement('div');
                blankElement.classList.add('blank');
                cardcontainer.appendChild(blankElement);
            }
            countElement.innerHTML = TOTAL_SPECIAL_CARD - cardrepository.childNodes.length;
            countElement.style.color = isCeiling() ? 'rgb(255, 0, 0)' : 'rgb(145, 145, 120)';
        }, true);
    }
}

function transform(element, classA, classB) {
    element.classList.remove(classA);
    element.classList.add(classB);
}