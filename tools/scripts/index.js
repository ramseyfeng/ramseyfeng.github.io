let gameStatus = {
    IN_PROGRESS: 'IN_PROGRESS',
    ANSWER_OK: 'ANSWER_OK',
    ANSWER_ERROR: 'ANSWER_ERROR'
};
let characters = Array.from(new Set(['上', '下', '左', '右', '大', '小', '人', '中', '春', '夏', '秋', '冬', '日', '雨', '男', '女', '爸', '妈', '土', '石', '水', '云', '风', '雷']));
let charsNeed2Review = [];
let model = {
    character: characters[0],
    GS: gameStatus,
    curStatus: gameStatus.IN_PROGRESS
};

let methods = {
    bingo() {
        model.curStatus = gameStatus.ANSWER_OK;
        popRandom(characters);
        console.log(charsNeed2Review);
    },
    error() {
        model.curStatus = gameStatus.ANSWER_ERROR;
        charsNeed2Review.push(model.character);
        popRandom(characters)
    },
    goNext() {
        model.curStatus = gameStatus.IN_PROGRESS;
    }
}

const vm = new Vue({
    el: '#test',
    data: model,
    methods: methods
});

let mathUtils = {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
};

let popRandom = function (numbers) {
    let retVal = numbers.splice(mathUtils.getRandomInt(0, numbers.length), 1)[0];
    model.character = retVal;
};


/*while (characters.length != 0 ) {
    console.log(popRandom(characters));
}*/
