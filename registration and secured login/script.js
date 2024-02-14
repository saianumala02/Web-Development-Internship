document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var users = JSON.parse(localStorage.getItem('users')) || {};

        if (username in users && users[username] === password) 
        {
            alert('Login successful');
            window.location.href = 'secured.html';
        } 
        else 
        {
            alert('Invalid username or password!!');
        }
    });
});
