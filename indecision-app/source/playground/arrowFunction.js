// const square = function (x) {
//     return x * x;
// };

// arrow function with 'verbose syntax'
// const squareArrow = (x) => {
//     return x * x;
// };


// arrow function 'expression' or 'shorthand syntax'
// the same as above but shorter syntax. returns some single expression
// const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(4));


// const fullName = 'Spencer Powell';

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// };

// const getFirstNameShort = (name) => name.split(' ')[0];

// console.log(getFirstName(fullName));
// console.log(getFirstNameShort(fullName));

// Arrow Functions Part II
// Arguments object - no longer bound with arrow functions
// Es 5 function

const add = function (a, b) {
    // arguments object returns all three arguments from ln 41
    // even though only two (a,b) are defined. 
    // no 'arguments' object in arrow functions
    console.log(arguments);
    return a + b;
    
};

console.log(add(55, 1, 100));


// 'this' keywoard is no longer bound
const user = {
    name: 'Spencer',
    cities: ['ill', 'nYC', 'dublin'],


    // ES5 object function
    // printPlacesLived: function () {
    //same function but ES6
    //printPlacesLived() {...}
        // inside ES5 function, you have access to 'this' 
        // console.log(this.name);
        // console.log(this.cities);

        

        // const that = this;

        // this.cities.forEach(function (city) {
        //     // can't access 'this'
        //     // can use 'that' as work around
        //     // arrow function within a function allows 'this' to pull from parent
        //     console.log(that.name + ' has lived in ' + city);
            
        // });
    // }
// most popular array method 'map' replaces 'for each'?
// map allows you to transform the data. 

// ES6 Version Verbose
    // printPlacesLived() {
    //   const cityMessages = this.cities.map((city) => {
    //     return this.name + ' has lived in 2 ' + city;
    //   });  
    //   return cityMessages;
    // }

    // ES6 Version Shorthand
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived inn ' + city);
    }

};

console.log(user.printPlacesLived());

// Challenge Area....

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 4, 8],
    // multiplyBy - single number
    multiplyBy: 5,
    // multiply - return a new array where the number have been multiplied
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);  
    }
};

console.log(multiplier.multiply());

 







