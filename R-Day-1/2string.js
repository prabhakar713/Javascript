//string 
var str = "Hello World";
console.log(str); // Hello World
const singleQuote = 'single quote';
console.log(singleQuote); // single quote
const doubleQuote = "double quote";
console.log(doubleQuote); // double quote
const backTick = `back tick`;
console.log(backTick);
const backTick1 = `back tick ${str}`;
console.log(backTick1); // back tick Hello World
const backTick2 = `back tick ${str} ${singleQuote} ${doubleQuote}`; 
console.log(backTick2);  // back tick Hello World single quote double quote
const backTick3 = `back tick ${str} ${singleQuote} ${doubleQuote} ${backTick}`; 
console.log(backTick3);     // back tick Hello World single quote double quote back tick
const backtick4= `2+2=${2+2}`;
console.log(backtick4); //2+2=4
const backtick5= `2+2=${2+2} ${2+2}`;
console.log(backtick5); //2+2=4 4
const backtick6= `2+2=${2+2} ${2+2} ${2+2}`;
console.log(backtick6); //2+2=4 4 4 
console.log(typeof backtick6); //string
console.log(typeof str);    //string
console.log(typeof singleQuote); //string
console.log(typeof doubleQuote); //string
console.log(typeof backTick); //string
console.log(typeof 2+2); //number
console.log(typeof 2+2+2);  //number



console.log(str.length); //11
console.log(str.toUpperCase()); //HELLO WORLD
console.log(str.toLowerCase());  //hello world
console.log(str.indexOf("World")); //6
console.log(str.indexOf("world")); // -1
console.log(str.slice(0, 5)); //start index and end index -1     //Hello
console.log(str.slice(6, 11));//start index and end index -1     //World
console.log(str.slice(6)); //start index and end index -1        //World
console.log(str.slice(-5)); //start index and end index -1        //World
console.log(str.slice(-5, -1)); //start index and end index -1    //Worl
console.log(str.slice(0, -1)); //start index and end index -1     //Hello Worl
console.log(str.slice(-5, 11)); //start index and end index -1    //World
console.log(str.slice(0, 11)); //start index and end index -1     //Hello World
console.log(str.slice(0, 12));                                    //Hello World





//Revision


//string
const firstName="Rajesh";
const lastName="Kumar";
const fullName=firstName+" "+lastName;
console.log(fullName); //Rajesh Kumar
console.log(firstName+" "+lastName); //Rajesh Kumar
console.log(firstName+" "+lastName+" "+10); //Rajesh Kumar 10
console.log(firstName+" "+lastName+" "+10+10); //Rajesh Kumar 1010
console.log(firstName+" "+lastName+" "+(10+10)); //Rajesh Kumar 20
console.log(firstName+" "+lastName+" "+10*10); //Rajesh Kumar 100

//string length
const name="Rajesh Kumar";
console.log(name.length); //11

//string concatination
const firstName1="Rajesh";
const lastName1="Kumar";
const fullName1=firstName1.concat(" ",lastName1);
console.log(fullName1); //Rajesh Kumar

//string uppercase and lowercase
const name1="Rajesh Kumar";
console.log(name1.toUpperCase()); //RAJESH KUMAR
console.log(name1.toLowerCase()); //rajesh kumar

//string trim
const name2=" Rajesh Kumar ";
console.log(name2); // Rajesh Kumar
console.log(name2.trim()); //Rajesh Kumar

//string index
const name3="Rajesh Kumar";
console.log(name3[0]); //R
console.log(name3[1]); //a
console.log(name3[2]); //j

//string slice
const name4="Rajesh Kumar";
console.log(name4.slice(0, 6)); //Rajesh
console.log(name4.slice(7, 12)); //Kumar

//string replace
const name5="Rajesh Kumar";
console.log(name5.replace("Rajesh", "Raj")); //Raj Kumar

//string includes
const name6="Rajesh Kumar";
console.log(name6.includes("Rajesh")); //true
console.log(name6.includes("Raj")); //false

//string split
const name7="Rajesh Kumar";
console.log(name7.split(" ")); //[ 'Rajesh', 'Kumar' ]

//string charAt
const name8="Rajesh Kumar";
console.log(name8.charAt(0)); //R
console.log(name8.charAt(1)); //a

//string charCodeAt
const name9="Rajesh Kumar";
console.log(name9.charCodeAt(0)); //82
console.log(name9.charCodeAt(1)); //97

//string indexOf
const name10="Rajesh Kumar";
console.log(name10.indexOf("Rajesh")); //0
console.log(name10.indexOf("Kumar")); //7

//string lastIndexOf
const name11="Rajesh Kumar";
console.log(name11.lastIndexOf("Rajesh")); //0
console.log(name11.lastIndexOf("Kumar")); //7

//string startsWith
const name12="Rajesh Kumar";
console.log(name12.startsWith("Rajesh")); //true
console.log(name12.startsWith("Kumar")); //false

//string endsWith
const name13="Rajesh Kumar";
console.log(name13.endsWith("Rajesh")); //false
console.log(name13.endsWith("Kumar")); //true

//string match
const name14="Rajesh Kumar";
console.log(name14.match(/Rajesh/g)); //[ 'Rajesh' ]
console.log(name14.match(/Kumar/g)); //[ 'Kumar' ]

//string search
const name15="Rajesh Kumar";
console.log(name15.search("Rajesh")); //0
console.log(name15.search("Kumar")); //7

//string repeat
const name16="Rajesh Kumar";
console.log(name16.repeat(2)); //Rajesh KumarRajesh Kumar

//string substr
const name17="Rajesh Kumar";
console.log(name17.substr(0, 6)); //Rajesh
console.log(name17.substr(7, 5)); //Kumar

//string toLocaleLowerCase
const name18="Rajesh Kumar";
console.log(name18.toLocaleLowerCase()); //rajesh kumar

//string toLocaleUpperCase
const name19="Rajesh Kumar";
console.log(name19.toLocaleUpperCase()); //RAJESH KUMAR

//string toString
const name20="Rajesh Kumar";
console.log(name20.toString()); //Rajesh Kumar

//string valueOf
const name21="Rajesh Kumar";
console.log(name21.valueOf()); //Rajesh Kumar

//string toSource
const name22="Rajesh Kumar";
console.log(name22.toSource()); //"Rajesh Kumar"

//string anchor
const name23="Rajesh Kumar";
console.log(name23.anchor()); //<a name="undefined">Rajesh Kumar</a>

//string big
const name24="Rajesh Kumar";
console.log(name24.big()); //<big>Rajesh Kumar</big>

//string blink
const name25="Rajesh Kumar";
console.log(name25.blink()); //<blink>Rajesh Kumar</blink>

//string bold
const 
name26="Rajesh Kumar";
console.log(name26.bold()); //<b>Rajesh Kumar</b>

//string fixed
const name27="Rajesh Kumar";
console.log(name27.fixed()); //<tt>Rajesh Kumar</tt>

//string fontcolor
const name28="Rajesh Kumar";
console.log(name28.fontcolor("red")); //<font color="red">Rajesh Kumar</font>

//string fontsize
const name29="Rajesh Kumar";
console.log(name29.fontsize(5)); //<font size="5">Rajesh Kumar</font>

//string italics
const name30="Rajesh Kumar";
console.log(name30.italics()); //<i>Rajesh Kumar</i>

