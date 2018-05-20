class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility: false
        };

    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));







// // // First Build Project Test
// // // My Code Start

// // const appRoot = document.getElementById('app');
// // let buttonTitle = 'Show Details'

// // let num = undefined;
// // let visible = false;
// // const showComments = () => {
// //     if (visible = false) {
// //         num = 'Heres some ammount of text. Not sure what to do here...';
// //         buttonTitle = 'Hide Text';
// //         visible = 1;
// //         renderApp();
// //     } else {
// //         num = undefined;
// //         buttonTitle = 'Show Text';
// //         visible = 0;
// //         renderApp();
// //     }
// // }

// // const renderApp = () => {
// //     const template = (
// //         <div>
// //             <h1>Visibility Toggle</h1>
// //             <button onClick={showComments}>{buttonTitle}</button>
// //             <p>{num}</p>
// //         </div>
// //     );
    

// //     ReactDOM.render(template, appRoot);

// // };

// // renderApp();

// // End of My Code

// // His code start
// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Here's some amount of text or whatever.</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();