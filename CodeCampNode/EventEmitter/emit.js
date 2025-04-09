const EventEmitter=require("events")
const customEmitter=new EventEmitter()

customEmitter.on("response",()=>{
console.log("Data received");

})

customEmitter.on("response",()=>{

    console.log("another user signed in");
    
})

customEmitter.on("response",(user,id)=>{
console.log(`The user name is ${user}. User unique id is ${id}`);


})

customEmitter.emit("response", "Brian","0678")


