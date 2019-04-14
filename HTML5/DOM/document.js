let att = document.createAttribute("class");
att.value = "democlass";
document.getElementsByTagName("H1")[0].setAttributeNode(att);

let p = document.getElementById("p");
console.log(p.attributes);

let box = document.getElementById("box1");
console.log(box);

console.log(box.firstChild);

console.log(box.firstChild.nextSibling);

let y = document.getElementsByTagName("h1");
console.log(y);
console.log(y[0].nextElementSibling.nodeValue);