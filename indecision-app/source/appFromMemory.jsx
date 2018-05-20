class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        
        this.state = {
            title: 'Indecision App Title',
            subTitle: 'Put your life in the hands of a computer',
            options: ['test 1', 'test2']
        };

    }

    handleDeleteAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
    }

    handleAddOption(option) {
        if(!option) {
            return 'Please enter a valid option.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exsists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        
    }

    render() {
        return (
            <div>
                <Header 
                    title = {this.state.title}
                    subTitle = {this.state.subTitle}
                />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteAll = {this.handleDeleteAll}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
            
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <button 
                onClick = {this.props.handlePick}
                disabled = {!this.props.hasOptions}
            >
                What should I do?
            </button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteAll}>Remove All Options</button>
                {
                    this.props.options.map((option) => 
                        <Option key={option} optionText={option} />
                    )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
            error
            };
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));