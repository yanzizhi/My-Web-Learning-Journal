// 获取id为box1元素节点
let box = document.getElementById("box1");
// 获取box1下的第一个子节点，及h1节点



// 获取p元素
let p = document.getElementById("intro");
console.log(p);
console.log(p.nodeType);
// 元素节点的nodeName与标签名相同
console.log(p.nodeName);
// 元素节点的nodeValue为null或undefined
console.log(p.nodeValue);
console.log(p.childNodes);

// 获取p元素节点下的文本节点
let txt = p.firstChild;
console.log(txt);
console.log(txt.nodeType);
// 文本节点的nodeName始终为#text
console.log(txt.nodeName);
// 文本节点的nodeValue为文本本身
console.log(txt.nodeValue);


let getPs = document.getElementsByTagName("p");
console.log(getPs);
let getP = document.getElementById("box1").getElementsByTagName("p");
console.log(getP);

let cla = document.getElementsByClassName("para");
console.log(cla);

console.log("===========")
let cla1 = document.getElementById("pp").getElementsByClassName("para");
console.log(cla1);