class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
        // this.setState is a function that passes a function that returns state changes
        this.setState((prevState) => {
            return {
                // we aren't over riding all states. only updates to states listed below
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return { 
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('add one');
    
// };
// const subOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('sub one');
    
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset');
    
// };

// // const myTemplate = (
// //     <div>
// //         <h1>Count: {count}</h1>
// //         {/* can't use class must use className 
// //         can also add function onClick inside expression*/}
// //         <button onClick={addOne}>+1</button>
// //         <button onClick={subOne}>-1</button>
// //         <button onClick={reset}>Reset</button>
// //     </div>
// // );


// // ReactDOM.render(template, appRoot);
// // ReactDOM.render(myTemplate, myAppRoot);
// // ReactDOM.render(myTemplateTwo, myAppRootTwo);



// const renderCounterApp = () => {
//     const myTemplate = (
//         <div>
//             <h1>Count: {count}</h1>
//             {/* can't use class must use className 
//             can also add function onClick inside expression*/}
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(myTemplate, myAppRoot);
// };

// renderCounterApp();