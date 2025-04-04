var fs= require("fs")

fs.rename("index.html","renamedIndex.html",(err)=>{

if(err){

    console.error(err)
}
console.log("RENAMED SUCCESSFULLY");

})









