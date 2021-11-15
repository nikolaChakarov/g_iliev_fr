class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(input) {
        this._name = input;
    }

    get name() {
        return this._name;
    }

    toString = () => {
        return `My name is ${this.name}, and I am ${this.age} yers old`;
    }

    static className = () => {
        return this.name;
    }
}

const p = new Person('kika', 45);

console.log(p.toString());
console.log(Person.className());

p.name = 'desa';
console.log(p.toString());
console.log(p.name);

class Teacher extends Person {
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }

    toString = () => {
        const fromParent = super.toString();
        console.log(fromParent);
        return fromParent + `...and I am a ${this.profession} teacher`;
    }
}

const t = new Teacher('desa', 45, 'french');
console.log(t.toString());