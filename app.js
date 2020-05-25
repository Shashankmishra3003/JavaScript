// "use strict"; To find errors in the code

console.log('Hello World!!');

/* Data Types
 undefined, null, boolean, string, number, symbol and object*/

 var myName = 'Shashank';
 
 let newName = 'Mishra';

 const pi = 3.24;

 //Including quoted string; Escape character, use \"\"

 var str = "I am a \"double\" quoted string ";
 console.log(str);

 //A single quote can be used to get rid of escape character

 var str = 'I am a "double" quoted string';
 console.log(str);
 /*
 \'
 \"
 \\
 \n
 \r => carriage return
 \t 
 \b => backspace
 \f form feed
 */

//Length of String

var length = str.length;
console.log(length);

//Getting value at an index in string

var letter = str[3];
console.log(letter);

//Strings are immutable, we cannot chage an individual letters in a string.

//============================= Arrays ===========================================

//Array => push() to append data at the end of Array.

var myArray = ['my','name','is'];
myArray.push('shashank');

console.log(myArray);

// POP removes the last element from Array
console.log(myArray.pop());

//Shify in Array: removes the first element from Array

console.log(myArray.shift());

//Unshift: Adds element to begining of Array
console.log(myArray); 

myArray.unshift(['my', 'name']);

console.log(myArray);

//========================= Functions ======================================

//Global Scope
var myGlobal = 10;

function fun1(){
    oppsGlobal = 5; // since var keyword is not used, oppsGlobal becomes Global and can be accessed outsite fun1()
}

function fun2(){
    if(typeof oppsGlobal != 'undefined'){
        console.log("oppsGlobal is " + oppsGlobal);
    }
    else{
        console.log('oppsGlobal is undefined');
    }
}

fun1();
fun2();

//Local Scope

function myLocalScope(){
    var myVar = 5; // this is local to this function
    console.log('MY Local is ' + myVar);
}

//Local vs Global scope; If a global variable is changed locally in a function then local variable takes presedence

var newGlobal = 'Global Value';

function newFun(){
    var newGlobal = 'Local Value'; // Assigning a local value

    return newGlobal;
}

console.log(newFun()); // prints local value
console.log(newGlobal); // prints Global value

//Queue using List

function operation(array, item){
    array.push(item);

    var firstVal = array.shift();

    return firstVal;
}

var queue = [1,2,3,4,5];

console.log('Queue Before: ' + queue);
console.log(operation(queue, 6));
console.log('Queue After: ' + queue);

// Strict equality === operator; does not perform type conversion of 2 types.
/*
3 === '3'; returns false because the types are different
3 == '3'; returns true, because type conversion is performed before conversion
*/

function testStrict(val){
    if(val === 7){
        console.log('Equal');
    }
    else{
        console.log('Not Equal');
    }
}

testStrict(7);  // Equal
testStrict('7'); // Not Equal

//Strict Inequality operator !==

function testStrictInEquality(val){
    if(val !== 7){
        console.log('Not Equal');
    }
    else{
        console.log('Equal');
    }
}

testStrictInEquality(8);

// Skip the IF and Else block if the function returns boolean

function isLess(a,b){
    return a < b;
}
console.log(isLess(2,4));

//================================ Counting cards ========================================================

function countCard(card)
{
    var count = 0;

    switch(card){
        case 'A':
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
        case 'J':
        case 'Q':
        case 'K':
            count--;
            break;
    }

    var betOrHold = 'Hold';
    if(count > 0)
    {
        betOrHold = 'Bet';
    }

    return count + " " + betOrHold;

}

console.log(countCard(2));
console.log(countCard('K'));
console.log(countCard('7'));

// =======================================OBJECTS==========================
var ourDog = {
    'name': 'camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything']
};

var testObj = {
    'hat': 'ballcap',
    'the shirt': 'jersey'
};

// Access value using dot notation
var hatValue = testObj.hat;
 console.log(hatValue);

