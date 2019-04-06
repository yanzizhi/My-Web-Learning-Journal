let num = 0;
let txt;
let btn;
window.onload = function() {
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");
    if (sessionStorage.num) {
        num = sessionStorage.num;
    } else {
        num = 0;
    }
    btn.onclick = function() {
        num++;
        sessionStorage.num = num;
        showNum();
    };
};

function showNum() {
    txt.innerHTML = num;
}