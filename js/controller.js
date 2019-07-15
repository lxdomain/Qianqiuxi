CARD_FOR_EACH = 10;
TOTAL_NORMAL_CARD = 84;
MIN_POOL_CARDS = 8;
MAX_POOL_CARDS = 10;

var startBtn = document.getElementById('startbtn');
var configuratorContent = document.getElementsByClassName('configurator');
var controllerContent = document.getElementsByClassName('controller');
var poolCards = document.getElementById('poolcards');
var yourCards = document.getElementById('yourcards');
var myCards = document.getElementById('mycards');
var visited = new Array(TOTAL_NORMAL_CARD).fill(0);

normalCardList = [
    ['2', '风晴雪', ' 青丝银栉别样梳，<br>天付婆娑入画图。'],
    ['2', '方兰生', '嫏嬛久觅紫云乡，<br>半枕清风鹤梦长。'],
    ['2', '阿阮', ' 楚梦沉醉朝复暮，<br>清歌远上巫山低。'],
    ['2', '沈曦', '梦呓短歌消长夜，<br>吉光片羽碎琉璃。'],
    ['2', '巽芳', '芳华如梦佳期逝，<br>蓦然回首柔情旧。'],
    ['2', '襄铃', '额前未肯点胭脂，<br>懒把相思细细知。'],
    ['2', '乐无异', '杨柳风前歌玉树，<br>黄金堂下卧麒麟。'],
    ['2', '谢衣', '花落庭前浮图现，<br>人间尽是晚晴天。'],
    ['2', '禺期', '一世仙身为剑痴，<br>晗光蕴灵万事知。'],
    ['2', '悭臾', '东海祖洲识命魂，<br>不周山下多古意。'],
    ['2', '红玉', '九重环佩艳琳琅，<br>一段红绡旖旎长。'],
    ['2', '尹千觞', '江湖肝胆风波促，<br>万里云山醉梦真。'],
    ['2', '闻人羽', '朱颜流落东风里，<br>月满千山倚筑歌。'],
    ['2', '欧阳少恭', '风前独坐弄琴筝，<br>明灭蓬山九万程。'],
    ['2', '清和真人', '明哲通达出太华，<br>山河秀丽诗酒花。'],
    ['2', '夏夷则', '八极乘龙巡碧落，<br>一襟风雪载昆仑。'],
    ['2', '百里屠苏', '古剑铁衣映清辉，<br>百劫阎浮一念微。'],
    ['2', '沈夜', '时烬未烬陷永夜，<br>归期无期月寒沉。'],
    ['2', '陵越', '剑意御风凌山月，<br>往事伴烛映霜雪。'],
    ['2', '华月', '元月夜下箜篌引，<br>不负相思不负君。'],
    ['2', '琴川', '杏花微雨沾衣湿，<br>陌路少年檐下识。'],
    ['2', '长安', '众人揽胜逐朝霞，<br>游子笑折一枝花。'],
    ['2', '天墉城', '昆仑山巅修至道，<br>剑御四野灵空明。'],
    ['2', '百草谷', '横戈盘马草如茵，<br>介胄执枹郁成阴。'],
    ['2', '巫山', '风飖轻举降暮雨，<br>碧峭绵延匿神女。'],
    ['2', '蓬莱', '青阶似洗驻岁华，<br>蓬山曲径情无暇。'],
    ['2', '青玉坛', '试心桥上分阴阳，<br>魂兮魄兮难辨章。'],
    ['2', '紫榕林', '湖天春色归路迷，<br>幼狐梦醒眼迷离。'],
    ['2', '榣山', '沧海桑田新几度，<br>月明还照旧容颜。'],
    ['2', '太华山', '巍巍云巅鹤长唳，<br>亭亭尘外山色霁。'],
    ['2', '幽都', '娲皇故里聚先贤，<br>风雨如晦葬龙渊。'],
    ['2', '流月城', '月冷千山孤城悬，<br>神木凋零远人间。'],
    ['2', '昭明', '星屑玉魄结剑还，<br>光耀四野止寒夜。'],
    ['2', '露草', '天地灵韵凝霜骨，<br>剑心支离相思苦。'],
    ['2', '凤来', '神识邈邈拂丝弦，<br>人间离散月又圆。'],
    ['2', '黑龙鳞片', '浮云一别未虚掷，<br>光阴荏冉故人来。'],
    ['2', '古剑焚寂', '琴心剑魄今何在，<br>留见星虹贯九天。'],
    ['2', '古剑红玉', '枫落龙渊宿此间，<br>青锋不再伴恨眠。'],
    ['2', '青玉司南佩', '曲终人散心不悔，<br>一魂一魄永相随。'],
    ['2', '焦炭', '天地为炉生妙物，<br>阴阳为炭造化功。'],
    ['2', '通天之器', '天道浩瀚难穷尽，<br>若涉渊水正道心。'],
    ['2', '无名之剑', '上古威仪难复现，<br>敛光为华唤明心。'],
    ['2', '金麒麟', '江上熏风鸳鸯游，<br>两小无猜赠麒麟。'],
    ['2', '兔子抱枕', '长长折耳护稚童，<br>圆圆黑眸沐春风。'],
    ['2', '古剑晗光', '传世利刃寒光荧，<br>千秋凡铁宿魂灵。'],
    ['2', '百胜刀', '白刃出鞘饮煞气，<br>世事斗转换乾坤。'],
    ['2', '忘川', '寂灭幻断前缘尽，<br>旋刺斩决君子心。'],
    ['2', '华月箜篌', '凝音织梦倚阑珊，<br>清商抚羽月沉沦。'],
    ['2', '桃花谷', '花开花落蜂蝶舞，<br>日出日落泉叮咚。'],
    ['2', '静水湖', '水天一色洗尘嚣，<br>帘栊垂落与神交。'],
    ['2', '安陆', '醉白楼旁杏林黄，<br>岁首辞君别无恙。'],
    ['2', '神女墓', '神农座下披华藻，<br>行云带雨香殒早。'],
    ['2', '北洛', '璞玉浑金啸天地，<br>冷铁戍梦荡山平。'],
    ['2', '云无月', '既出丹渊交光夜，<br>凝雾点漆逸流萤。'],
    ['2', '岑缨', '豆火薪传笑嫣然，<br>书帷漫卷睛灵秀。'],
    ['2', '姬轩辕', '天何所沓梦归崖，<br>日月入怀星分阵。'],
    ['2', '缙云', '岁付征鸿挥斗柄，<br>剑破寰宇卫荒服。'],
    ['2', '巫炤', '空阶拥璇献沉壁，<br>枉消虚过碎玉衡。'],
    ['2', '司危', '韶颜稚齿芳菲逝，<br>朱轮惘惘笑移烛。'],
    ['2', '玄戈&霓商', '惊风奔雷骋四野，<br>重帘暮深落星沉。'],
    ['2', '嫘祖', '掷镜秉钺自光辉，<br>孤城折冲影巍巍。'],
    ['2', '刘兄', '青丘尘中犹独醒，<br>夕寐宵兴叙多情。'],
    ['2', '鄢陵', '折花掷果麹盈车，<br>华红叠翠醉春晖。'],
    ['2', '天鹿城', '霄虹纹彩九千仞，<br>莫见阙角倚碧海。'],
    ['2', '西陵', '鸢飞丘墟千嶂叠，<br>狼烟横亘背花烬。'],
    ['2', '有熊', '固城筑基共拾火，<br>绯云漫卷覆濠墙。'],
    ['2', '白梦泽', '旧时泽畔刺荆心，<br>云散雾始咏初年。'],
    ['2', '巫之国', '寂寂无声伴永生，<br>堭堭空音歌未央。'],
    ['2', '鼎湖', '神舆行处凝涧壑，<br>帐殿倚云破冰枝。'],
    ['2', '赤水', '未闻龙啸绝凌云，<br>残灯耿夜拾遗珠。'],
    ['2', '阳平', '谷旦净扫立修竹，<br>翠园燕语暖春光。'],
    ['2', '无名之地', '生生死死漠无声，<br>影影绰绰空载魂。'],
    ['2', '太岁', '照之以日月，<br>经之以星辰。<br>纪之以四时，<br>要之以太岁。'],
    ['2', '原天柿', '结庐莲境持家计，<br>饱卧汤泉乡音齐。'],
    ['2', '画板', '聿画三界行九州，<br>千秋入墨成陈迹。'],
    ['2', '半魂莲', '浮生聚散梦连陇，<br>天星摇落尽成空。'],
    ['2', '玉梳', '旧梦如昨梳叠云，<br>故国凋零意难平。'],
    ['2', '梦魂枝', '切切以旧梦为恨，<br>点点以残魂为引。'],
    ['2', '青丘尘中记', '闲情偶寄旦付梓，<br>一语成谶结狐缘。'],
    ['2', '天鹿', '披荆斩棘炫明光，<br>护城悬阵却群魔。'],
    ['2', '馋鸡', '北溟鲲游翻海震，<br>袖藏禅机翥天飞。'],
    ['2', '红叶湖', '野睛露染狐呜咿，<br>红塘落叶榕须摇。'],
    ['2', '捐毒', '玉门关外祭坛成，<br>浑邪葬处沙倾城。'],
    ['2', '阿翔', '一团冰雪含奇质，<br>万里云霄豁俊眸。'],
]


