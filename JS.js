var primer = "";
var x = 0;
var y = 0;

function p1() {
    primer = document.getElementById("myspan").value + "1"
    document.getElementById("myspan").value=primer;
}
function p2() {
    primer = document.getElementById("myspan").value + "2"
    document.getElementById("myspan").value=primer;
}
function p3() {
    primer = document.getElementById("myspan").value + "3"
    document.getElementById("myspan").value=primer;
}
function p4() {
    primer = document.getElementById("myspan").value + "4"
    document.getElementById("myspan").value=primer;
}
function p5() {
    primer = document.getElementById("myspan").value + "5"
    document.getElementById("myspan").value=primer;
}
function p6() {
    primer = document.getElementById("myspan").value + "6"
    document.getElementById("myspan").value=primer;
}
function p7() {
    primer = document.getElementById("myspan").value + "7"
    document.getElementById("myspan").value=primer;
}
function p8() {
    primer = document.getElementById("myspan").value + "8"
    document.getElementById("myspan").value=primer;
}
function p9() {
    primer = document.getElementById("myspan").value + "9"
    document.getElementById("myspan").value=primer;
}
function p0() {
    primer = document.getElementById("myspan").value + "0"
    document.getElementById("myspan").value=primer;
}
function pp() {
    primer = document.getElementById("myspan").value + "+"
    document.getElementById("myspan").value=primer;
}
function pm() {
    primer = document.getElementById("myspan").value + "-"
    document.getElementById("myspan").value=primer;
}
function ppr() {
    primer = document.getElementById("myspan").value + "**"
    document.getElementById("myspan").value=primer;
}
function pd() {
    primer = document.getElementById("myspan").value + "/"
    document.getElementById("myspan").value=primer;
}
function pu() {
    primer = document.getElementById("myspan").value + "*"
    document.getElementById("myspan").value=primer;
}
function pt() {
    primer = document.getElementById("myspan").value + "."
    document.getElementById("myspan").value=primer;
}


function pk(elem) {
    if (y == 0) {
        primer = document.getElementById("myspan").value + "(";
        elem.style.background = "#34ff21";
    } else {
        primer = document.getElementById("myspan").value + ")**0.5";
        elem.style.background = "#171817";
        y = y - 2
    }

    y = y + 1;
    document.getElementById("myspan").value=primer;
}
function ps() {

    if (x % 2 == 0) {
    
        x = 0;
        primer = document.getElementById("myspan").value + "(";
        document.getElementById("myspan").value=primer;

    } else {

        primer = document.getElementById("myspan").value + ")";
        document.getElementById("myspan").value=primer;

    }

    x = x + 1;
}
function pmod() {
    primer = document.getElementById("myspan").value + "%"
    document.getElementById("myspan").value=primer;
}


function ravno() {
    if ( primer == "" ) {
        document.getElementById("myspan").value = "";
    } else {
        primer = document.getElementById("myspan").value;
        document.getElementById("myspan").value=String(eval(primer));
        primer = String(eval(primer));
    }

    console.log(primer);
}

function Backspace() {
    primer = document.getElementById("myspan").value;
    primer = primer.slice(0, primer.length - 1);
    document.getElementById("myspan").value=primer;
}

function CE() {
    primer = "";
    x = 0;
    y = 0;
    document.getElementById("k").style.background = "#171817";
    document.getElementById("myspan").value=primer;
}