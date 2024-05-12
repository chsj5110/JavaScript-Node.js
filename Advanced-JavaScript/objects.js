// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 50000,
// };

// new Date();

// console.log(new Date().toISOString());


// const job2 ={
//     title: 'Cook',
//     location: 'Munich',
//     salary: 10000,
// }

class Job {
    constructor(jobTitle, place, salary){
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe(){
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
    }
}

const developer = new Job('Developer', 'New York', 45000);
const cook = new Job('Cook', 'Seoul', 10000);

developer.describe();
cook.describe();

const job1 = {title: 'Doctor', location: 'Busan'};
const {title} = job1;
console.log(title);

const {title:jTitle} = job1;
console.log(jTitle);