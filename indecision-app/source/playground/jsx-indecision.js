console.log("app.js is running");

const app = {
    title: 'Indecision Application',
    subtitle: 'This is my sub title',
    options: []
};

// JSX Javascript xml

const onFormSubmit = (e) => {
    // stops page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
    
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 10021];

const renderApp = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options...' : 'No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
        <button onClick={removeAll}>Remove All</button>
        {/* {
            numbers.map((number) => {
                return <p key={number}>Number: {number}</p>;
            })
        } */}
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
};

const removeAll = () => {
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