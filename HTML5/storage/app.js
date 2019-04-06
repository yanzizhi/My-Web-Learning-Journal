let ta, btn;
window.onload = function() {
    ta = document.getElementById("ta");
    if (localStorage.text) {
        ta.value = localStorage.text;
    }

    btn = document.getElementById("btn");
    console.log(ta);
    btn.onclick = function() {
        alert(ta.value);
        localStorage.text = ta.value;
    };
};