// const EventEmitter=require("events")
// const customEmitter=new EventEmitter()

// customEmitter.on("response",()=>{
// console.log("Data received");

// })

// customEmitter.on("response",()=>{

//     console.log("another user signed in");
    
// })

// customEmitter.on("response",(user,id)=>{
// console.log(`The user name is ${user}. User unique id is ${id}`);


// })

// customEmitter.emit("response", "Brian","0678")





////EXAMPLE 2


const EventEmitter= require("events")

const myEvent=new EventEmitter()

myEvent.on("send",()=>{

console.log("Karathi Boyyyyy");
    
})

myEvent.emit("send")





const event2=new EventEmitter()
event2.on("receive",(amount,day)=>{

console.log(`Did you receive ${amount} on ${day}`);


})

event2.emit("receive",20000,"Tuesday")


