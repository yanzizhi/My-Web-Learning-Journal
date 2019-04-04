function draw(id) {
    // 获取元素
    let canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    let context = canvas.getContext("2d");
    context.fillStyle = "#dddddd";
    context.fillRect(0, 0, 600, 700);

    for (let i = 0; i <= 10; i++) {
        context.beginPath();
        context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = "rgba(255, 0, 0, 0.25)";
        context.fill();
    }
}

window.onload = function() {
    draw("cnavas");
};