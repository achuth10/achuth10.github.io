console.log("App.js is running");


const incCount = ()=> {count+=1;console.log(count)}

let count = 0;
let template = ( 
    <div>
         <p>{count} </p>
         <button onClick = {incCount}>Click me now!</button>
    </div>
);
let appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot);