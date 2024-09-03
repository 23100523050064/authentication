function toggleForms() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const formTitle = document.getElementById('formTitle');
    const toggleLink = document.querySelector('.toggle-link');

    if (signupForm.style.display === 'none') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        formTitle.textContent = 'Sign Up';
        toggleLink.textContent = 'Already have an account? Log In';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Log In';
        toggleLink.textContent = "Don't have an account? Sign Up";
    }
}