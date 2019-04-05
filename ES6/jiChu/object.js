// 构造函数
let Person = function() {
    // 内部变量，外面无法访问，可实现数据保护
    let data = {
        name: "se5",
        sex: "male",
        age: 15
    };
    let a = "aaa";

    // 通过关键字this定义的属性及方法可被外部访问到
    this.b = "bbb";
    // 通过get方法获取内部数据
    this.get = function(key) {
        return data[key];
    };
    // 通过set方法修改内部数据
    this.set = function(key, value) {
        if (key !== 'sex') {
            data[key] = value;
        }
    };

};

// 声明一个实例
let person = new Person();

//无法访问
// console.log(person.data.name); 
// 未定义
// console.log(person.a);
console.log(person.b);
// 通过方法访问无法访问的值
console.log(person.get("name"));
// 修改内部值
person.set("name", 'yyy');
console.log(person.get("name"));


// ES6
{
    let Person = {
        name: "es6",
        sex: 'male',
        age: 15
    };
    // 代理对象
    let person = new Proxy(Person, {
        // target指向被代理的对象
        get(target, key) {
            return target[key];
        },
        set(target, key, value) {
            if (key !== 'sex') {
                target[key] = value;
            }
        }
    });
}