//Access value using braket notation []; when the property has space
var shirtValue = testObj['the shirt'];
console.log(shirtValue);

//Updating Object properties

ourDog.name = 'Tommy';

console.log(ourDog.name);

//Adding new property to Object

ourDog.bark = 'bow bow';
console.log(ourDog);

//Delete Property form Object

delete ourDog.bark;
console.log(ourDog);

//Using Object for Lookups; Like Dictinonary; This eliminates the use of Creating Switch cases, we create an
// object which has property as the case and vlaue as the result for the case.

function newLookUp(val){
    var result = '';

    var lookup = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago'
    };

    result = lookup[val];

    console.log(result);
}

newLookUp('alpha');
newLookUp('bravo');

//check if Object has a property using hasOwnProperty()

var newObj = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago'
};

function checkObj(checkProp){
    if(newObj.hasOwnProperty(checkProp)){
        return newObj[checkProp];
    }
    else{
        return 'Not found!';
    }
}

console.log(checkObj('bravo'));
console.log(checkObj('delta'));

//Nested Objects
var myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'seat': 'crumbs'
        },
        'outside': {
            'trunk': 'jack'
        }
    }
};

var gloveBoxContent = myStorage.car.inside['glove box'];
var outsideContent = myStorage.car.outside.trunk;

console.log(gloveBoxContent + " AND " + outsideContent);

//Array of Objects

var newArray = [
    {                           //Object 1
        type: 'flowers',
        list: [
            'rose',
            'tulip'
        ]
    },
    {                           //Object 2, two properties type and list
        type: 'trees',
        list: [
            'fir',
            'pine'
        ]
    }
]

var objectType = newArray[1].type;
var objValue = newArray[1].list[0];

console.log(objectType + " and the value is " + objValue);

//==================================== Exercise =========================================
// Adding and Deleting nested objects

var collection = {
    '2548' : {
        'album': 'Sloppery when Wet',
        'artist': 'Bon Jovi',
        'tracks': [
            'Let it Rock',
            'You Give Love a Bad Name'
        ]
    },
    '2568' : {
        'album': '1999',
        'artist': 'Prince',
        'tracks': [
            '1999',
            'Little Red Conrvette'
        ]
    },
    '1245' : {
        'artist': 'Prince',
        'tracks': []
    },
    '5439':{
        'album': 'ABBA Gold'
    }
};

//Keeping a copy of the Collection object
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecord(id, property, value)
{
    if(value === ' '){
        delete collectio[id][property];
    } else if(property === 'tracks'){
        collection[id][property] = collection[id][property] || [];
        collection[id][property].push(value);
    } else{
        collection[id][property] = value;
    }
    return collection;
}


console.log(updateRecord('2568','tracks','test'));
console.log(updateRecord('5439','artist','ABBA'));

//=============================== Exercise ============================================

var contacts = [
    {
        'firstName': 'Shashank',
        'lastname': 'Mishra',
        'number': '123456789',
        'likes': ['pizza','chicken','Brownie']
    },
    {
        'firstName': 'Shrenik',
        'lastname': 'Daga',
        'number': '987456321',
        'likes': ['pizza','Paneer','Brownie']
    }

]

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || 'No such Property';
        }
    }
    return 'Not found!';
}

console.log(lookUpProfile('Shashank','number'));
console.log(lookUpProfile('Arjun','number'));
console.log(lookUpProfile('Shrenik','data'));

//Generate random Fraction

console.log(Math.random());

//Generate Random whole numbers

console.log(Math.floor(Math.random() * 10)); // random number between 1 and 9

//ParseInt function: Convert string to integer

function convertToInteger(str){
    return parseInt(str);
}

console.log(typeof (convertToInteger('20')));
console.log(convertToInteger('string')); // return NaN (Not a Number) if the passed value is not a number

//ParseIn with Redix: specify whether the value is decimal(10) or binary(2)

console.log(parseInt('10011', 2)); // Second parameter specifies the type of number

//===================================== Ternary Operator ==================================================