startBtn.onclick = function () {
    for (let i = 0; i < configuratorContent.length; i++) {
        configuratorContent[i].style.display = 'none';
    }
    for (let i = 0; i < controllerContent.length; i++) {
        controllerContent[i].style.display = 'block';
    }
    cardBackTransition(3, 2, poolCards);
    cardBackTransition(10, 8, yourCards);
    cardTransition(MIN_POOL_CARDS, 8, poolCards);
    cardTransition(CARD_FOR_EACH, 8, myCards);
}

function cardBackTransition(num, base, parent) {
    for (let i = 0; i < num; i++) {
        var cardBack = document.createElement('div');
        cardBack.classList.add('card');
        cardBack.style.backgroundImage = 'url(' + 'cardback.jpg' + ')';
        if (base < 5) {
            cardBack.style.right = base * i + '%';
            cardBack.style.bottom = i + '%';
        }
        else {
            cardBack.style.left = base * i + '%';
            cardBack.style.bottom = (i & 1) + '%';
        }
        cardBack.style.zIndex = i;
        parent.appendChild(cardBack);
    }
}

function getRandom(maxn) {
    return Math.floor(Math.random() * maxn);
}

function cardTransition(num, base, parent) {
    var cards = [];
    while (cards.length < num) {
        let index = getRandom(TOTAL_NORMAL_CARD);
        if (!visited[index]) {
            visited[index] = true;
            cards.push(index);
            console.log(index);
        }
    }
    for (let i = 0; i < num; i++) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = 'url(img/' + normalCardList[cards[i]][1] + '.jpg)';
        card.style.left = base * (i + (num == MIN_POOL_CARDS)) + '%';
        card.style.zIndex = i;
        parent.appendChild(card);
    }
}