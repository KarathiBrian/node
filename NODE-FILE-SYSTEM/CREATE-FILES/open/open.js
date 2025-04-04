const { error } = require("console");
var fs= require ("fs")

fs.open("open.html","w" ,(err,fd)=>{

   if(err){

console.error(err)

return  //// STOPS EXECUTION
   }

    console.log(fd);
    
   
    

}







)







