// classes to reuse code

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';

        // es6 template strings
        return `Hi. I am ${this.name}!`
        
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// Sub Clases

class Student extends Person {
    constructor(name, age, major) {
        // calling 'super' calls the parent class constructor. pass in arguments
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their Major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        // if (this.homeLocation) {
        //     greeting += ` I'm vising from ${this.homeLocation}.`
        // } else {
        //     greeting;
        // }

        (
            this.homeLocation ?  
            greeting += ` I'm vising from ${this.homeLocation}.`:
            greeting
        )
        return greeting;
    }
}

const steve = new Student('spencer', 20, 'music');
const jane = new Student();
const john = new Traveler('Spencer', 20, 'Canada');
const bob = new Traveler();

console.log(john.getGreeting());
console.log(bob.getGreeting());





