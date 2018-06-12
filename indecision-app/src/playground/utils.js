console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a-b;

export default subtract;

//or 
// export default (a, b) => a-b;

// exports defult or named

// named exports or can 'export' above function like above. same thing
// export { square, add, subtract as default };
// export { subtract as default};

