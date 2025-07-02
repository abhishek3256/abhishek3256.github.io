import http from "http";
let server=http.createServer((req,res)=>{
    res.end("Index 3b received");
});
server.listen(8082,()=>{
console.log("Index 3b Working")
})