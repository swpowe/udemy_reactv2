class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
        this.state = {
            // title: 'Indecision',
            subTitle: 'Put your life in the hands of a computer...',
            options: props.options
        }
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        // --> Short hand of the above. Wrap an object in parentheses befor curley 
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exsits';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        // --> Shorthand of the above
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    

    render() {
        // const title = 'Indecision';
        // const subTitle = 'Put your life in the hands of a computer';
        // const options = ['thing one', 'thing two', 'thing four'];

        return (
            <div>
                <Header subTitle={this.state.subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

// default props values defined after class or function based component
Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         // console.log(this.props); 
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
    
};

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handle pick');
//     // }


//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                         What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                 {
                     props.options.map((option) => 
                     <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                     )
                 }
            </div>
        );
};

// class Options extends React.Component {
//     // overrides constructor to bind removeAll 'this' correctly
    

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                  {
//                      this.props.options.map((option) => 
//                      <Option key={option} optionText={option} />
//                      )
//                  }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        // str - JSON.stringify(e);
                        // console.log(str);
                        props.handleDeleteOption(props.optionText);
                    }}
                    >
                    remove
                </button>
            </div>
        ); 
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         // error: error also valid
        //         error
        //     };
        // });
        // --> Shorthand of the above. Both are the same. Returns an object
        this.setState(() => ({error}));


    }
    render () {
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

// stateless react function
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));