let p1 = document.getElementById("p1");
p1.innerHTML = "新文本";

var para = document.createElement("h1");
var node = document.createTextNode("这是一个新段落。");
para.appendChild(node);
var element = document.getElementById("div1");
// element.appendChild(para);

let chlid = document.getElementById("p2");
element.insertBefore(para, chlid);