
// menu configuration

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
})

