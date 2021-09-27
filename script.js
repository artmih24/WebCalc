function Validate() {
    var str = document.getElementById("textbox").value;
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
    var resString = String(res);
    if (resString != "undefined") {
        var out = "=" + resString;
        document.getElementById("textbox").value += out;
    }
}