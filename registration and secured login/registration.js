document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) 
    {
        event.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username.trim() === '' || password.trim() === '')
        {
            alert('Username and password are required.');
        } 
        else 
        {
            var users = JSON.parse(localStorage.getItem('users')) || {};
            if (username in users) 
            {
                alert('Username already exists.');
                
            } 
            else
            {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful! You can now login.');

            }
        }
    });
});
