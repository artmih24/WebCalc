function input(str) {
    document.getElementById("textbox").value += str;
}

function clearTextbox() {
    document.getElementById("textbox").value = '';
}

function backspace() {
    var str = document.getElementById("textbox").value;
    document.getElementById("textbox").value = str.substring(0, str.length - 1);
}

function solve() {
    var str = document.getElementById("textbox").value;
    var res = eval(str);
    document.getElementById("textbox").value += "=" + String(res);
}