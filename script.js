document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.mobile-menu-toggle') && !event.target.closest('.main-nav')) {
                mainNav.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Testimonial slider (if you have one)
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        if (testimonials.length > 0) {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }
    }

    // Initialize testimonials
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === 0 ? 'block' : 'none';
        });

        // Change testimonial every 5 seconds
        setInterval(showNextTestimonial, 5000);
    }

    // Parallax effect
    const parallaxBackground = document.querySelector('.parallax-background');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Parallax effect for footer
    const footer = document.querySelector('footer');
    const footerBackground = footer.querySelector('::before');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const footerOffset = footer.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > footerOffset) {
            const parallaxSpeed = 0.5; // Adjust this value to change the parallax speed
            const yOffset = (scrollPosition + windowHeight - footerOffset) * parallaxSpeed;
            footerBackground.style.transform = `translateY(${yOffset}px)`;
        }
    });
});
