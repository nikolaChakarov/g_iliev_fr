function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.data = function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
}

const p = new Person('kika', 35);
console.log(p.data());

function Teacher(name, age, profession) {
    Person.call(this, name, age);
    this.profession = profession;
}

Teacher.prototype = Object.create(Person.prototype);

const t = new Teacher('sisa', 44, 'mathematics');
console.log(t.data());

Teacher.prototype.data = function () {
    return `My name is ${this.name} and I am ${this.age} years old, and I am a ${this.profession} teacher`;
}

console.log(t.data());