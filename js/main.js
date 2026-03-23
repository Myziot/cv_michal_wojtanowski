// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements that should animate on scroll
const scrollElements = document.querySelectorAll(
    '.timeline-item, .education-card, .skill-tag, .language-card, .cert-card, .about-text'
);

scrollElements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add stagger animation to skills on page load
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    setTimeout(() => {
        tag.style.transition = 'all 0.4s ease';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    }, 200 + index * 50);
});

// Add stagger animation to certifications
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
        card.style.transition = 'all 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200 + index * 100);
});

// Add stagger animation to language cards
const languageCards = document.querySelectorAll('.language-card');
languageCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
        card.style.transition = 'all 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200 + index * 150);
});

// Console message for developers
console.log('%cMichał Wojtanowski - Personal CV', 'font-size: 20px; font-weight: bold; color: #1a1a2e;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #555555;');

// Rotating Image Feature
const heroImages = document.querySelectorAll('.hero-image');
const imagePaths = [
    'images/Myzi-03.jpg',
    'images/Myzi-11.jpg',
    'images/Myzi-16.jpg',
    'images/Myzi-24.jpg'
];
let currentIndex = 0;

function rotateImages() {
    // Fade out current image
    heroImages[currentIndex].classList.remove('active');
    
    // Calculate next image index
    currentIndex = (currentIndex + 1) % heroImages.length;
    
    // Fade in next image after fade out completes
    setTimeout(() => {
        heroImages[currentIndex].classList.add('active');
    }, 400); // 0.4s fade duration
}

// Start rotation every 4 seconds
setInterval(rotateImages, 4000);
