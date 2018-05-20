'use strict';

console.log("app.js is running");

var app = {
    title: 'Indecision Application',
    subtitle: 'This is my sub title',
    options: ['One', 'Two']
};

// JSX Javascript xml

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
    )
);

var myTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'My Template Heading'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'List Item #1'
        ),
        React.createElement(
            'li',
            null,
            'List Item #2'
        ),
        React.createElement(
            'li',
            null,
            'List Item #3'
        ),
        React.createElement(
            'li',
            null,
            'List Item #4'
        ),
        React.createElement(
            'li',
            null,
            'List Item #5'
        ),
        React.createElement(
            'li',
            null,
            'List Item #6'
        )
    )
);

var user = {
    name: 'Spencer',
    age: '38',
    location: 'San Francisco'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var userName = 'Spencer';
var userAge = '38';
var userLocation = 'San Fran';
var myTemplateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var myAppRoot = document.getElementById('myAppRoot');

ReactDOM.render(template, appRoot);
ReactDOM.render(myTemplate, myAppRoot);
ReactDOM.render(myTemplateTwo, myAppRootTwo);
