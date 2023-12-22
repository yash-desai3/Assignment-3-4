function validateLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Invalid email format');
        return;
    }

    // Validate password format
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password format. It should contain an uppercase letter, a number, and only accept @ as a special character.');
        return;
    }

    // Check specific password for redirection
    if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function forgotPassword() {
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
}
