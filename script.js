function input(str) {
    document.getElementById("textbox").value += str;
}

function clearTextbox() {
    document.getElementById("textbox").value = '';
}

function backspace() {
    var str = document.getElementById("textbox").value;
    var res = str.substring(0, str.length - 1);
    document.getElementById("textbox").value = res;
}

function solve() {
    var str = document.getElementById("textbox").value;
    var res = eval(str);
    var out = "=" + String(res);
    document.getElementById("textbox").value += out;
}