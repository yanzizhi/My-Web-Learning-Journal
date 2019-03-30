// 通过原型继承创建子类
function Accommodaation() {}

Accommodaation.prototype.lock = function(param) {
    console.log("关闭");
};
Accommodaation.prototype.unlick = function(param) {
    console.log("打开");
};

// 定义一个构造函数，它将成为我们的子类
function House(defaults) {
    defaults = defaults || {};
    this.floors = 2;
    this.rooms = defaults.rooms || 7;
}

House.prototype = new Accommodaation();

House.prototype.constructor = House;

// 创建House的一个实例，它继承的Accommodation的属性和方法
let myHouse = new House();
myHouse.lock();
myHouse.unlick();