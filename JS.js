var x = 0;
var y = 0;
var p = "";

function ad(elem) {
    document.getElementById("myspan").value = document.getElementById("myspan").value + elem.value;
}


function pk(elem) {

    if (y == 0) {
        document.getElementById("myspan").value = document.getElementById("myspan").value + "(";
        elem.style.background = "#34ff21";
    } else {
        document.getElementById("myspan").value = document.getElementById("myspan").value + ")**0.5";
        elem.style.background = "#171817";
        y = y - 2
    }

    y = y + 1;
}

function ps() {

    if (x % 2 == 0) {
        x = 0;
        document.getElementById("myspan").value = document.getElementById("myspan").value + "(";
    } else {
        document.getElementById("myspan").value = document.getElementById("myspan").value + ")";
    }

    x = x + 1;
}


function ravno() {

    if ( document.getElementById("myspan").value == "" ) {
        document.getElementById("myspan").value = "";
    } else {
        try {
            document.getElementById("myspan").value=String(eval(document.getElementById("myspan").value));
        } catch {
            {}
        }
    }

}

function Backspace() {
    document.getElementById("myspan").value = document.getElementById("myspan").value.slice(0, document.getElementById("myspan").value.length - 1);
}

function CE() {
    x, y = 0, 0;
    document.getElementById("k").style.background = "#171817";
    document.getElementById("myspan").value="";
}
