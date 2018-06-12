import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        Expense Page
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit Expense Page
    </div>
);

const HelpPage = () => (
    <div>
        Help Page
    </div>
);

const routes = ( 
    <BrowserRouter >
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

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