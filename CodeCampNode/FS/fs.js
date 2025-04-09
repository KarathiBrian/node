const fs= require("fs")
const path=require("path")

console.log("HEYYYYYYY");

console.log(path.resolve(__dirname,"FS","fs.js"));


// console.log("Start");

fs.readFile("fs2.txt","utf8",(err,result)=>{
if(err){
    // console.log(err);
 return   
}
// const first=result

// console.log(first);

fs.readFile("fs3.txt","utf8",(err,result)=>{
if(err){

    // console.log(err);
    return
}
// const second=result
// console.log(second);


fs.writeFile("fs4.txt",`Hello this is the new created file with this combo:${first,second}`, (err,result)=>{

    if(err){

        // console.log(err);
        return
    }
    // console.log(result);
    

}  )

})




}
)


