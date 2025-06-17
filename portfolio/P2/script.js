let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail1").value;
  let pass = document.getElementById("txtPass1").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
  const str = `<div class='login-div'>
    <h3>Login Form</h3>
    <p><input type='text' id='txtEmail1' placeholder='Enter your email'></p>
    <p><input type='password' id='txtPass1' placeholder='Enter your password'></p>
    <p id='errorTxt'></p>
    <p>Note: Password must be at least 6 characters long.</p>
    <p>Note: Email must be in the format
    <p>Note: If you are a new user, please create an account.</p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    `;
  root.innerHTML = str + "</div>";
};
const showregisteredUsers = () => {
    let str = "<h3>Registered Users</h3>";
    if (users.length === 0) {
        str += "<p>No users registered yet.</p>";
    } else {
        str += "<ul>";
        users.forEach((user) => {
        str += `<li>${user.name} (${user.email})</li>`;
        });
        str += "</ul>";
    }
    root.innerHTML = str + "<button onclick='loginForm()'>Back to Login</button>";
    }

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div class='register-div'>
    <h3>Registration Form</h3>
    <p><input type='text' id='txtName' placeholder='Enter your name'></p>
    <p><input type='text' id='txtEmail' placeholder='Enter your email'></p>
    <p><input type='password' id='txtPass' placeholder='Enter your password'></p>
    <p id='errorTxt'></p>
    <p>Note: Password must be at least 6 characters long.</p>
    <p>Note: Email must be in the format

    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showHome = () => {
  const str = `<div class='home-div'>
    <h3>Welcome to the Home Page</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
};