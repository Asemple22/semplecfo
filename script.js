document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Initialize testimonials
    testimonials.forEach((testimonial, index) => {
        if (index === 0) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickInsideHamburger && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});
