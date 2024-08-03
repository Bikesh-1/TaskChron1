document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.btn');
    loginButton.addEventListener('click', function () {
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Simulated login check
        if (email === 'user@example.com' && password === 'password123') {
            alert('Login successful!');
            // Redirect to another page or perform other actions on successful login
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
