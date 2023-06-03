var colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
]
var lgbtText = document.getElementsByClassName("lgbt");
for (var i = 0; i < lgbtText.length; i++) {
    var word = lgbtText[i];
    var _word = word.cloneNode(true);
    _word.innerHTML = "";

    for (var j = 0; j < word.innerHTML.length; j++) {
        var letter = word.innerHTML[j];
        _word.innerHTML += "<span>" + letter + "</span>";
    }
    word.innerHTML = _word.innerHTML;
}


x = 0;

for (var i = 0; i < lgbtText.length; i++) {
    var word = lgbtText[i];
    var letters = word.getElementsByTagName("span");
    
    for (var j = 0; j < letters.length; j++) {
        var letter = letters[j];
        x++;

        letter.style.animationDelay = (x * 0.05) + "s";
        letter.style.animationName = "color-change";
        letter.style.animationDuration = "1500ms";
        letter.style.animationIterationCount = "infinite";
        letter.style.animationDirection = "alternate";
    }
}


var wpwText = document.getElementsByClassName("wpw");
for (var i = 0; i < wpwText.length; i++) {
    var sentence = wpwText[i];
    var _sentence = sentence.cloneNode(true);
    _sentence.innerHTML = "";

    var words = wpwText[i].innerHTML.split(" ");

    for (var j = 0; j < words.length; j++) {
        var _word = words[j];

        var word = document.createElement("span");

        word.innerHTML = _word + ' ';

        word.style.opacity = 0;
        word.style.animationDelay = (j * .75) + "s";
        word.style.animationName = "appear";
        word.style.animationDuration = "750ms";
        // word.style.animationIterationCount = "infinite";
        word.style.animationDirection = "alternate";
        word.style.animationFillMode = "forwards";

        _sentence.innerHTML += word.outerHTML;
    }

    sentence.innerHTML = _sentence.innerHTML;
}