//condition : statement-if-true : statement-if-false

function checkEqual(a,b){
    return a === b ? true : false;
}

console.log(checkEqual(2,2));

// Multiple Turnary operator: We add another condition for the false value, making it a nested condition

function checkSign(num){
    return num > 0 ? 'positive' : num < 0 ? 'negetive' : 'zero';
}
console.log(checkSign(10));
console.log(checkSign(0));

// ===================================== LET and VAR =====================================================

//let does not allow to declare same variale twice.
let name = 'Shashank'
//let name = 'mishra'; // Error !! name has already beem defined

//Scope of let and var; let has block scope, if a variable is decalred inside if statement using let then it's scope is limited to
// the if statement. But if it was decalred using var it can be accessed outside the if statement making it global;

//const declares read-only variables.
// We can change the contents of the const array

const arrayNew = [1,2,3,4];
console.log(arrayNew); //Output: 1,2,3,4

function editInPlace(){
    arrayNew[0] = 9;
}
editInPlace();
console.log(arrayNew); // output: 9,2,3,4

//Prevent Object Mutation: Object.freeze(): Objects declared constant will not change;

function freezeObject(){
    const Math_Constant = {
        PI: 3.14
    };

    Object.freeze(Math_Constant);

    try{
        Math_Constant.PI = 99;
    } catch(ex){
        console.log(ex);
    }

    return Math_Constant.PI;
}

console.log(freezeObject());

//========================================= Arrow Function =========================================

//Can be Used in place of anonymous function;

var magic = function(){ // Anonymous function
    return new Date();
};
console.log(magic());

const arrowMagic = () => new Date();  // we skipped the {} because it only return the value
console.log('Arrow Function: ' + arrowMagic());

//Arrow funciton with parameters

var concatArray = (array1,array2) => array1.concat(array2); // we skipped the {} because it only return the value

console.log(concatArray([1,2],[3,4,5]));

//Arrow function with Higher Order Arrow functions (Map, Filter and reduce)

const realArray = [4, 2.5, -6, 7,];

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // filter will return an Array containing 4 and 7 and map computes square
    return squaredInt;
}

//Point to note is, arrow function of map has no (), because there is only one parameter and we cna skip the ()

console.log(squareList(realArray));

//====================================== Default parameters =======================================

