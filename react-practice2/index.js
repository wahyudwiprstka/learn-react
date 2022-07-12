/*
 - Create a new h1 element
 - Give it some textContent
 - give it a class name of "header"
 - append it as a child of the div#root
*/

const h1 = document.createElement("h1");
h1.textContent = "Some Text 2";
h1.className = "header";
document.getElementById("root").append(h1);

// different way


ReactDOM.render(<h1 className="header">Some Text</h1>, document.getElementById("root"));