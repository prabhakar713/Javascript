// operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (Ternary) Operator
// 8. Comma Operator
// 9. Unary Operators
// 10. Relational Operators
//11. Equality Operators

// 1. Arithmetic Operators
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus
// ++	Increment
// --	Decrement

// 2. Assignment Operators
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// 3. Comparison Operators
// ==	Equal to	x == y
// ===	Equal value and equal type	x === y
// !=	Not equal	x != y
// !==	Not equal value or not equal type	x !== y
// >	Greater than	x > y
// <	Less than	x < y
// >=	Greater than or equal to	x >= y
// <=	Less than or equal to	x <= y
// ?	ternary operator

// 4. Logical Operators
// &&	Logical and	Returns true if both statements are true	x < 10 &&  x < 20
// ||	Logical or	Returns true if one of the statements is true	x < 10 || x < 5
// !	Logical not	Reverse the result, returns false if the result is true	!(x < 5 && x < 10)

// 5. Bitwise Operators
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shift left by pushing zeros in from the right and let the leftmost bits fall off

// 6. String Operators
// +	Addition	Adds together two strings
// +=	Addition assignment	Adds the right operand to the left operand and assigns the result to the left operand

// 7. Conditional (Ternary) Operator
// condition ? expr1 : expr2

// 8. Comma Operator
// ,	Comma Operator	Evaluates each of its operands (from left to right) and returns the value of the last operand

// 9. Unary Operators
// typeof	Returns the type of a variable
// delete	Deletes an object property
// void	Indicates that the expression should not be evaluated
// +	Unary plus	Tries to convert the operand to a number, if it is not already
// -	Unary negation	Tries to convert the operand to a number, if it is not already
// !	Logical not	Reverses the sense of its operand
// ~	Bitwise not	Inverts all the bits in its operand
// ++	Increment	Adds one to its operand
// --	Decrement	Subtracts one from its operand
// ++	Postfix increment	Adds one to its operand
// --	Postfix decrement	Subtracts one from its operand
// new	Creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function


// 10. Relational Operators
// in	Returns true if the specified property is in the specified object
// instanceof	Returns true if the specified object is of the specified object type

// 11. Equality Operators
// ==	Equal to	x == y
// ===	Equal value and equal type	x === y
// !=	Not equal	x != y
// !==	Not equal value or not equal type	x !== y




//-----------------------------------------------------------------------------------------------------------------------------------------//

//Arthmatic Operators
const a=10;
const b=20;
// Addition
console.log(a+b); //30
// Subtraction
console.log(a-b); //-10
// Multiplication
console.log(a*b); //200
// Division
console.log(a/b); //0.5
// Modulus
console.log(a%b); //10
// Increment
console.log(a**b); //100000000000000000000




//-----------------------------------------------------------------------------------------------------------------------------------------//
//Arithmetic Operators
// +	Addition	Adds together two values
console.log(10+10); //20
// -	Subtraction	Subtracts one value from another
console.log(10-10); //0
// *	Multiplication	Multiplies two values
console.log(10*10); //100
// /	Division	Divides one value by another
console.log(10/10); //1
// %	Modulus	Returns the division remainder
console.log(10%10); //0
// **	Exponentiation	Raises the first operand to the power of the second operand
console.log(10**10); //10000000000



