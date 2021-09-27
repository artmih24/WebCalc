function Validate() {
    var str = document.getElementById("textbox").value;
    str = FixString(str);
    document.getElementById("textbox").value = str.replace(/[A-Za-zА-Яа-яЁё]/, '')
    if (str.substring(0, 1) === "=") {
        Backspace();
    }
    if (str.substring(str.length - 1, str.length) === "=") {
        Backspace();
        if (String(eval(str.substring(0, str.length - 1))) != "undefined") {
            Solve();
        }
    }
}

function FixString(str) {
    str = str.replace('^', '**');
    str = ReplaceRoot(str);
    str = ReplaceDoubleSlash(str);
    return str;
}

function ReplaceRoot(str) {
    for (var i = str.length; i > 0; i--) {
        if (str.substring(i - 1, i) == "√") {
            var nestLvl = 0;
            for (var j = i + 1; j <= str.length; j++) {
                if (str.substring(j - 1, j) == "(") {
                    nestLvl++;
                }
                if (str.substring(j - 1, j) == ")") {
                    nestLvl--;
                }
                if ((str.substring(j, j + 1) != /[0-9\.]/) && (nestLvl === 0)) {
                    var str1 = str.substring(0, j);
                    var str2 = str.substring(j, str.length);
                    str = str1 + ")" + str2;
                    str = str.replace("√", "Math.sqrt(");
                    break;
                }
            }
        }
    }
    return str;
}

function ReplaceDoubleSlash(str) {
    for (var i = str.length; i > 1; i--) {
        if (str.substring(i - 2, i) == "//") {
            for (var j = i + 2, k = i - 3; j <= str.length, k > 0; j++, k--) {
                var nestLvl1 = 0;
                var nestLvl2 = 0;
                if (str.substring(j - 1, j) == "(") {
                    nestLvl1++;
                }
                if (str.substring(j - 1, j) == ")") {
                    nestLvl1--;
                }
                if (str.substring(k - 1, k) == ")") {
                    nestLvl2++;
                }
                if (str.substring(k - 1, k) == "(") {
                    nestLvl2--;
                }
                if ((str.substring(j, j + 1) != /[0-9\.]/) &&
                    (str.substring(k, k + 1) != /[0-9\.]/) &&
                    (nestLvl1 === 0) && (nestLvl2 === 0)) {
                    var str1 = str.substring(j, k);
                    var str2 = "(" + str1.replace("//", "/") + "-" + str1.replace("//", "%") + ")";
                    str = str.replace(str1, str2);
                    break;
                }
            }
        }
    }
    return str;
}

function Input(str) {
    document.getElementById("textbox").value += str;
}

function ClearTextbox() {
    document.getElementById("textbox").value = '';
}

function Backspace() {
    var str = document.getElementById("textbox").value;
    var res = str.substring(0, str.length - 1);
    document.getElementById("textbox").value = res;
}

function Solve() {
    var str = document.getElementById("textbox").value;
    str = FixString(str);
    var res = eval(str);
    var resString = String(res);
    if (resString != "undefined") {
        var out = "=" + resString;
        document.getElementById("textbox").value += out;
    }
}

console.log("А кто это тут у нас F12 нажал?\nПривет всем веб-разработчикам!")