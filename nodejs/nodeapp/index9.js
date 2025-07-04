import bcrypt from 'bcrypt'
const pwd="pass1234";
const hashedpwd= await bcrypt.hash(pwd,10);
const check =await bcrypt.compare("pass1234","$2b$10$SC94p/BO1PvXCWo6hN0DZOLv2BpoJQZbyn5faasPostyNZdimzVmK");
console.log(check);
