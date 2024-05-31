var $classAll = function (c) {
    return document.getElementsByClassName(c);
};
// ブラウザ対応拡張子取得
var AUDIO_EXT = (function () {
    var ext = "";
    var audio = new Audio();
    if (audio.canPlayType("audio/ogg") == 'maybe') {
        ext = "ogg";
    } else if (audio.canPlayType("audio/mp3") == 'maybe') {
        ext = "mp3";
    } else if (audio.canPlayType("audio/wav") == 'maybe') {
        ext = "wav";
    }
    return ext;
})();
// あらかじめ読み込んでおく
var AUDIO_LIST = {
    "se00": new Audio("img/mp3/342757161749273." + AUDIO_EXT),
    "se01": new Audio("img/mp3/342757161749490." + AUDIO_EXT),
    "se02": new Audio("img/mp3/342757161749744." + AUDIO_EXT),
};
// 初期化
window.onload = function () {
    // Circle 要素取得
    var eCircleList = $classAll("circle");
    for (i = 0, len = eCircleList.length; i < len; i++) {
        var eCircle = eCircleList[i];
        // クリックイベント登録
        eCircle.addEventListener("click", function () {
            var id = this.getAttribute("id");
            // サウンド再生
            AUDIO_LIST[id].play();
            // 次呼ばれた時用に新たに生成
            AUDIO_LIST[id] = new Audio(AUDIO_LIST[id].src);
        }, false);
    };
};