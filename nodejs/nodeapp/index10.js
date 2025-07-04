import jwt from 'jsonwebtoken'
const SECRET ="sometext";
const user={
    name:"john",
    email:"john@gmail.com",
    role:"admin"
}


const token=jwt.sign(user,SECRET,{expiresIn:"1h"});
console.log(token);
// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDUwMTUsImV4cCI6MTc1MTYwODYxNX0.6SFFSCaQ8b9xXi4G-43n0dyBzpIqGAjFTQy6tloYhlk";
const decoded=jwt.verify(token ,SECRET);
console.log(decoded);