document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Simple client-side validation (you should do server-side validation too)
    if (username === 'admin' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