const increment = (function() {
    return function increment(number, value = 1){  // defaulr value is 1 if no second parameter
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

// Rest Operator(...): allows to have variable number of arguments

const sum = (function (){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log("sum is: " + sum(1,2,3));  // passing 3 arguments
console.log("Sum is : " + sum(1,2,3,2,4)); // passing 5 arguments

// Spread Operator: Usefull for copying one array content into another.

const arr1 = ['JAN','FEB','MARCH','APRIL'];

let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();

console.log(arr2); // Without spread operator the 2 aarays become equal and arr2 will have same modified values as arr1;
console.log(arr1);

//======================================== Destructuring Assignment =================================
// To assign variables from objects 

var voxel = {
    x: 3,
    y: 4,
    z: 5
};

// Old way 
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//New Way, faster 

const { x : a, y : b, z : c } = voxel;

console.log(" sum of Variables is: " + a + b + c);

//Destructuring with Nested objects

const LOCAL_FORECAST = {
    today : { min : 72, max : 83 },
    tomorrow : { min : 75, max : 90 }
};

function getMaxOfTomorrow(forecast){

    const {tomorrow : { max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}

console.log(" max of Tomorrow is " + getMaxOfTomorrow(LOCAL_FORECAST));

//Using Destructuring Assignment with the Rest Operator

//Reassign array elements by reomving first 2 elements

const source = [1,2,3,4,5,6,7];

function removeFirstTwo(list){
    const [ , , ...result] = list; //The commas skip the first 2 elements of list and copy the rest to result

    return result;
}

const result = removeFirstTwo(source);
console.log(result);

//Use destructuring Assignment to pass Object as a function Parameter;
// Passing only the properties which are needed to the function instead of passing the entire object.
//Usefull in API calls

const  statistics = {
    max: 56.78,
    median: 34.54,
    mode: 23.87,
    min: -0.75
};

const half = (function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    };
})();
console.log(" Displaying the sum of min and max: " + half(statistics));

// =========================================== Template Literals ==========================================
//Used to create complex string using ` `, create multiline string, use '' and "" inside string without escaping them.

const person = {
    name: 'shashank Mishra',
    age: 28
};

const greetings = `Hello my name is ${person.name}! 
    I am ${person.age} years old.`;                 //The result is displayed on the console as it is entered in 2 diferent lines.

console.log(greetings);


//====================================== Exercise =========================================================

const resultObj = {
    success: ['max-length', 'no-amd', 'prefer-arrow-function'],
    failure: ['no-var' ,'var-on-top' ,'linebreak'],
    skipped: ['id-blacklist', 'no-dup-keys']
};

function makeList(arr){
    const resultDisplayArray = [];

    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(resultObj.failure);
console.log(resultDisplayArray);


//Tagged Template Literals:

var a1 = 5;
var b1 = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum is ${a1 + b1}
Product is ${a1 * b1}
Division is ${b1 / a1}`;


// ===================================ES6=========================================================================

//================================ Object Literal declaration using siple fields ==================================
// usefull in creating object from a given data and returning: ES6 feature

const createPerson = (name,age,gender) => ({name,age,gender}); // no need to manually assign values
console.log(createPerson('Shashank Mishra', 25, 'male'));

//=================================== Onject containing Function ==================================================
//Old way
/*
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log("Bicycle Gear: " + bicycle.gear);
*/

//New Way
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log("Bicycle Gear: " + bicycle.gear);

// class Syntax to Define a Constructor function

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//Getter and Setter for Class

class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

//Example

function makeClass() {

    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass(); // Gets the Thermostat object
const thermos = new Thermostat(76); // initialize temp to 76

let temp = thermos.temperature; // no paranthese here

console.log("OLD Temp: "+ temp);
thermos.temperature = 26;
temp = thermos.temperature;

console.log("New Temp: "+ temp);


 //================================== Classes =============================================

 /*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor (sides){   // sides is an array 
        this._sides = sides;
    }

    perimeter(){
        let perimeter = 0
        for(let i = 0; i < this._sides.length; i++){
            perimeter += this._sides[i];
        }
        return perimeter;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
console.log( "Area of Polygon is: " + rectangle.perimeter());

// ================================== Extended Functional class ============================
//create a method for a class outside class declaration;

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w * this.h;
}

//=================================== Inheritance ==============================================
// Square extends Rectangle and initializes sides.
class Square extends Rectangle{
    constructor(s){
        super(s); // super needed to access the parent class members.
        this.w = s;
        this.h = s;
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log("Area of Base class rectangle: " + rec.area());
console.log("Area of derived class Square: " + sqr.area());

//==================================== Sync Callback ==================================================
// callback is a function that gets passed to the parameter of another function and runs the functions call finishes

const sayName = (name, cb) => {
    console.log('running the function sayName');
    console.log('running the function sayName');

    cb();
}

function callback(){
    console.log('Running the Callback function');
}

sayName('shashank', callback);  //Specifying the callback function name
//===============================Async Callback ========================================================
// first gets added to the callstack is then executes.
// Nest, setTimeout gets added to the stack, since it has a callback function(arrow function) and is 
// supposed to be executed after 2 seconds, it gets added to the webAPI stack and Call stack is cleared for next line.
// Last gets printed
// after 2 seconds, the callback gets called and id moved to the call stack and from Callback is printed.

console.log('first');

setTimeout(() => {
    console.log('From Callback');
},2000);

console.log('Last');

//===================================== async await =======================================================

async function getData(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'),3000);
    });

    let result = await promise; // waits for 3 seconds for getting the result, because setTimeout() waits for 3 seconds.
    console.log(result);        // we don't need to write then because of await
}
getData();