document.addEventListener('DOMContentLoaded', () => {
    // Add simple reveal animation on scroll for elements with fade-in class
    const revealElements = document.querySelectorAll('.fade-in');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    setTimeout(() => {
        revealOnScroll();
    }, 100);
});
