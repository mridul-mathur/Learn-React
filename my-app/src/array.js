const arr =[1,2,3,4];
console.log(arr.map(el=> el +1)); // [2,4,6,8]
console.log(arr); // [1,2,3,4]
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
const element = <h1>Hello, world</h1>;
root.render(element);//render is a function that takes in a react element and renders it to the DOM.