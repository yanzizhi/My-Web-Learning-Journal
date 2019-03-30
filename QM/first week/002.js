// 获取DOM元素
let btn = document.getElementById("btn");
let mask = document.getElementById("mask");
let confirm = document.getElementById("confirm");
let cancel = document.getElementById("cancel");
let modal = document.getElementById("wrapper");

btn.onclick = function() {
    modal.classList.add("show");
    mask.style.display = "block";
}

confirm.onclick = function() {
    modal.classList.remove("show");
    mask.style.display = "none";
}
cancel.onclick = function() {
    modal.classList.remove("show");
    mask.style.display = "none";
}