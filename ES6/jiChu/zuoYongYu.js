const callback = [];
for (let i = 0; i <= 2; i++) {
    console.log(i);
    callback[i] = function() {
        console.log("闭包中的i值：" + i);
        return i * 2;
    };
}
console.table([callback[0](), callback[1](), callback[2]()]);

(function() {
    console.log("这个函数被立即执行，而无需调用");

    function a() {
        const a = 12;
        console.log(a);
    }

    function b() {
        const a = 13;
        console.log(a);
    }
    a();
    b();
})();