



const loginForm = () => {
    const str = `<div class="login-div">
    <h3>Login Form</h3>
    <p><label for='email'>Email:</label>
    <p><input type='email' id='email' name='email'></p>
    <p><label for='password'>Password:</label>
    <p><input type='password' id='password' name='password'></p>
    <p><button onclick='showHome()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    `
    root.innerHTML = str + "</div>"
}

const registerForm = () => {
     const str = `<div class="register-div">
    <h3>Registration Form</h3>
    <p><label for='username'>Username:</label>
    <p><input type='text' id='username' name='username'></p>
    <p><label for='email'>Email:</label>
    <p><input type='email' id='email' name='email'></p>
    <p><label for='password'>Password:</label>
    <p><input type='password' id='password' name='password'></p>
    <p><button onclick='loginForm()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
     const str = `<div class="home-div">
    <h3>Welcome</h3>
    <p>You are now logged in.</p>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
}