/* Portfolio JavaScript */

/* Mobile Navigation */

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.textContent = 'Menu';
menuButton.setAttribute('aria-label', 'Toggle navigation menu');
menuButton.setAttribute('aria-expanded', 'false');

navbar.appendChild(menuButton);

menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuButton.textContent = isOpen ? 'X' : 'Menu';
    menuButton.setAttribute('aria-expanded', isOpen);

});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuButton.textContent = 'Menu';
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

/*Select Project Cards*/

const projectCards = document.querySelectorAll('.project-card');

/*button filter*/
const filterButtons = document.querySelectorAll('.filter-button');

/* Filter Projects by Category */
filterButtons.forEach(button => {
    button.addEventListener('click', function() {

        const category = button.dataset.filter;
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        projectCards.forEach(card => {

            const projectCategory = card.dataset.category;

            if (
                category === 'all' || projectCategory === category ) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';

                }
                });
});
});

const projectObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    observerOptions
);

projectCards.forEach(card => {
    card.classList.add('reveal');
    projectObserver.observe(card);
}); 

/*Copyright*/ 

const footerText = document.querySelector(' footer p');

if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} My Portfolio. All rights reserved.`;
}

/* smooth scrolling for anchor links */ 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            return; 
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ 
                behavior: 'smooth' 
                block: 'start'
            
            });
        }
    });
});
