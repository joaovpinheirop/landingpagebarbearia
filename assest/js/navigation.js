

const navHome = document.getElementById('nav-Home');
const screenHome = document.getElementById('pag-home');

const iconMenu = document.getElementById('icon-menu')
const listMenu = document.getElementById('list-menu')
let visible = false;

//show or disappear with the menu
iconMenu.addEventListener('click', () => {

  if (visible) {
    listMenu.style.display = 'flex';
    visible = false;
  } else {
    listMenu.style.display = 'none';
    visible = true;
  }
});


navHome.addEventListener('click', () => {
  console.log('asd')
  jobsScreen.scrollIntoView({ behavior: 'smooth' });

});

