var jsdata:object[] = [
{Q:`
Explain what is Javascript?
`,A:`
Javascript is an object-oriented computer programming language commonly used to create interactive effects within web browsers.It is first used by the Netscape browser, that provides access to the HTML document object model (DOM), provides access to the browser object model (BOM). Javascript syntax looks a lot like java, c or c++ syntax.
`},{Q:`
List some data types supported by Javascript?
`,A:`
Undefined
Null
Boolean
String
Symbol
Number
Object
`},{Q:`
What close() does in Javascript?
`,A:`
In Javascript close() method is used to close the current window. You must write window.close() to ensure that this command is associated with a window object and not some other JavaScript object.
`},{Q:`
What is the difference between let and var?
`,A:`
Both var and let are used for variable/ method declaration in javascript but the main difference between let and var is that var is function scoped whereas let is block scoped.
`},{Q:`
Explain Closures in JavaScript?
`,A:`
Closures are the combination of lexical environment and function within which the function was declared. This allows JavaScript programmers to write better, more creative, concise and expressive codes. The closure will consist of all the local variables that were in-scope when the closure was created.

Sure, closures appear to be complex and beyond the scope, but after you read this article, closures will be much more easy to understand and more simple for your everyday JavaScript programming tasks. JavaScript is  a very function-oriented language it gives the user freedom to use functions as the wish of the programmer.
`},{Q:`
Explain JavaScript Event Delegation Model?
`,A:`
In JavaScript, there is some cool stuff that makes it the best of all. One of them is Delegation Model. When capturing and bubbling, allow functions to implement one single handler to many elements at one particular time then that is called event delegation. Event delegation allows you to add event listeners to one parent instead of specified nodes. That particular listener analyzes bubbled events to find a match on the child elements. Many people think it to be complicated but in reality, it is very simple if one starts understanding it.
`},{Q:`
Describe negative infinity in JavaScript?
`,A:`
NEGATIVE_INFINITY property represents negative infinity and is a number in javascript, which is derived by ‘dividing negative number by zero’. It can be better understood as a number that is lower than any other number. Its properties are as follows:
– A number of objects need not to be created to access this static property.
– The value of negative infinity is the same as the negative value of the infinity property of the global object.

The values behave differently than the mathematical infinity:

Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
Zero multiplied by NEGATIVE_INFINITY is NaN.
NaN multiplied by NEGATIVE_INFINITY is NaN.
NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
Any number divided by NEGATIVE_INFINITY is zero.
`},{Q:`
Explain function hoisting in JavaScript?
`,A:`
JavaScript’s default behavior that allows moving declarations to the top is called Hoisting. The 2 ways of creating functions in JavaScript are Function Declaration and Function Expression. Let’s find out more about these:

Function Declaration
A function with the specific parameters is known as function declarations. To create a variable in JavaScript is called declarations.

e.g:

hoisted(); // logs "foo"

function hoisted() {

  console.log('foo');

}
Function Expression

When a function is created by using an expression it is called function expression.

e.g:

notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {

   console.log('bar');

};
`},{Q:`
What is the use of let & const?
`,A:`
In modern javascript let & const are different ways of creating variables.Earlier in javascript, we use the var keyword for creating variables. let & const keyword is introduced in version ES6 with the vision of creating two different types of variables in javascript one is immutable and other is mutable.
const: It is used to create an immutable variable. Immutable variables are variables whose value is never changed in the complete life cycle of the program.
let: let is used to create a mutable variable. Mutable variables are normal variables like var that can be changed any number of time.
`},{Q:`
Explain Arrow functions?
`,A:`
An arrow function is a consise and short way to write function expressions in Es6 or above.A rrow functions cannot be used as constructors and also does not supports this, arguments, super, or new.target keywords. It is best suited for non-method functions. In general an arrow function looks like const function_name= ()=>{}

 const greet=()=>{console.log('hello');}
 greet();
`},{Q:`
What are exports and imports?
`,A:`
Imports and exports help us to write modular javascript code. Using Imports and exports we can split our code into multiple files. Imports allow taking only some specific variables or methods of a file. We can import methods or variables that are exported by a module. See the below example for more detail.

 //index.js

 import name,age from './person'; 

 console.log(name);
 console.log(age);

 //person.js

 let name ='Sharad', occupation='developer', age =26;

 export { name, age};
`},{Q:`
What is difference between module.exports and export?
`,A:`
The module is a plain JavaScript object with an exports property. Exports is a plain JavaScript variable that happens to be set to module.exports. At the end of your file, node.js will basically ‘return’ module.exports to the require function. A simplified way to view a JS file in Node could be this:

var module = { exports: {} };
var exports = module.exports;

// your code
return module.exports;
If you set a property on exports, like exports.a = 9;, that will set module.exports.a as well because objects are passed around as references in JavaScript, which means that if you set multiple variables to the same object, they are all the same object; so then exports and module.exports are the same objects.
But if you set exports to something new, it will no longer be set to module.exports, so exports and module.exports are no longer the same objects.

Source : https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
`},{Q:`
How do you import all exports of a file as an object?
`,A:`
import * as object name from ‘./file.js’ is used to import all exported members as an object. You can simply access the exported variables or methods using dot (.) operator of the object.

Example:

objectname.member1;
objectname.member2;
objectname.memberfunc();
`},{Q:`
Explain “use strict” ?
`,A:`
“use strict” is a javascript directive that is introduced in Es5. The purpose of using “use strict” directive is to enforce the code is executed in strict mode. In strict mode we can’t use a variable without declaring it. “use strict” is ignored by earlier versions of Javascript.
`},{Q:`
In Javascript are calculations with fractional numbers guaranteed to be precise?
`,A:`
NO, calculations with fractional numbers are not guaranteed to be precise in Javascript
`},{Q:`
List the comparison operators supported by Javascript?
`,A:`
Javascript supports below comparison operators

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
== Equal to
!= Not Equal to
=== Equal to with datatype check
!== Not equal to with datatype check
`},{Q:`
How do you declare variables in Javascript?
`,A:`
In Javascript variable are declared using the var keyword.A variable must begin with A letter, $ or _.

eg. var myVar=”Online Interview Questions”;

PS: All variables in Javascript are Case sensitive.
`},{Q:`
What will happen if an infinite while loop is run in Javascript?
`,A:`
The program will crash the browser.
`},{Q:`
List HTML DOM mouse events?
`,A:`
HTML DOM mouse events

onclick
ondblclick
mousemove
mousedown
mouseover
mouseout
mouseup
`},{Q:`
How to get the last index of a string in Javascript?
`,A:`
string.length-1 is used to get the last index of a string in Javascript

Example Usage:-

var myString="JavascriptQuestions";
console.log(myString.length-1);
`},{Q:`
How to get the primitive value of a string in Javascript?
`,A:`
In Javascript valueOf() method is used to get the primitive value of a string.

Example Usage:

var myVar= "Hi!"
console.log(myVar.valueOf())
`},{Q:`
What are the primitive data types in JavaScript?
`,A:`
A primitive is a basic data type that’s not built out of other data types. It can only represent one single value. All primitives are built-in data types by necessity, (the compiler has to know about them,) but not all built-in data types are primitives.

In JavaScript there are 5 primitive data types are available they are undefined, null, boolean, string and number are available.Everything else in Javascript is an object.
`},{Q:`
Explain Event bubbling and Event Capturing in JavaScript?
`,A:`
Event Capture and Bubbling: In HTML DOM API there are two ways of event propagation and determines the order in which event will be received. The two ways are Event Bubbling and Event Capturing. The first method event bubbling directs the event to its intended target, and the second is called event capture in which the event goes down to the element.

Event Capture
The capture procedure is rarely used but when it’s used it proves to be very helpful. This process is also called ‘trickling’. In this process, the event is captured first by the outermost element and then propagated to the innermost element. For example:

<div>

<ul>

<li></li>

</ul>

</div>
From the above example, suppose the click event did occur in the ‘li’ element, in that case capturing event it will be first handled ‘div’, then ‘ul’ and at last the target element will be hit that is ‘li’

Event Bubbling
Bubbling just works like the bubbles, the event gets handled by the innermost element and then propagated to the outer element.

<div>
 <ul>

<li></li>

</ul>

</div>
From the above example, suppose the click event did occur in the ‘li’ element in bubbling model the event will be handled first by ‘li’ then by ‘ul’ and at last by ‘div’ element.
`},{Q:`
What does the instanceof operator do?
In Javascript instanceof operator checks whether the object is an instance of a class or not:

Example Usage

Square.prototype = new Square();
console.log(sq instanceof Square); // true
`},{Q:`
What is Javascript BOM?
`,A:`
BOM stands for “Browser Object Modal” that allows Javascript to ‘talk’ to the browser, no standards, modern browsers implement similar BOMS – window, screen, location, history, navigator, timing, cookies.
`},{Q:`
What are different types of Popup boxes available in Javascript?
A:
In Javascript there are 3 types of Popup Boxes are available, they are

Alert
Confirm
Prompt
`},{Q:`
How can you create an array in Javascript?
`,A:`
There are 3 different ways to create an array in Javascript. They are

By array literal
usage:
 var myArray=[value1,value2...valueN];
By creating instance of Array
usage:
var myArray=new Array();
By using an Array constructor
usage:
var myArray=new Array('value1','value2',...,'valueN');
`},{Q:`
What is the ‘Strict’ mode in JavaScript and how can it be enabled?
`,A:`
Strict mode is a way to introduce better error-checking into your code. When you use strict mode, you cannot, for example, use implicitly declared variables, or assign a value to a read-only property, or add a property to an object that is not extensible.

You can enable strict mode by adding “use strict”; at the beginning of a file, a program, or a function. This kind of declaration is known as a directive prologue. The scope of a strict mode declaration depends on its context. If it is declared in a global context (outside the scope of a function), all the code in the program is in strict mode. If it is declared in a function, all the code in the function is in strict mode.
`},{Q:`
How to calculate Fibonacci numbers in JavaScript?
`,A:`
Calculating Fibonacci series in JavaScript
Fibonacci numbers are a sequence of numbers where each value is the sum of the previous two, starting with} and 1. The first few values are}, 1, 1, 2, 3, 5, 8, 13 ,…,

function fib(n) {
	var a=0, b=1;
	for (var i=0; i < n; i++) {
		var temp = a+b; 
		a = b;
		b = temp;
	}
	return a;
}
`},{Q:`
What is the difference between the substr() and substring() functions in JavaScript?
`,A:`
Difference between the substr() and substring() functions in JavaScript.
The substr() function has the form substr(startIndex,length). It returns the substring from startIndex and returns ‘length’ number of characters.

var s = "hello";
( s.substr(1,4) == "ello" ) // true
The substring() function has the form substring(startIndex,endIndex). It returns the substring from startIndex up to endIndex – 1.

var s = "hello";
( s.substring(1,4) == "ell" ) // true
}
`},{Q:`
What are different types of Inheritence? Which Inheritance is followed in Javascript.
`,A:`
There are two types of Inherientence in OOPS Classic and Prototypical Inheritance. Javascript follows Prototypical Inheritance.
}
`},{Q:`
What is output of undefined * 2 in Javascript?
`,A:`
nan is output of undefined * 2.
}
`},{Q:`
How to add/remove properties to object dynamically in Javascript?
`,A:`
You can add a property to an object using object.property_name =value , delete object.property_name is used to delete a property.

Example:


    let user = new Object();
    // adding a property
    user.name='Anil';
    user.age  =25;
    console.log(user);
    delete user.age;
    console.log(user);
 
}
`},{Q:`
How to convert Javascript date to ISO standard?
`,A:`
toISOString() method is used to convert javascript date to ISO standard. It converts JavaScript Date object into a string, using the ISO standard.

Usage:

var date = new Date();
var n = date.toISOString();
console.log(n);
// YYYY-MM-DDTHH:mm:ss.sssZ
}
`},{Q:`
How to get inner Html of an element in JavaScript?
`,A:`
InnerHTML property of HTML DOM is used to get inner Html of an element in JavaScript.

Example Usage:

This is inner Element
<script type="text/javascript">
	var  inner= document.getElementById("inner").innerHTML ;
	console.log(inner); // This is inner Element
	document.getElementById("inner").innerHTML = "Html changed!";
	var  inner= document.getElementById("inner").innerHTML ;
	console.log(inner); // Html changed!
</script>

}
`},{Q:`
How to clone an object in Javascript?
`,A:`
Object.assign() method is used for cloning an object in Javascript.Here is sample usage

	var x = {myProp: "value"};
	var y = Object.assign({}, x); 
}
`},{Q:`
List different ways of empty an array in Javascript?
`,A:`
In Javascript, there are many ways to empty an array in Javascript, below we have listed 4 major

By assigning an empty array.

var arr1 =[1,4,5,6];
arr1=[];
By assigning array length to}.

var arr2 =[1,4,5,6];
arr2.length=0;
By poping the elements of the array.

var arr2 =[1,4,5,6];
while(arr.length >}) {
    arr.pop();
}
By using .splice() .

var arr =[1,4,5,6];
arr.splice(0,arr.length)
}
`},{Q:`
How to get an element by class in JavaScript ?
`,A:`
document.getElementsByClassName() method is used in Javascript to get an element with a class name.

getElementsByClassName()
Method Name	getElementsByClassName
Syntax	document.getElementsByClassName('className')
Parameter	String (name of class)
Output	Array of HTMLCollection that have inputted className
}
`},{Q:`
Explain Typecasting in Javascript?
`,A:`
In Programming whenever we need to convert a variable from one data type to another Typecasting is used. In Javascript, we can do this via library functions. There are basically 3 typecasts are available in Javascript Programming, they are:

Boolean(value): Casts the inputted value to a Boolean
Number(value): Casts the inputted value to an Integer or Floating point Number.
String(value) : Casts the inputted value value a string
}
`},{Q:`
How to encode and decode a URL in JavaScript?
`,A:`
encodeURI() function is used to encode an URL in Javascript.It takes a url string as parameter and return encoded string. Note: encodeURI() did not encode characters like / ? : @ & = + $ #, if you have to encode these characters too please use encodeURIComponent(). Usage:

var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI() function is used to decode an URL in Javascript.It takes a encoded url string as parameter and return decoded string. Usage:

var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI(encoded_uri);
}
`},{Q:`
How to you change the title of the page by JavaScript?
`,A:`
You can change the title of a webpage using setting the title property of the document object.

Example usage

document.title="My New Title";
}
`},{Q:`
What is difference between deep and shallow object coping in JavaScript?
`,A:`
`},{Q:`
List some Unit Testing Frameworks JavaScript
`,A:`
Below is the list of few most Popular Javascript Unit Testing Frameworks:

Unit.js
Jasmine
Karma
Chai
AVA
Mocha
JSUnit
QUnit
Jest
}
`},{Q:`
How to add a new property in existing function JavaScript?
`,A:`
`},{Q:`
Explain JavaScript Accessors ?
`,A:`
`},{Q:`
List few difference between primitive and non primitive JavaScript data types?
`,A:`
`},{Q:`
Explain higher-order functions in JavaScript?
`,A:`
`},{Q:`
Explain few difference between null, undefined or undeclared JavaScript variable?
`,A:`
`},{Q:`
How host objects are different from native objects in JavaScript?
`,A:`
`},{Q:`
What is difference between var x =1; and x=1;?
`,A:`
`},{Q:`
Explain spread operator in JavaScript?
`,A:`
`}
,{Q:`
How to call a function in every x seconds in JavaScript?
`,A:`
`},{Q:`
Explain Promise in JavaScript?
`,A:`
`},{Q:`
What is difference between Array.splice() and Array.slice() method in JavaScript?
`,A:`
`},{Q:`
Is JavaScript multi-threaded or single-threaded?
`,A:`
JavaScript is single-threaded.
`},{Q:`
Explain JavaScript Debounce Function?
`,A:`
`},{Q:`
List some Design patterns in JavaScript?
`,A:`
`},{Q:`
What is console.time() and console.timeEnd()? What is its syntax, and why is it used?
`,A:`
`}
,{Q:`
What are different types of Scope Chain available in JavaScript?
`,A:`
`},{Q:`
How to remove duplicate values from a JavaScript array?
`,A:`
We can use array.indexOf method to check a value exists or not. See below example to remove duplicate values.

let duplicates = ['delhi','kanpur','kanpur','goa','delhi','new york'];

function removeDuplicatesValues(arr){
    let unique_array = [];
    for(let i =};i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

console.log(removeDuplicatesValues(duplicates));
}
`},{Q:`
How to redirect a page to another page in Javascript?
`,A:`
`},{Q:`
Is it possible to do 301 redirects in Javascript ?
`,A:`
JavaScript entirely runs on the client machine. 301 is response code that is sent by the server as a response. So it is not possible to do 301 Redirects In JavaScript.
`},{Q:`
Write a program to reverse a string in pure JavaScript?
`,A:`
`},{Q:`
Write program to remove duplicate in an array ?
`,A:`
`},{Q:`
List few Difference between JAVA and JavaScript?
`,A:`
`},{Q:`
Explain MUL function in Javascript?
`,A:`
`},{Q:`
List few advantages of using JavaScript?
`,A:`
Javascript is executed on user's computer, the meaning is that whatever you do in Javascript will not add any processing strain on the server. and that's why it is called as the client-side programming language. And this feature makes your sites responsive for the end user and less expensive for you in terms of server traffic.
With the help of Javascript, you can create highly responsive interfaces which will improve the user experience and provide dynamic functionality, without waiting for the server to show another page.
If you want to make online systems available offline and sync automatically once the computer goes online, then Javascript is the best technology you can use. you can do this using the right browser add-ons (Such as Google or Yahoo Browser Plus).
Content loading and changing it dynamically. Using Ajax in Javascript you can load content into the document if and when the user needs it, without reloading the entire page.
Using the Principles of unobtrusive JavaScript(defensive Scripting), JavaScript can test for what is possible in your browser and react accordingly.
`}
];