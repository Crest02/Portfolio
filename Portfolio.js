// HAMBURGER MENU TOGGLE
// HAMBURGER MENU TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});



const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navigation-link a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
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
