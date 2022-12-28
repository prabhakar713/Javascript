//for
for(let i=0;i<=10;i++){
    console.log(`For Loop Number: ${i}`);
}
//while
let i=0;
while(i<=10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
//do while
let i=0;
do{
    console.log(`Do While Loop Number: ${i}`);
    i++;
}
while(i<=10);
//loop through array
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}
//for of
for(let todo of todos){
    console.log(todo.id);
}
//forEach,map,filter
todos.forEach(function(todo){
    console.log(todo.text);
}
);
const todoText=todos.map(function(todo){
    return todo.text;
}
);
console.log(todoText); //[ 'Take out trash', 'Meeting with boss', 'Dentist appt' ]
const todoCompleted1=todos.filter(function(todo){
    return todo.isCompleted===true;
}
);
console.log(todoCompleted); //[ { id: 1, text: 'Take out trash', isCompleted: true }, { id: 2, text: 'Meeting with boss', isCompleted: true } ]
const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
}
).map(function(todo){
    return todo.text;
}
);
console.log(todoCompleted); //[ 'Take out trash', 'Meeting with boss' ]