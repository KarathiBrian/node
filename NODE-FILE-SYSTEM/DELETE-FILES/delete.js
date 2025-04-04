var fs= require ("fs")

fs.unlink("delete.html",(err,rs)=>{
if(err){

    console.log(err);
    return
}
console.log('deleted');


})














