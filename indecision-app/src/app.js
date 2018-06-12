import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  
// class OldSyntax {
//     constructor() {
//         this.name = 'mike'
//     }
// }

// const oldSyntax = new OldSyntax();
// // console.log(oldSyntax);

// class NewSyntax {
//     name = 'Lia';
//     age = 8;
//     getGreeting = () => {
//         return (`Hi. My Name is ${this.name}. I am ${this.age} years old.`);
            
//     }
// }
// const newSyntax = new NewSyntax();
// // console.log(newSyntax);
// const getNewGreeting = newSyntax.getGreeting;
// console.log(getNewGreeting());