const func = (str) => {
    const regex = new RegExp(/[a-z0-9]+/g);

    const arr = str.match(regex);
    console.log(arr.join(''));
}

func('abcAZ012aZa');

const obj1 = {
    one: ['one, two, three'],
    two: { key1: { max: '', min: '' } }
}

// deep copy in JavaScript
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.one.push('xxx');
obj2.two.key1.max = 100;

// console.log(obj1);
// console.log(obj2);

const arr1 = [1, 2, 3, { key: '' }];
const arr2 = JSON.parse(JSON.stringify(arr1));

arr2[3].key = 100;
// console.log(arr1);
// console.log(arr2);

let uniq = new Set()