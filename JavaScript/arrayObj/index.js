var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
var fruits1 = ['a', 'b', 'c', 'd'];
console.log(fruits.copyWithin(3, 0, 5));

function everyFun(x) {
    console.log("==" + x);
    // 没有返回true，函数就不会继续执行
    return true;
}
fruits.every(everyFun);

let numbers = [1, 4, 6, 8, 3];
let newNumbers = numbers.filter(checkNum);
console.log(newNumbers);

function checkNum(x) {
    // 返回偶数
    let temp;
    if (x % 2 == 0) {
        temp = true;
    }
    return temp;
}

let a = fruits1.find(function(x) {
    return x == "a";
});
console.log(a);

// forEach方法
fruits.forEach(x => {
    console.log("forEach " + x);
});

let fromFruits = Array.from(fruits, x => {
    x += " is nice";
    return x;
});
console.log(fromFruits);

console.log(fruits.join(" * "));

console.log(fruits);
let bb = fruits.push("aaa");
console.log(bb);
console.log(fruits);

let reduce = fruits.reduce(function(total, x) {
    console.log(total);
    total = total + x;
    return total;
}, "fafa");
console.log(reduce);

console.log(fruits.slice(1, 3));

console.log(fruits.toString());

console.log(Math.round(-2.5));

function randChar(length, characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    //length为所需长度，characters为所包含的所有字符，默认为字母+数字。
    characters = characters.split(""); //分割字符。
    result = ""; //返回的结果。
    while (result.length < length) result += characters[Math.round(Math.random() * characters.length)];
    return result;
}
console.log(randChar(5));

Array.prototype.pick = function() {
    //不能为 ()=>{/*函数*/}，否则this会指向Window。
    return this.length ? Math.round(Math.random() * (this.length - 1)) : undefined; //如果长度为0，返回undefined。
};

console.log(fruits.pick());