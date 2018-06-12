import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);

        this.state = {
            title: props.title,
            subTitle: props.subtitle,
            options: props.options
            // title: 'Indecision App',
            // subTitle: 'Put your life in the hands of a computer!',
            // options: ['option 1a', 'option 2']
        }
    }

    handleRemoveAll() {
        alert('remove all')
    }

    render() {
        return (
            <div>
                <Header title={this.props.title} subTitle={this.props.subtitle}/>
                <Options handleRemoveAll={this.handleRemoveAll}/>
            </div>
        );
    };
}

App.defaultProps = {
    title: 'Untitled Page',
    subtitle: "What's this page about?",
    options: [],
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        </div>
    );
};

class Options extends React.Component {
    render(props) {
        return (
            <div>
                <p>What Should I do?</p>
                <input type="text"/>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
            </div>
        );
    };
}

ReactDOM.render(<App title={'Page Title'}/>, document.getElementById('root'));