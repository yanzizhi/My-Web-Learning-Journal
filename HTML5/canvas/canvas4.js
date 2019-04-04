function draw(id) {
    let canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    let context = canvas.getContext("2d");
    context.fillStyle = "#dddddd";
    context.fillRect(0, 0, 300, 400);
    let dx = 150;
    let dy = 150;
    let s = 100;
    context.beginPath();
    context.fillStyle = "rgb(100, 255, 100)";
    let x = Math.sin(0);
    let y = Math.cos(0);
    let dig = Math.PI / 15 * 11;
    context.moveTo(dx, dy);
    for (let i = 0; i < 30; i++) {
        let x = Math.sin(i * dig);
        let y = Math.cos(i * dig);
        context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

window.onload = function() {
    draw("canvas");
}