function Person(initialName){
    var name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Erick');
console.log(p.name);
console.log(p.getName());

/
class Animal{
    #name = '';

    constructor(name){
        this.#name = name;
    }

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }
}

const a = new Animal('girafa');
console.log(a.name);
console.log(a.getName());

