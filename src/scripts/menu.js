const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
  const menuContent = document.getElementById('menuContent');
  const activeMenu = menuContent.classList.toggle('activate-menu');

  activeMenu
  ? document.body.style.overflow = 'hidden'
  : document.body.style.overflow = 'visible';
})