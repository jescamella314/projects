
function setGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    
    if (greetingElement) {
        greetingElement.textContent = greeting + ' Welcome to My Portfolio';
    }
}


function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}


function validateContactForm() {
    const form = document.getElementById('contactForm');
    let isValid = true;
    
   
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (!name.value.trim()) {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
   
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\d{10}$/;
    
    if (phone.value && !phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Please enter a 10-digit phone number';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }
    

    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (!message.value.trim()) {
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    if (isValid) {
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    }
    
    return false; 
}


function validateSurveyForm() {
    const email = document.getElementById('email-survey');
    const emailError = document.getElementById('survey-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value && !emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
    }
    
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('survey-success').style.display = 'block';
    return false; 
}


function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}


function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').textContent = 'Light Mode';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    initTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateContactForm();
        });
    }
    
    const surveyForm = document.getElementById('surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateSurveyForm();
        });
    }
});