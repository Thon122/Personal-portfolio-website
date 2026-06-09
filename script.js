console.log("JS is successfully linked!");
// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to an 'X'
    navbar.classList.toggle('active'); // Slides the menu in/out
};

// Remove toggle icon and navbar when clicking navbar links (scroll)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Reusable highlighting engine
    const changeActiveNav = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        let activeLink = document.querySelector('.navbar a[href*=' + id + ']');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    // Smooth execution on manual user clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                changeActiveNav(targetId);
            }
        });
    });

    window.onscroll = () => {
        let top = window.scrollY;
        
        // Edge check: Are we at the absolute bottom of the document track?
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
            const lastSectionId = sections[sections.length - 1].getAttribute('id');
            changeActiveNav(lastSectionId);
            return;
        }

        // Standard coordinate tracking loop
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150; // Accounting for fixed glassmorphism header height
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                changeActiveNav(id);
            }
        });

        // Safe cleanup for viewport transition resets
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    };
});
// --- Modal Activation Script Logic ---
const modalOverlay = document.querySelector('#hire-modal');
const openModalButtons = document.querySelectorAll('.hire-trigger-btn'); // Matches your anchor class button
const closeModalButton = document.querySelector('.modal-close');

// Event listener to open modal overlay window
openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Keeps browser viewport anchored from jumps
        modalOverlay.classList.add('open');
    });
});

// Event listener to close window explicitly on 'X' click
closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
});

// Optional Accessibility UX: Close window if user clicks on empty space outside content box
window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
    }
});