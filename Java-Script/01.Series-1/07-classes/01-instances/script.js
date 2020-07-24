// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    const skitty = {
        name = 'Skitty',
        age = 9,


  description() {
    return `${this.name} de ${this.age}`;
    }
}

const pixel = {
    name = 'Pixel',
    age = 6,


description() {
return `${this.name} de ${this.age}`;
}
}



console.log(skitty.description());
console.log(pixel.description());
    

})();
