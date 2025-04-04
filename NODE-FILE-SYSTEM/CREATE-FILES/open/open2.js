var fs = require ("fs")

fs.open("open2.html","a",(err,fd)=>{
 
   if (err){

    console.log("An error occurred, Recheck your code");
//    return 
   } else{
   console.log(fd);
   
   }


const newData="/nADDED DATA OVER HERE"

fs.write(fd,newData,(writeErr)=>{
if(writeErr){

console.error(writeErr)    
return
}
console.log("successful");

})



})















