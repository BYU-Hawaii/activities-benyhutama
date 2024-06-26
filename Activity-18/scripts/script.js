document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value; // Get phone number value

    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username validation
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Email validation
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); // Password validation
    var phoneValid = /^\+?[1-9]\d{1,14}$/.test(phone); // Phone number validation

    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block'; // Show phone number feedback

    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Please enter a valid phone number.'; // Phone number feedback

    var formValid = usernameValid && emailValid && passwordValid && phoneValid;

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').style.display = 'block';
        
    } else {
        document.getElementById('registrationFeedback').textContent = '';
        document.getElementById('registrationFeedback').style.display = 'none';
    }
});