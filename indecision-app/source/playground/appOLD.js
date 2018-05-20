console.log("app.js is running");

var app = {
    title: 'Indecision Application',
    subtitle: 'This is my sub title',
    options: ['One', 'Two']
};

// JSX Javascript xml

var template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options...' : 'No Options'}</p>
    </div>
);


var myTemplate = (
    <div>
        <h1>My Template Heading</h1>
        <ul>
            <li>List Item #1</li>
            <li>List Item #2</li>
            <li>List Item #3</li>
            <li>List Item #4</li>
            <li>List Item #5</li>
            <li>List Item #6</li>
        </ul>
    </div>
);

var user = {
    name: 'Spencer',
    age: '38',
    location: 'San Francisco'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

var userName = 'Spencer';
var userAge = '38';
var userLocation = 'San Fran';
var myTemplateTwo = (   
    <div>
        <p>{user.name ? user.name : 'Anonymous'}</p>
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
var myAppRoot = document.getElementById('myAppRoot');

ReactDOM.render(template, appRoot);
ReactDOM.render(myTemplate, myAppRoot);
ReactDOM.render(myTemplateTwo, myAppRootTwo);