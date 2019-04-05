// arrow function

let evens = [1, 2, 3, 4, 5];
let odds = evens.map(v => v + 1);
console.log(evens, odds);

{
    let factory = function() {
        this.a = "a";
        this.b = "b";
        this.c = {
            a: "a+",
            b: function() {
                return this.a;
            }
        };
    };
    console.log(new factory().c.b());
}

{
    let factory = function() {
        this.a = "a";
        this.b = "b";
        this.c = {
            a: "a+",
            b: () => {
                return this.a;
            }
        };
    };
    console.log(new factory().c.b());
}