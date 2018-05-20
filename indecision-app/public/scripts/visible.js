'use strict';

console.log("app.js is running");

var app = {
    title: 'Indecision Application',
    subtitle: 'This is my sub title',
    options: []
};

// JSX Javascript xml

var onFormSubmit = function onFormSubmit(e) {
    // stops page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

var appRoot = document.getElementById('app');

// const numbers = [55, 101, 10021];

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options...' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

// var myTemplate = (
//     <div>
//         <h1>My Template Heading</h1>
//         <ul>
//             <li>List Item #1</li>
//             <li>List Item #2</li>
//             <li>List Item #3</li>
//             <li>List Item #4</li>
//             <li>List Item #5</li>
//             <li>List Item #6</li>
//         </ul>
//     </div>
// );


renderApp();
