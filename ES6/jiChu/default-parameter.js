function foo(x, y, z) {
    x = x || 10;
    y = y || 20;
    z = z || 30;
    console.log(x);
    console.log(y);
    console.log(z);
}
foo(8);

function f(x = 19, y = 29, z = 39) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f(2, 4);

function check() {
    throw new Error("Can't be empty.");
}

function ff(x = check(), y = 10, z = 20) {
    console.log(x + y + z);
}
ff(1);


function cb(...a) {
    let sum = 0;
    a.forEach(function(item) {
        sum += item * 1;
    });
    return sum;
}
console.log(cb(1, 2, 3, 4, 5));

let ar1 = ['hello', true, 7];
let ar2 = [1, 2, ...ar1];
console.log(ar2);