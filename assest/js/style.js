
// Change the background color of the navigation element when scrolling
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;

  const scrollThreshold = 200; //height at which it will change the background color.

  if (scrollY >= scrollThreshold) {
    navbar.style.backgroundColor = 'black'; //background color when scrolling.
  } else {
    navbar.style.backgroundColor = 'transparent'; //background color when at the top.
  }
});