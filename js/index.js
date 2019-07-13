CEILING = 15;
TOTAL_SPECIAL_CARD = 44;

specialCardList =
    [
        ['4', '风晴雪·凤羲', '好向寒节报花信，<br>春风一脉动幽都。', '技能效果一：<br>百里屠苏的分数增加15分'],
        ['4', '方兰生·浮灯', '六艺四书全抛却，<br>一身尽染素心香。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能'],
        ['4', '阿阮·神女', '云垂水镜参差影，<br>十二峰头月欲西。', '技能效果一：<br>露草流萤的分数增加15分'],
        ['4', '沈曦·魔化', '稚童新衫犹未裁，<br>一点红痕一世哀。', '技能效果一：<br>随机翻开对手手牌两张'],
        ['4', '巽芳·寂桐', '妾心声声唤情郎，<br>天涯处处皆苍茫。', '技能效果一：<br>若欧阳少恭在公共卡池中，则下一回合一定出现欧阳少恭'],
        ['4', '襄铃·泉边掬影', '谁家女儿娇，<br>垂发尚年少。<br>树下抱香眠，<br>泉边掬影笑。', '技能效果一：<br>随机翻开对手手牌一张 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色'],
        ['4', '乐无异·捐毒', '长安年少重游侠，<br>抱酒弹铗杏花阴。', '技能效果一：<br>复制对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['4', '谢衣·初七', '霜刃初试驱长夜，<br>破云开天相决绝。', '技能效果一：<br>烈山遗族的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['4', '禺期·无名', '贤者无名入神识，<br>一片丹心报苍生。', '技能效果一：<br>增加昭明、古剑晗光、无名之剑的出现概率 <br><br>技能效果二：<br>自身能形成的组合每个增加10分'],
        ['4', '悭臾·水虺', '榣山水湄遇长琴，<br>通天彻地为知音。', '技能效果一：<br>自身能形成的组合每个增加10分 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['4', '红玉·道服', '霜雪凝精神，<br>桃花铸肌骨。<br>还报一寸心，<br>愿同尘与土。', '技能效果一：<br>复制对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['4', '尹千觞·巫咸', '漫举觥筹殷殷劝，<br>石火光隙寄此身。', '技能效果一：<br>若风晴雪在公共卡池中，则下回合一定出现风晴雪 <br><br>技能效果二：<br>禁用对方任意一张《古剑奇谭一》珍稀牌的技能'],
        ['4', '闻人羽·闺秀', '塞雪连城堕婆娑，<br>云雕怒马走冰河。', '技能效果一：<br>增加《古剑奇谭二》主要角色出现的概率'],
        ['4', '欧阳少恭·蓬莱', '偏有漏长惊永夜，<br>梦魂又觉第几生。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>芳华如梦的分数增加20分'],
        ['4', '清和真人·温留', '赤血丹心照夙昔，<br>殊途与归执道心。', '技能效果一：<br>禁止夏夷则珍稀牌的技能 <br><br>技能效果二：<br>温茶相待的分数增加30分'],
        ['4', '夏夷则·太华', '江山倦夜眠孤客，<br>红堕沾衣冷血痕。', '技能效果一：<br>蓝衫偃师记的分数增加20分'],
        ['4', '百里屠苏·天墉', '许向长空倾碧血，<br>由他业火寸心摧。', '技能效果一：<br>古剑焚寂的分数增加15分 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色'],
        ['4', '沈夜·紫微', '天命难解此中局，<br>神血护佑心魔曲。', '技能效果一：<br>下一回合一定出现一个流月城角色 <br><br>技能效果二：<br>随机翻开对手手牌两张'],
        ['4', '陵越·掌门', '任侠为道守仙门，<br>见素抱朴未忘尘。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['4', '华月·魔化', '戾天狂歌琴声啸，<br>朔雪为刃止喧嚣。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['6', '风晴雪·绵羊', '寿无金石固，<br>随时爱景光。<br>与君一执手，<br>衣袖十年香。', '技能效果一：<br>若焦炭在公共卡池中，则下回合一定出现焦炭 <br><br>技能效果二：<br>厨房功夫的分数增加20分'],
        ['6', '方兰生·蓝鲲', '庭中生嘉树，<br>华叶自飘摇。<br>温然发秀质，<br>馥兰映琼瑶。', '技能效果一：<br>永相随的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['6', '阿阮·山鬼', '崔嵬未起逐风舞，<br>羲和停云坠玉露。', '技能效果一：<br>若夏夷则在公共卡池中，则下回合一定出现夏夷则 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['6', '乐无异·偃师', '金刚力士舞灵木，<br>墨意非攻定乾坤。', '技能效果一：<br>随机翻开对手手牌三张 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['6', '襄铃·熊猫', '笑里秋千轻自语，<br>背人斗草弄晴丝。', '技能效果一：<br>黑衣少侠传的分数增加30分 <br><br>技能效果二：<br>下一回合一定出现一个《古剑奇谭一》的主要角色'],
        ['6', '红玉·兔子', '昔日匣中三尺水，<br>曾与明月斗青霜。', '技能效果一：<br>剑舞红袖的分数增加30分 <br><br>技能效果二：<br>禁用对方任意一张珍稀牌的技能'],
        ['6', '尹千觞·大狗', '久把江湖宿，<br>落拓年复年。<br>唤醪濯尘骨，<br>钓月伴酒仙。', '技能效果一：<br>醉梦江湖的分数增加20分 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['6', '闻人羽·天罡', '天罡夜枕绿沉枪，<br>敌血尚温金甲凉。', '技能效果一：<br>蓝衫偃师记的分数增加30分 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['6', '夏夷则·鲛人', '沧海遗珠鲛人泪，<br>易骨托生帝王脉。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>随机翻开对手手牌两张'],
        ['6', '百里屠苏·黑猫', '眼底无故人，<br>世事冷如铁。<br>谁与长相约，<br>眉间刺新血。', '技能效果一：<br>若古剑焚寂在公共卡池中，则下回合一定出现古剑焚寂 <br><br>技能效果二：<br>桃花幻梦的分数增加30分'],
        ['4', '北洛·冕服', '阵云循涌炎风震，<br>清辉灼烁万物生。', '技能效果一：<br>打出后给自身增加10分'],
        ['4', '云无月·华裳', '清眸剪沧海，<br>罗袂舞桑田。<br>红尘本无意，<br>重逢竟有期。', '技能效果一：<br>随机翻开对手手牌一张'],
        ['4', '岑缨·劲装', '江天绘幅远无垠，<br>一页春秋一叶舟。', '技能效果一：<br>一见喜的分数增加15分'],
        ['4', '姬轩辕·绣春', '乾坤承转昔年事，<br>余音茫茫赠熏风。', '技能效果一：<br>复制对方任意一张珍稀牌的技能'],
        ['6', '北洛·辟邪', '微茫窥无尽，<br>垂辉映中天。<br>杂音没金足，<br>狂啸裂穹宇。', '技能效果一：<br>首山梦时书的分数增加30分'],
        ['6', '云无月·魇魅', '华翎一展云蔽月，<br>敢以长歌魇鬼神。', '技能效果一：<br>禁用对方任意一张珍稀牌的技能 <br><br>技能效果二：<br>北洛的分数增加15分'],
        ['6', '岑缨·菡萏', '彤霞然昙静，<br>云渊展鸿图。<br>少年相谈笑，<br>辫发垂肩行。', '技能效果一：<br>下一回合一定出现一个《古剑奇谭三》的主要角色 <br><br>技能效果二：<br>随机翻开对手手牌两张'],
        ['6', '姬轩辕·玄鹿', '天意多无据，<br>人间寄多情。<br>岁华逢故交，<br>崆峒惜旦暮。', '技能效果一：<br>下一回合一定出现一个《古剑奇谭三》的主要角色 <br><br>技能效果二：<br>眠霜卧雪的分数增加30分'],
        ['4', '缙云·卸甲', '玄甲浸苍烟，<br>皓首远人间。<br>十载常独坐，<br>半身是离绝。', '技能效果一：<br>以玉为戈的分数增加30分 <br><br>技能效果二：<br>随机翻开对手手牌一张'],
        ['4', '巫炤·吞恨', '寒灯一芯尽，<br>角楼囚霜星。<br>独站群崖底，<br>风物皆无情。', '技能效果一：<br>西陵曲的分数增加30分 <br><br>技能效果二：<br>禁用对方任意一张珍稀牌的技能'],
        ['4', '司危·嫣然', '垂髫粉腮犹带笑，<br>不见城深春易老。', '技能效果一：<br>下一回合一定出现一个西陵角色 <br><br>技能效果二：<br>禁用对方任意一张《古剑奇谭三》珍稀牌的技能'],
        ['4', '玄戈&霓商·流光', '朔风凛凛掠尘去，<br>故人凭栏晓天寒。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['4', '嫘祖·梦中人', '昔年共饮一枝春，<br>今朝唯余梦中人。', '技能效果一：<br>交换对方任意一张牌 <br><br>技能效果二：<br>被交换后卡牌技能无效'],
        ['4', '刘兄·比木', '寒渊梦远几时真，<br>但将笔砚换裙钗。', '技能效果一：<br>玳之梦的分数增加30分 <br><br>技能效果二：<br>若巫之国在公共卡池中，则下回合一定出现巫之国'],
    ]

window.onload = function () {
    var described = document.getElementsByClassName('descriptiontext');
    var selected = document.getElementsByClassName('selected');
    var counting = document.getElementById('ceilingcount');
    var startBtn = document.getElementById('startbtn');
    var configuratorContent = document.getElementsByClassName('configurator');

    var isCeiling = function () {
        return counting.innerHTML == CEILING;
    }

    startBtn.onclick = function () {
        for (let i = 0; i < configuratorContent.length; i++) {
            configuratorContent[i].style.display = 'none';
        }
    }

    for (let i = 0; i < CEILING; i++) {
        var selectedCard = document.createElement('div');
        selectedCard.classList.add('selected');
        cardcontainer.appendChild(selectedCard);
    }

    for (let i = 0; i < TOTAL_SPECIAL_CARD; i++) {
        var card = document.createElement('div');
        card.style.backgroundImage = 'url(' + "img/" + specialCardList[i][1] + ".jpg" + ')';
        card.classList.add('scanned');
        cardrepository.appendChild(card);

        card.onmouseover = function () {
            previewbox.style.backgroundImage = this.style.backgroundImage;
            var cardName = specialCardList[i][1];
            var nameArr = cardName.split('·');
            described[0].innerHTML = nameArr[0] + '&#9733' + ' ' + specialCardList[i][0] + '分' + '<br>' + '<hr>';
            described[1].innerHTML = specialCardList[i][1] + '<br>' + specialCardList[i][2] + '<br>';
            described[2].innerHTML = specialCardList[i][3];
        }

        card.onmouseout = function () {
            previewbox.style.backgroundImage = '';
            described[0].innerHTML = '';
            described[1].innerHTML = '';
            described[2].innerHTML = '';
        }

        card.onclick = function () {
            if (!isCeiling() && this.parentElement.id == 'cardrepository') {
                cardrepository.removeChild(this);
                cardcontainer.replaceChild(this, selected[0]);
            }
            else if (this.parentElement.id == 'cardcontainer') {
                cardcontainer.removeChild(this);
                var selectedCard = document.createElement('div');
                selectedCard.classList.add('selected');
                cardcontainer.appendChild(selectedCard, this);
                cardrepository.appendChild(this);
            }
            counting.innerHTML = TOTAL_SPECIAL_CARD - cardrepository.childNodes.length;
            counting.style.color = isCeiling() ? 'red' : 'rgb(145, 145, 120)';
        }
    }
}