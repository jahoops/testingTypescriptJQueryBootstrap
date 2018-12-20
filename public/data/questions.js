var jsdata =[{"id":0,"q":"What is an ECMAScript?","a":"Script is a specification for the scripting language standards. It has standardized Javascript which made Javascript the best implementation of ECMAScript.<br>"},{"id":1,"q":"Are Attributes and Property the same?","a":"No. Attributes are something that can give more details on an element like id, type, value etc. Whereas, Property is the value assigned to the property like type=\"text\", value='Name' etc.<br>"},{"id":2,"q":"List out the different ways an HTML element can be accessed in a Javascript code.","a":"Here are the list of ways an HTML element can be accessed in a Javascript code,<br>getElementById('idname'): Gets an element by its ID name<br>getElementsByClass('classname'): Gets all the elements that have the given classname.<br>getElementsByTagName('tagname'): Gets all the elements that have the given tag name.<br>querySelector(): This function takes css style selector (like #id/.classname/tagname) and returns the first selected element.<br>querySelectorAll(): Similar to querySelector, this function returns a NodeList of html elements.<br>"},{"id":3,"q":"In how many ways a Javascript code can be involved in an HTML file?","a":"Inline (ii) Internal (iii) External<br>"},{"id":4,"q":"What are the new ways to define a variable in Javascript?","a":"var (which is used from the beginning) (ii) const (iii) let. The last two ways are the latest ways of defining a variable and are introduced in ES-2015(ES6 version).<br>"},{"id":5,"q":"What is a Typed Language?","a":"Typed Language is in which the values are associated with values and not with variables. It is of two types:<br>Dynamically: in this, the variable can hold multiple types; like in JS a variable can take number, chars.<br>Statically: in this, the variable can hold only one type, like in Java a variable declared of string can take only set of characters and nothing else.<br>NOTE: Typescript is a superset of JS which is of typed language.<br>"},{"id":6,"q":"What does a typeof operator do?","a":"The operator typeof gives the type of a variable/data available in it. The typeof operator can be used on Reference data types also.<br><br>"},{"id":7,"q":"Name some of the ways in which Type Conversion is possible.","a":"Type Conversion is to convert from one data type to another data type.<br>Number to String Conversion.<br>toString: Other data type to String.<br>.toString(); converts integer to string.<br>.toString(); converts boolean to string.<br>Convert from Number/Boolean/Date to String.<br>converts num to string<br>converts bool to str<br>) date to string<br>Array to string.<br>String to Number Conversion.<br><br>; outputs 100 as number<br>outputs 22.22 as float<br>Convert from String/Boolean to Number/Date.<br>converts str - num<br>.toFixed(4) gives 9.0000 as the output<br>converts to no.<br>converts to no. (0)<br>give NaN.<br>"},{"id":8,"q":"What is the difference between Local Storage and Session Storage?","a":"Local Storage will stay until it is manually cleared through settings or program.<br>Session Storage will leave when the browser is closed.<br>"},{"id":9,"q":"What is the difference between the keywords var and let?","a":"The keyword var is from the beginning of Javascript; whereas, let is introduced in ES2015/ES6. The keyword let has a block scope; whereas, the keyword var has a functional scope.<br>"},{"id":10,"q":"What is the difference between the operators '=='  and '==='?","a":"The operator '==' compares the value; whereas, the operator '===' compares both value and type.<br>"},{"id":11,"q":"What is the difference between null and undefined?","a":", the value is an object. Whereas, when used the typeof operator on undefined; i.e., typeof(undefined), the value would be undefined.<br>"},{"id":12,"q":"Are Javascript and JScript the same?","a":"No, Javascript was provided by Netscape; whereas, JScript was provided by Microsoft.<br>"},{"id":13,"q":"Are Typescript and Javascript the same?","a":"Typescript is not the next version of Javascript but is developed by Microsoft and can be taken as a superset to Javascript; the code written in Typescript is later compiled into Javascript. Typescript adds new features like Interfaces, Generics, etc.<br>"},{"id":14,"q":"Name some of the Javascript frameworks.","a":"There are many Javascript Frameworks available today, but the most commonly used frameworks are:<br>Angular (ii) React (iii) Vue<br>"},{"id":15,"q":"Explain the typeof operator.","a":"The operator typeof is an example of Unary Operators, which is used by placing it before its operand; which can be of any type.<br>You may also like: Top 30 Interview Questions and Answers on Angular 5<br>Questions<br>"},{"id":16,"q":"What are anonymous functions in Javascript?","a":"An anonymous function allows a developer to create a function that has no name. In other words, anonymous functions can be used to store a bit of functionality in a variable and pass that piece of functionality around.<br>"},{"id":17,"q":"What is the difference between an Anonymous Function and a named function?","a":"Anonymous functions exist only after they are called; whereas, Named functions to exist even if not called.<br>"},{"id":18,"q":"What are self Executing Functions?","a":". Syntax:<br>{<br>;<br>()<br>Web Development Made Easy! Top Courses From $9.99<br>"},{"id":19,"q":"What is a function callback?","a":"The callback function is a mechanism to send one function to another function as an argument; i.e., passing func as an argument to another function.<br>"},{"id":20,"q":"What happens when the recursion calling is applied on two functions?","a":"The calling of recursion is possible in two functions, but the call comes to an end after some time.<br>"},{"id":21,"q":"Explain the term closure.","a":"The inner functions can be called as closure when it has access to the outer function's variables.<br>"},{"id":22,"q":"Explain the terms synchronous and asynchronous code.","a":"The synchronous code is something that should be finished before anything else can happen, or in other words, the synchronous code is blocking. And the Asynchronous code is something in which actions can happen and is not dependent on other actions- in other words, it is non-blocking.<br>"},{"id":23,"q":"Name the different types of pop up boxes in Javascript.","a":"alert() provides some information to the user with just an OK button (ii) confirm() asks a question to the user with two options Ok and cancel, and (iii) prompt() takes an input from the user.<br>"},{"id":24,"q":"What is the use of the ‘this’ keyword?","a":"The keyword ‘this’ refers to the current instance of the object when used inside a function. But, when used outside a function, it refers to the window object.<br>"},{"id":25,"q":"Is Exception handling possible in Javascript?","a":"With the latest version of Javascript, exception handling is possible; and this can be achieved using the following keywords try, catch and finally.<br>"},{"id":26,"q":"How is it possible to get the total number of arguments that are passed to a function?","a":"The arguments.length property helps in getting the total number of arguments that are passed to a function.<br>"},{"id":27,"q":"What is the difference between typeof and instanceof operators in Javascript?","a":"The typeof operator returns a string of what type the operand is. Whereas, the instanceof operator does not work with primitive data types; but works with objects and checks on what type the object is.<br>Explore Top 5 Skills That Make You A Sure Shot Programmer<br>Questions<br>"},{"id":28,"q":"What is DOM?","a":"is an object-oriented representation of the HTML elements. All the elements (or nodes) are part of window.document.<br>"},{"id":29,"q":"Expand BOM and explain it.","a":"BOM stands for Browser Object Model. Using BOM interaction with a browser is possible. Default object of the browser is a window.<br>"},{"id":30,"q":"What is the difference between window and document in Javascript?","a":"Javascript window is a global object which holds variables, functions, history, location; the document also comes under the window and can be considered as the property of the window.<br>"},{"id":31,"q":"What is the difference between innerHTML and innerText?","a":".innerHTML='one <br> two'  gives the output one and two in two lines as <br> in html is a new line. Whereas document.querySelector('p').innerText='one <br> two' gives the output of the text as it is in one line.<br>"},{"id":32,"q":"What is the difference between textContent and innerText?","a":"Let us have a paragraph element and a span element in it as a child element.<br><p>some text and a <span style=\"visibility: hidden\">span tag hidden <\\span>in it</p><br>Now, if the following two steps would result in the following-<br>.textContent); gives some text and a span tag hidden in it.<br>.innerText); gives some text and a in it.<br>"},{"id":33,"q":"What is the difference between HTMLCollection and NodeList?","a":"returns NodeList in which the forEach can be used directly to traverse the elements. Whereas, the getElementsByClassName() or getElementsByTagName() returns an HTMLCollection, which does not have a forEach by default.<br>"},{"id":34,"q":"How can an HTMLCollection be traversed?","a":") and then the traversal is possible using forEach.<br>"},{"id":35,"q":"What is the difference between childNode and children?","a":"A childNode, when used returns a NodeList. Whereas, children, when used; returns an HTMLCollection.<br>You may also like: Difference Between Java And Javascript<br>"},{"id":36,"q":"What is the difference between firstChild and firstElementChild?","a":"A firstChild when used returns the first node. It could be an HTML element or even a space, or a new line. Whereas, firstElementChild, when used returns the first HTML element only.<br>"},{"id":37,"q":"Name the two functions that are used to create an HTML element dynamically.","a":"To generate an html element dynamically, we need to use two functions:<br>var ele = createElement ('elementName'), which creates an element and<br>parentElement.appendChild(ele)<br>"},{"id":38,"q":"What is the difference between remove() and removeChild()?","a":"function just removes the element. Whereas, the removeChild() returns the deleted element.<br>"},{"id":39,"q":"List out the Mouse Events.","a":"There are altogether 9 mouse events. Here is the list:<br>1.    click: A single click<br>2.    dblclick: A double click<br>3.    mousedown: When the mouse button is clicked down.<br>4.    mouseup: When the mouse button is released up.<br>5.    mouseenter: When the mouse cursor enters an external element.<br>6.    mouseleave: When the mouse cursor leaves an external element.<br>7.    mouseover: When the mouse cursor enters an internal and external element.<br>8.    mouseout: When the mouse cursor leaves an internal and external element.<br>9.    mousemove: When the mouse cursor is moved.<br>"},{"id":40,"q":"What is the use of history object?","a":"By using the history object you can change or switch back to history pages or forward from current page to another page.<br>"},{"id":41,"q":"What is an Event Bubbling in Javascript?","a":"When an event is fired on an HTML element, the execution starts from that event and goes to its parent element. From there, the execution passes to its parent element and so on till the body element.<br>"},{"id":42,"q":"What does window.print() do in Javascript?","a":"function from window object prints the current web page when executed.<br>Read through: Top 55 Java Interview Questions and Answers for 2018<br>"},{"id":43,"q":"How can a Javascript code redirect the user to a different page?","a":"The window.location is assigned a value; i.e., a web link. On its execution, the Javascript code can redirect the user to the mentioned web link.<br>"},{"id":44,"q":"What are Cookies in Javascript?","a":"A Cookie is a variable that is stored on a client's/visitors machine. Using Cookies, the servers can identify the client and the client's transactions.<br>"},{"id":45,"q":"How do Javascript primitive/object types passed in functions?","a":"Primitive types in Javascript are passed by value; whereas, object types are passed by reference.<br>"},{"id":46,"q":"What is NaN in Javascript?","a":"NaN is a short form of Not a Number. When a string or something else is being converted into a number and that cannot be done, then we get to see NaN. A strange thing about NaN is that it is not equal to anything including itself.<br>"},{"id":47,"q":"List out all the falsifying tokens in Javascript.","a":"There are 6 tokens that falsify in Javascript and they are false, null, undefined, 0, NaN.<br>"},{"id":48,"q":"What is Currying in Javascript?","a":"A partial invocation of a Javascript function is called Currying. Few arguments of a function are processed and a function is returned. Few more arguments are added by the returning function.<br>"},{"id":49,"q":"When do we use JSON.stringify()?","a":"method is used to convert a Javascript data to a string.<br>"},{"id":50,"q":"What does unshift() function do in Javascript?","a":"which inserts elements into an array at the end of it, the unshift() function inserts elements at the beginning of an array.<br>"}];