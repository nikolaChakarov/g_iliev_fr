const obj1 = {
    name: 'kika',
    age: 45,
    data: function () {
        return `My name is ${this.name}, and I am ${this.age} years old`;
    }
}

console.log(obj1.data());

const obj2 = {
    name: 'desa',
    age: 50,

}

console.log(obj1.data.call(obj2));

const obj3 = {
    name: 'sisa',
    age: 49
}

const func = obj1.data.bind(obj3);
console.log(func());
