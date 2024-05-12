const hobbies = ['Reading', 'Knitting'];    // a pointer to the array is stored
const age = 10;     // the value itself is stored

hobbies.push('Travel');

// hobbies = ['Coding', 'Sleeping'];   // not allowed! new address is stored

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects

const person = {age : 30};

function getAdultYears(p){
    p.age -=18;
    return p.age;

    // return p.age - 18;   // -> 저장하지 않음
}

// console.log(getAdultYears(person));     
// console.log(person);    // 윗줄에서 함수를 실행시키면서 person 안의 age 값이 변경되었음

// console.log(getAdultYears({ age: person.age}));
// console.log(person); 

console.log(getAdultYears({...person}));
console.log(person);