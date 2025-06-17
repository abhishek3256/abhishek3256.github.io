// Store users in localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

function showSignInForm() {
    document.getElementById('signInForm').style.display = 'flex';
    document.getElementById('signUpForm').style.display = 'none';
}

function showSignUpForm() {
    document.getElementById('signUpForm').style.display = 'flex';
    document.getElementById('signInForm').style.display = 'none';
}

function hideForms() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sign-button').addEventListener('click', showSignInForm);
    
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', hideForms);
    });
    
    document.querySelector('.register-link a').addEventListener('click', function(e) {
        e.preventDefault();
        showSignUpForm();
    });
    
    document.querySelector('.login-link a').addEventListener('click', function(e) {
        e.preventDefault();
        showSignInForm();
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('form-container')) {
            hideForms();
        }
    });

    // Sign In form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Check if user exists
        const user = users.find(user => user.email === email);
        
        if (!user) {
            alert('User not registered! Please sign up first.');
            return;
        }
        
        // Check password
        if (user.password !== password) {
            alert('Incorrect password! Please try again.');
            return;
        }
        
        alert('Login successful! Welcome back!');
        hideForms();
        document.getElementById('loginForm').reset();
    });

    // Sign Up form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Check if user already exists
        if (users.find(user => user.email === email)) {
            alert('User already exists! Please sign in instead.');
            return;
        }
        
        // Create new user
        const newUser = {
            email: email,
            password: password
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Registration successful! Please sign in.');
        showSignInForm();
        document.getElementById('registerForm').reset();
    });
}); 