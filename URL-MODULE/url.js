////THE URL BUILT IN MODULE IS USED TO SPLIT A WEB ADDRESS INTO READABLE PARTS 
// YOU MUST USE require("")

//  TO PARSE/BREAKDOWN A WEB ADDRESS , YOU WILL NEED TO USE THE Parse()   .     THIS MEHOD WILL BREAKDOWN A WEB ADDRESS URL IN READABLE PARTS AND WILL RETURN AN OBJECT WITH EACH PART OF THE ADDRESS AS PROPERTIES


// const { log } = require("console");
// const url=require("url")
// const adr="http://localhost:8080/default.htm?year=2017&month=february"

// var br= url.parse(adr,true)

// console.log(br);

// console.log(br.path);
// console.log(br.host);



//ANOTHER MODERN WAY IS TO USE THE new URL()



const ad= new URL("http://localhost:8080/default.htm?year=2017&month=february")
// console.log(ad.host);

console.log(ad.searchParams.get(host));


