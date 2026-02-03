const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent page refresh

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      // Basic validation
      if (username === '' && password === '') {
        alert('Please enter username/email and password.');
        return;
      }

      if (username === '') {
        alert('Username or email is required.');
        return;
      }

      if (password === '') {
        alert('Password is required.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      // Optional simple email-like check if user typed an email
      if (username.includes('@')) {
        const atPos = username.indexOf('@');
        const dotPos = username.lastIndexOf('.');
        if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= username.length) {
          alert('Please enter a valid email address.');
          return;
        }
      }

      // If all checks pass
      alert('Login successful!');
      // Here you could submit form to server or redirect, etc.
      // loginForm.submit();
    });