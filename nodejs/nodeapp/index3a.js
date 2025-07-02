import http from "http";
let server=http.createServer((req,res)=>{
    res.end("Index 3a received");
});
server.listen(8081,()=>{
console.log("Working")
});