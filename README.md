const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

const form = document.getElementById('intakeForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you. Your intake request has been prepared successfully.');
    form.reset();
  });
}

document.getElementById('year')?.textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.add('hidden');
  });
});
