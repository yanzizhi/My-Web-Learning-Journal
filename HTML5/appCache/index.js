let numDiv;
let work = null;
window.onload = function() {
    numDiv = document.getElementById("numDiv");
    console.log("开始");

    document.getElementById("start").onclick = startWorker;
    document.getElementById("stop").onclick = function() {
        if (work) {
            work.terminate();
            work = null;
        }
    };

};

function startWorker() {
    if (work) {
        return;
    }
    work = new Worker("count.js");
    work.onmessage = function(e) {
        numDiv.innerHTML = e.data;
        console.log(e.data);
    };
}