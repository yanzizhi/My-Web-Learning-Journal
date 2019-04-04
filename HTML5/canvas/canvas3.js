function draw(id) {
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, 300, 400);
    let dx = 150;
    let dy = 150;
    let s = 100;
    context.beginPath();
    context.fillStyle = "rgb(100, 255, 199)";
    context.stroketStyle = "rgb(0, 0, 100)";
    let x = Math.sin(0);
    let y = Math.cos(0);
    let dig = Math.PI / 15 * 11;
    for (let i = 0; i < 30; i++) {
        let x = Math.sin(i * dig);
        let y = Math.cos(i * dig);
        context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

window.onload = function() {
    draw("canvas");
};