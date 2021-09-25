const request = require('request');
const fs = require('fs');

request(`http://www.google.com`,(err,res,body)=>{
if (err) {
    return console.log(err)
}
console.log(res,body)
 fs.writeFile('../../../../../x.txt', body, (err) => {
if(err){
    console.log(err);
}
 })

})