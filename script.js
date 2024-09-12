// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email input');
    const passwordInput = document.querySelector('.password input');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginButton = document.querySelector('.log');
    const togglePasswordButton = document.getElementById('togglePassword');
    const rememberMeCheckbox = document.getElementById('check');
    const messageDiv = document.getElementById('message');

    // Email validation function
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Form validation
    function validateForm() {
        let isValid = true;

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            isValid = false;

        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!passwordInput.value) {
            passwordError.textContent = 'Password is required';
            messageDiv.style.color = 'white';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            messageDiv.style.color = 'white';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    }

    // Login function
    async function login() {
        if (!validateForm()) return;

        showLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: emailInput.value,
                    password: passwordInput.value,
                }),
            });

            if (response.ok) {
                messageDiv.textContent = 'Login successful!';
                messageDiv.style.color = 'white';
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('rememberedUser', emailInput.value);
                } else {
                    localStorage.removeItem('rememberedUser');
                }
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            messageDiv.textContent = 'Login failed. Please try again.';
            messageDiv.style.color = 'white';
        } finally {
            showLoading(false);
        }
    }

    // Show/hide loading spinner
    function showLoading(isLoading) {
        if (isLoading) {
            loginButton.disabled = true;
            loginButton.innerHTML = '<span class="spinner"></span> Logging in...';
        } else {
            loginButton.disabled = false;
            loginButton.textContent = 'Login';
        }
    }

    // Event listeners
    loginButton.addEventListener('click', login);

    // Show/hide password functionality
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.querySelector('i').classList.toggle('bxs-hide');
        togglePasswordButton.querySelector('i').classList.toggle('bxs-show');
    });

    // Remember me functionality
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        emailInput.value = rememberedUser;
        rememberMeCheckbox.checked = true;
    }
});