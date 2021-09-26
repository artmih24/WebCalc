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
    var res = eval(str);
    var out = "=" + String(res);
    document.getElementById("textbox").value += out;
}