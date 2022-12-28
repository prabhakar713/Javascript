// Numbers
//javascript is untyped language so we can use numbers as strings 
const wholeNumber=10;
const decimalNumber=10.5;

console.log(wholeNumber); //10
console.log(decimalNumber); //10.5
console.log(typeof wholeNumber); //number
console.log(typeof decimalNumber); //number
console.log(typeof 10); //number
console.log(typeof 10.5); //number





//mathematical operation
const firstNumber=10;
const secondNumber=5;
const result=firstNumber+secondNumber; //15
console.log(result); //15

const result1=firstNumber-secondNumber; //5
console.log(result1); //5

const result2=firstNumber*secondNumber; //50
console.log(result2); //50

const result3=firstNumber/secondNumber; //2
console.log(result3); //2

const result4=firstNumber%secondNumber; //0
console.log(result4); //0

const result5=firstNumber**secondNumber; //100000
console.log(result5); //100000





//increment and decrement
let number=10;
console.log(number); //10
number++;
console.log(number); //11
number--;
console.log(number); //10
number+=10;
console.log(number); //20
number-=10;
console.log(number); //10
number*=10;
console.log(number); //100
number/=10;
console.log(number); //10
number%=10;
console.log(number); //0
number**=10;
console.log(number); //0






//math object
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.round(2.4)); //2
console.log(Math.round(2.5)); //3
console.log(Math.round(2.6)); //3
console.log(Math.ceil(2.4)); //3
console.log(Math.ceil(2.5)); //3
console.log(Math.ceil(2.6)); //3
console.log(Math.floor(2.4)); //2
console.log(Math.floor(2.5)); //2
console.log(Math.floor(2.6)); //2
console.log(Math.sqrt(4)); //2
console.log(Math.abs(-4)); //4
console.log(Math.pow(2, 3)); //8
console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9, 10)); //2
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9, 10)); //10
console.log(Math.random()); //0.123456789
console.log(Math.random()); //0.123456789
console.log(Math.random()); //0.123456789






//random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); //1

//random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1); //1

const string="hello";
const secondNumber1=5;
const result6=string/secondNumber1; //NaN
console.log(result6); //NaN
console.log(typeof result6); //number








//Booleans
const isTrue=true;
const isFalse=false;
console.log(isTrue); //true
console.log(isFalse); //false
console.log(typeof isTrue); //boolean
console.log(typeof isFalse); //boolean

const isColl=true;
if(isColl){ 
    console.log("hello"); //hello
}
else{
    console.log("bye");
}

const isColl1=false;
if(isColl1){
    console.log("hello");
}
else{
    console.log("bye"); //bye
}

const age=20;
console.log(age>18); //true
console.log(age<18); //false
console.log(age>=18); //true
console.log(age<=18); //false
console.log(age==18); //false
console.log(age!=18); //true







//null
//we dont know the value of the variable so we put null in it after that we can assign the value anytime
const nullVariable=null;
console.log(nullVariable); //null
console.log(typeof nullVariable); //object

//null is an object in javascript 
let age1=null;
console.log(age1); //null
console.log(typeof age1); //object  // this is a bug in javascript Note: null is not an object in other languages
age1=20;
console.log(age1); //20
console.log(typeof age1); //number
 






//undefined  //variable is declared but not assigned any value 
let undefinedVariable;
console.log(undefinedVariable); //undefined
console.log(typeof undefinedVariable); //undefined






//NaN
console.log(10 / "hello"); //NaN
console.log(10 / "10hello"); //NaN
console.log(10 / "10hello10"); //NaN
console.log(10 / "10hello10hello"); //NaN

//NaN is a number
console.log(typeof NaN); //number

//NaN is not a number
console.log(NaN === NaN); //false
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN("10")); //false
console.log(isNaN("hello")); //true
console.log(isNaN("10hello")); //true
console.log(isNaN("10hello10")); //true
console.log(isNaN("10hello10hello")); //true








//infinity
console.log(10 / 0); //Infinity
console.log(-10 / 0); //-Infinity
console.log(10 / -0); //-Infinity
console.log(-10 / -0); //Infinity
console.log(0 / 0); //NaN
console.log(Infinity / Infinity); //NaN
console.log(Infinity / -Infinity); //NaN
console.log(-Infinity / Infinity); //NaN
console.log(-Infinity / -Infinity); //NaN

//infinity is a number
console.log(typeof Infinity); //number
console.log(typeof -Infinity); //number
console.log(typeof 0 / 0); //number
console.log(typeof Infinity / Infinity); //number
console.log(typeof Infinity / -Infinity); //number
console.log(typeof -Infinity / Infinity); //number
console.log(typeof -Infinity / -Infinity); //number

//infinity is a number
console.log(Infinity === Infinity); //true
console.log(-Infinity === -Infinity); //true
console.log(Infinity === -Infinity); //false
console.log(Infinity === 0 / 0); //false
console.log(-Infinity === 0 / 0); //false
console.log(Infinity === Infinity / Infinity); //false
console.log(-Infinity === Infinity / Infinity); //false
console.log(Infinity === Infinity / -Infinity); //false
console.log(-Infinity === Infinity / -Infinity); //false
console.log(Infinity === -Infinity / Infinity); //false
console.log(-Infinity === -Infinity / Infinity); //false
console.log(Infinity === -Infinity / -Infinity); //false
console.log(-Infinity === -Infinity / -Infinity); //false

//infinity is a number
console.log(isNaN(Infinity)); //false
console.log(isNaN(-Infinity)); //false
console.log(isNaN(0 / 0)); //true
console.log(isNaN(Infinity / Infinity)); //true
console.log(isNaN(Infinity / -Infinity)); //true
console.log(isNaN(-Infinity / Infinity)); //true
console.log(isNaN(-Infinity / -Infinity)); //true

//infinity is a number
console.log(Infinity > 0); //true
console.log(Infinity > 1); //true
console.log(Infinity > 10); //true

//infinity is a number
console.log(-Infinity < 0); //true
console.log(-Infinity < -1); //true
console.log(-Infinity < -10); //true





