document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesSubmenu = servicesDropdown.querySelector('.dropdown-submenu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    servicesDropdown.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        servicesSubmenu.classList.toggle('active');
    });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const carousel = document.getElementById('testimonialCarousel');
const colors = ['bg-gray-100', 'bg-orange-100', 'bg-red-200', 'bg-green-100', 'bg-blue-100' ];


function changeTestimonial(direction){
testimonials[currentTestimonial].classList.remove('active');
currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
testimonials[currentTestimonial].classList.add('active');

carousel.classList.remove(...colors);
carousel.classList.add(colors[currentTestimonial]);

}


carousel.classList.add(colors[0]);










