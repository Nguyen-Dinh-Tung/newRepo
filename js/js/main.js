var jerry = new Rat("Jerry", 15, 30, "life");
var tom = new Cat("Tom", 20, 31);
console.log(jerry.getInfo());
console.log(tom.getInfo());
console.log(tom.catch());
console.log(tom.eat(jerry.weight));
console.log(tom.getWeight());
console.log(jerry.status);
jerry.setLife("life");
console.log(jerry.status);