//-----------------------------------------------------------------------------------------------------------------------------------------//
//Assignment Operators
// =	Assigns values	x = y
let x=10;
console.log(x); //10
// +=	Addition assignment	Adds the right operand to the left operand and assigns the result to the left operand
x+=10;
console.log(x); //20
// -=	Subtraction assignment	Subtracts the right operand from the left operand and assigns the result to the left operand
x-=10;
console.log(x); //10
// *=	Multiplication assignment	Multiplies the right operand with the left operand and assigns the result to the left operand
x*=10;
console.log(x); //100
// /=	Division assignment	Divides the left operand with the right operand and assigns the result to the left operand
x/=10;
console.log(x); //10
// %=	Modulus assignment	Divides the left operand with the right operand and assigns the remainder to the left operand
x%=10;
console.log(x); //0
// **=	Exponentiation assignment	Raises the left operand to the power of the right operand and assigns the result to the left operand
x**=10;
console.log(x); //0
// <<=	Left shift assignment	Shifts the left operand the number of bits specified by the right operand to the left and assigns the result to the left operand
x<<=10;
console.log(x); //0
// >>=	Right shift assignment	Shifts the left operand the number of bits specified by the right operand to the right and assigns the result to the left operand
x>>=10;
console.log(x); //0
// >>>=	Unsigned right shift assignment	Shifts the left operand the number of bits specified by the right operand to the right, and assigns the result to the left operand
x>>>=10;
console.log(x); //0
// &=	Bitwise AND assignment	Performs a bitwise AND operation on the left and right operands, and assigns the result to the left operand
x&=10;
console.log(x); //0
// ^=	Bitwise XOR assignment	Performs a bitwise XOR operation on the left and right operands, and assigns the result to the left operand
x^=10;
console.log(x); //0
// |=	Bitwise OR assignment	Performs a bitwise OR operation on the left and right operands, and assigns the result to the left operand
x|=10;
console.log(x); //0


//-----------------------------------------------------------------------------------------------------------------------------------------//

//Comparison Operators
// ==	Equal to	x == y
console.log(10==10); //true
// ===	Equal value and equal type	x === y
console.log(10===10); //true
// !=	Not equal	x != y
console.log(10!=10); //false
// !==	Not equal value or not equal type	x !== y
console.log(10!==10); //false
// >	Greater than	x > y
console.log(10>10); //false
// <	Less than	x < y
console.log(10<10); //false
//  >=	Greater than or equal to	x >= y
console.log(10>=10); //true
// <=	Less than or equal to	x <= y
console.log(10<=10); //true
//? ternary operator
console.log(10>10 ? "true" : "false"); //false


//-----------------------------------------------------------------------------------------------------------------------------------------//


//Logical Operators
// &&	Logical and	Returns true if both statements are true	x < 10 &&  x < 20
console.log(10<20 && 10<30); //true
// ||	Logical or	Returns true if one of the statements is true	x < 10 || x < 5
console.log(10<20 || 10<30); //true
// !	Logical not	Reverse the result, returns false if the result is true	!(x < 5 && x < 10)
console.log(!(10<20 && 10<30)); //false

//-----------------------------------------------------------------------------------------------------------------------------------------//


//Bitwise Operators
// &	AND	Sets each bit to 1 if both bits are 1
console.log(10 & 20); //0
// |	OR	Sets each bit to 1 if one of two bits is 1
console.log(10 | 20); //30
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
console.log(10 ^ 20); //30
// ~	NOT	Inverts all the bits
console.log(~10); //-11
// <<	Zero fill left shift	Shift left by pushing zeros in from the right and let the leftmost bits fall off
console.log(10 << 2); //40


//-----------------------------------------------------------------------------------------------------------------------------------------//

//String Operators
// +	Addition	Adds together two strings
const str1="Hello";
const str2="World";
console.log(str1+str2); //HelloWorld
// +=	Addition assignment	Adds the right operand to the left operand and assigns the result to the left operand
console.log(str1+=str2); //HelloWorld



//-----------------------------------------------------------------------------------------------------------------------------------------//
//Conditional (Ternary) Operator
// condition ? expr1 : expr2
const age=20;
const voteable=(age<18)?"Too young":"Old enough";
console.log(voteable); //Old enough


//-----------------------------------------------------------------------------------------------------------------------------------------//
//Comma Operator
// ,	Comma Operator	Evaluates each of its operands (from left to right) and returns the value of the last operand
const x=10;
const y=20;
const z=30;
console.log(x,y,z); //10 20 30


