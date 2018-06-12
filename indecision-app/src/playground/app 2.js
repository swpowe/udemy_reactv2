// import './utils.js' ; order doesn't matter name does
// when importing 'default' it doesn't have to match the name
// subtract could be anything you want
// import subtract, { square, add } from './utils.js';


// console.log('app.js is running . . .');

// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 99));

// import './person.js';
// import senior, { adult, canDrink } from './person.js';

// const age = 22;

// console.log(adult(age));
// console.log(canDrink(age));
// console.log(senior(65));

// npm modules import
// install --> import --> use
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';


console.log(validator.isEmail('test@email.com'));

const template = <p>THIS IS WEBPACK JSX</p>;
ReactDOM.render(template, document.getElementById('app'));