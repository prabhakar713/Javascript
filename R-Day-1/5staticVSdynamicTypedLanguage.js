// statically typed language
// c is statically typed language
// int number=10;
//float number=10.5; //error  //same variable name but different data type
//char number='a';  //error   //same variable name but different data type



// dynamically typed language
// javascript is dynamically typed language
//same varible in javascript may be contain number or string or boolean or object or array or function
// becuase same varible previouslly contain number but now contain string so its dynamic typed language
let message="hello world";
console.log(typeof message); //string
message=10;
console.log(typeof message); //number
message=true;
console.log(typeof message); //boolean
message= {
    name:"hello",
    age:10
};
console.log(typeof message); //object
message=null;
console.log(typeof message); //object
message=undefined;
console.log(typeof message); //undefined
message=10/"hello";
console.log(typeof message); //number
message=10/"2";
console.log(typeof message); //number
message=10/"2";
console.log(message); //5
message=10/"hello";
console.log(message); //NaN
message =function(){
    console.log("hello world");
}
console.log(typeof message); //function
message=[1,2,3];
console.log(typeof message); //object
message=Symbol("hello");
console.log(typeof message); //symbol