//-----------------------------------------------------------------------------------------------------------------------------------------//

//Unary Operators
// typeof	Returns the type of a variable
console.log(typeof 10); //number
console.log(typeof "Hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {name:"John",age:30}); //object
console.log(typeof [1,2,3,4]); //object
console.log(typeof function myFunc(){}); //function
console.log(typeof new Date()); //object
console.log(typeof new Number(10)); //object
console.log(typeof new String("Hello")); //object
console.log(typeof new Boolean(true)); //object

//Delete Operator
const person={name:"John",age:30};
console.log(person); //{name: "John", age: 30}
delete person.age;
console.log(person); //{name: "John"}

//Void Operator
// void	Used to get undefined
console.log(void 0); //undefined

//Instanceof Operator
// instanceof	Returns true if an object is an instance of an object type
const person={name:"John",age:30};
console.log(person instanceof Object); //true

//in Operator
// in	Returns true if the specified property is in the specified object
const person={name:"John",age:30};
console.log("name" in person); //true
console.log("age" in person); //true
console.log("salary" in person); //false

//+ Unary plus Tries to convert the operand to a number, if it is not already
console.log(+10); //10
console.log(+"10"); //10
console.log(+"Hello"); //NaN
console.log(+""); //0

//- Unary negation Tries to convert the operand to a number, if it is not already
console.log(-10); //-10
console.log(-"10"); //-10
console.log(-"Hello"); //NaN
console.log(-""); //0

//! Logical not	Converts the operand to boolean type and returns the opposite value
console.log(!true); //false
console.log(!false); //true
console.log(!"Hello"); //false
console.log(!""); //true
console.log(!0); //true
console.log(!-1); //false

// ~ Bitwise not Inverts all the bits in its operand
console.log(~10); //-11
console.log(~-10); //9


//Increment/Decrement Operators
// ++	Increment	Adds one to its operand
let x=10;
console.log(++x); //11
// --	Decrement	Subtracts one from its operand
console.log(--x); //10

//++ Postfix increment Adds one to its operand
let x=10;
console.log(x++); //10
// -- Postfix decrement Subtracts one from its operand
console.log(x--); //11

//new Creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function
const person=new Object();
person.name="John";
person.age=30;
console.log(person); //{name: "John", age: 30}


//-----------------------------------------------------------------------------------------------------------------------------------------//

//Relational Operators
const person={name:"John",age:30};
console.log("name" in person); //true
console.log("age" in person); //true
console.log("salary" in person); //false
console.log(person instanceof Object); //true
//-----------------------------------------------------------------------------------------------------------------------------------------//


//Equality Operators
console.log(10==10); //true
console.log(10=="10"); //true
console.log(10==="10"); //false
console.log(10!=10); //false
console.log(10!="10"); //false
console.log(10!=="10"); //true

//()    Grouping	Forces evaluation of expression inside parentheses first
console.log((10+2)*2); //24
//-----------------------------------------------------------------------------------------------------------------------------------------//
// Operator	Precedence
// Operator	Precedence
// ()	Grouping
// []	Property Access
// .	Member Access
// new	New
// ++	Increment
// --	Decrement
// !	Logical NOT
// ~	Bitwise NOT
// +	Unary plus
// -	Unary negation
// *	Multiplication
// /	Division
// %	Modulus
// +	Addition
// -	Subtraction
// <<	Left shift
// >>	Right shift
// >>>	Unsigned right shift
// <	Less than
// <=	Less than or equal to
// >	Greater than
// >=	Greater than or equal to
// in	Property in object
// instanceof	Object of type
// ==	Equal to
// !=	Not equal to
// ===	Strict equal to
// !==	Strict not equal to
// &	Bitwise AND
// ^	Bitwise XOR
// |	Bitwise OR
// &&	Logical AND
// ||	Logical OR
// ?:	Ternary operator
// =	Assignment
// +=	Addition assignment
// -=	Subtraction assignment
// *=	Multiplication assignment
// /=	Division assignment
// %=	Modulus assignment
// <<=	Left shift assignment
// >>=	Right shift assignment
// >>>=	Unsigned right shift assignment
// &=	Bitwise AND assignment
// ^=	Bitwise XOR assignment
// |=	Bitwise OR assignment
// Yield function generator
// ,	Comma

//()    Grouping	Forces evaluation of expression inside parentheses first
console.log((10+2)*2); //24
// [] Property Access
const person={name:"John",age:30};
console.log(person["name"]); //John
console.log(person["age"]); //30
// . Member Access
const person={name:"John",age:30};
console.log(person.name); //John
console.log(person.age); //30
// new New
const person=new Object();
person.name="John";
person.age=30;
console.log(person); //{name: "John", age: 30}
// ++ Increment
let x=10;
console.log(++x); //11
// -- Decrement
console.log(--x); //10
// ! Logical NOT
console.log(!true); //false
console.log(!false); //true
console.log(!"Hello"); //false
console.log(!""); //true
console.log(!0); //true
console.log(!-1); //false
// ~ Bitwise NOT
console.log(~10); //-11
console.log(~-10); //9
// + Unary plus
console.log(+10); //10
console.log(+"10"); //10
console.log(+"Hello"); //NaN
console.log(+""); //0
// - Unary negation
console.log(-10); //-10
console.log(-"10"); //-10
console.log(-"Hello"); //NaN
console.log(-""); //0
// * Multiplication
console.log(10*2); //20
// / Division
console.log(10/2); //5
// % Modulus
console.log(10%3); //1
// + Addition
console.log(10+2); //12
// - Subtraction
console.log(10-2); //8
// << Left shift
console.log(10<<2); //40
// >> Right shift
console.log(10>>2); //2
// >>> Unsigned right shift
console.log(10>>>2); //2
// < Less than
console.log(10<20); //true
// <= Less than or equal to
console.log(10<=20); //true
// > Greater than
console.log(10>20); //false
// >= Greater than or equal to
console.log(10>=20); //false
// in Property in object
const person={name:"John",age:30};
console.log("name" in person); //true
console.log("age" in person); //true
console.log("salary" in person); //false
// instanceof Object of type
console.log(person instanceof Object); //true
// == Equal to
console.log(10==10); //true
console.log(10=="10"); //true
// != Not equal to
console.log(10!=10); //false
console.log(10!="10"); //false
// === Strict equal to
console.log(10==="10"); //false
// !== Strict not equal to
console.log(10!=="10"); //true
// & Bitwise AND
console.log(10&2); //2
// ^ Bitwise XOR
console.log(10^2); //8
// | Bitwise OR
console.log(10|2); //10
// && Logical AND
console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false
// || Logical OR
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false
// ?: Ternary operator
const age=20;
const result=(age>=18)?"Adult":"Minor";
console.log(result); //Adult
// = Assignment
let x=10;
console.log(x); //10
// += Addition assignment
x+=5;
console.log(x); //15
// -= Subtraction assignment
x-=5;
console.log(x); //10
// *= Multiplication assignment
x*=5;
console.log(x); //50
// /= Division assignment
x/=5;
console.log(x); //10
// %= Modulus assignment
x%=3;
console.log(x); //1
// <<= Left shift assignment
x<<=2;
console.log(x); //4
// >>= Right shift assignment
x>>=2;
console.log(x); //1
// >>>= Unsigned right shift assignment
x>>>=2;
console.log(x); //0
// &= Bitwise AND assignment
x&=2;
console.log(x); //0
// ^= Bitwise XOR assignment
x^=2;
console.log(x); //2
// |= Bitwise OR assignment
x|=2;
console.log(x); //2
// Yield function generator
function* generator(){
    yield 1;
    yield 2;
    yield 3;
    }
const gen=generator();
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
// , Comma
const x=10,y=20;
console.log(x,y); //10 20


