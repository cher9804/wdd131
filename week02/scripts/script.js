// Video Bro

const body = document.body
// body.append("Hello, world!", "Bye")//append allow us to append strings and Nodes and multiple at the same time, with appendChild we can do just one at the time
const div = document.querySelector('div');
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove();
div.append(spanBye);

div.removeChild(spanHi);

console.log(spanHi.getAttribute("title"));
console.log(spanHi.title) //this is the same as above

console.log(spanHi.setAttribute("title", "asas"));
console.log(spanHi.title = asas) //this is the same as above

console.log(spanHi.removeAttribute("title"));

console.log(spanHi.dataset.test)//prints the property custom data attribute
spanHi.dataset.newName = "asas"; //it will take the form of hyphens, this is a custom data attribute

spanHi.classList.add("new-class"); //adds a class
spanHi.classList.remove("hi1"); //removes a class
spanHi.classList.toggle("h3", false); //if it doesnt exist it will add it otherwise it will remove it, if we pass false it will remove, if we pass true, ti will add  

spanHi.style.backgroundColor = "red"; //css changed to camelcase


// const div = document.createElement('div') //creating is not the same as adding it to the document



// div.innerText = "Hello world";
// div.textContent = "Hellow world 2"; //the same result as above, the same for strings
// div.innerHTML = "<strong>Hello World 2</strong>"; //this render the content as specified in the quote, it is the only way to add html from a tring in Javascript


body.append(div);

// document.querySelector('div');

// console.log(div.textContent);//prints everything, indentation, all spacing of all the content inside the div
// console.log(div.innerText);//prints what is visible and as it is print in the HTML










