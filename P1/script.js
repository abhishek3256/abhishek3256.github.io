let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const renderUserList = () => {
   
    let x= "<h4>Registered Users:</h4>";
    if(users.length==0){
        return "<p>No Users Registered</p>";

    }
    users.forEach(user => {
        x += `<p>${user.name} | ${user.email} | ${user.pass} | ${user.balance}</p>`;
    });
    
    return x;
};

const loginForm = () => {
  const str = `
    <div>
    <div>
    <h3>Login Form</h3>
    <p id='errorTxt'></p>
    <p><input type='text' id='txtEmail' placeholder='Enter Email'></p>
    <p><input type='password' id='txtPass' placeholder='Enter Password'></p>
    <p id='errorTxt'></p>
    <p><input type='checkbox' id='chkRemember'> Remember Me</p>
    <p id='errorTxt'></p>
    <p><input type='checkbox' id='chkAgree'> I agree to the terms and conditions</p>
    <p id='errorTxt'></p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    </div>
    <div>
     ${renderUserList()}
    </div>
    </div>
    `;
  root.innerHTML = str;
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
    balance:1000,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p id='errorTxt'></p>
    <p><input type='text' id='txtName' placeholder='Enter Name'></p>
    <p><input type='text' id='txtEmail' placeholder='Enter Email'></p>
    <p><input type='password' id='txtPass' placeholder='Enter Password'></p>
    <p><input type='password' id='txtConfirmPass' placeholder='Confirm Password'></p>
    <p id='errorTxt'></p>
    <p><input type='number' id='txtBalance' placeholder='Enter Initial Balance' value='1000'></p>
    <p id='errorTxt'></p>
    <p><input type='checkbox' id='chkAgree'> I agree to the terms and conditions</p>
    <p id='errorTxt'></p>
    
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
};
const root = document.getElementById("root");



loginForm()