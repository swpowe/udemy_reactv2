let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle Project</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Text' : 'Show Text'}
            </button>
            {visibility && (
                <div>
                    <p>Here is some text.</p>
                </div>
            )}
        </div>
        
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();