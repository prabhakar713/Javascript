// objects  //group of variables

const name='john';
const age=30;
const isCool=true;
const friends=['bob','sara','joe'];
const address={
    city:'Boston',
    state:'MA'
}
const today=new Date(); //new keyword is used to create a new object
console.log(today);
console.log(typeof today); //object
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isCool); //boolean
console.log(typeof friends); //object
console.log(typeof address); //object
console.log(typeof today); //object
console.log(friends[1]); //sara
console.log(address.city); //Boston
console.log(address['state']); //MA
console.log(today); //2020-07-01T06:48:48.000Z

//JSON
const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        city:'Boston',
        state:'MA'
    }
}
console.log(person); //{ firstName: 'John', lastName: 'Doe', age: 30, hobbies: [ 'music', 'movies', 'sports' ], address: { city: 'Boston', state: 'MA' } }
console.log(person.firstName,person.lastName); //John Doe
console.log(person.hobbies[1]); //movies
console.log(person.address.state); //MA
console.log(person.address['city']); //Boston
const {firstName,lastName,address:{city}}=person;
console.log(firstName); //John
console.log(lastName); //Doe
console.log(city); //Boston

//array of objects


const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    }
];

console.log(todos); //[ { id: 1, text: 'Take out trash', isCompleted: true }, { id: 2, text: 'Meeting with boss', isCompleted: true }, { id: 3, text: 'Dentist appt', isCompleted: false } ]
console.log(todos[1].text); //Meeting with boss
console.log(todos[1].isCompleted); //true
const todoJSON=JSON.stringify(todos);
console.log(todoJSON); //[{"id":1,"text":"Take out trash","isCompleted":true},{"id":2,"text":"Meeting with boss","isCompleted":true},{"id":3,"text":"Dentist appt","isCompleted":false}]
console.log(typeof todoJSON); //string



console.log(today.getMonth()); //6
console.log(today.getDate()); //1
console.log(today.getDay()); //2
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //12
console.log(today.getMinutes()); //18
console.log(today.getSeconds()); //48
console.log(today.getMilliseconds()); //0
console.log(today.getTime()); //1593598928000
console.log(today.getTimezoneOffset()); //-330
console.log(today.getUTCDate()); //1
console.log(today.getUTCDay()); //2
console.log(today.getUTCFullYear()); //2020
console.log(today.getUTCHours()); //16
console.log(today.getUTCMinutes()); //48
console.log(today.getUTCSeconds()); //48
console.log(today.getUTCMilliseconds()); //0
console.log(today.toDateString()); //Tue Jul 01 2020
console.log(today.toTimeString()); //12:48:48 GMT+0530 (India Standard Time)
console.log(today.toLocaleDateString()); //7/1/2020
console.log(today.toLocaleTimeString()); //12:48:48 PM
console.log(today.toUTCString()); //Tue, 30 Jun 2020 21:18:48 GMT





