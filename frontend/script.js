// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const fadeElements = document.querySelectorAll('.fade-in');
const formFeedback = document.getElementById('formFeedback');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        const payload = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        };

        if (!payload.email) {
            showFeedback('Email is required. Please fill in the email field.', 'error');
            console.error('Email field is empty');
            return;
        }

        try {
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            console.log('Submitting contact form:', payload);

            const response = await fetch('http://localhost:8080/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                credentials: 'include' // For CORS with credentials
            });

            const result = await response.text(); // Use text() for plain string response
            console.log('Server response:', result);

            if (!response.ok) {
                throw new Error(result || 'Failed to send message');
            }

            showFeedback('Thank you! Your message has been sent. I will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            showFeedback(`There was an error sending your message: ${error.message}. Please try again.`, 'error');
        } finally {
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });
}

// Function to display feedback
function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback'; // Reset classes
    formFeedback.classList.add(type === 'success' ? 'success' : 'error');
    formFeedback.style.display = 'block';
    setTimeout(() => {
        formFeedback.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});