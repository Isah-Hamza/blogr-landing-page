console.log('start of script');

const nav = document.querySelector('[data-nav]');
const toggler = document.querySelector('[data-toggler]');
const menuIcon = document.querySelector('[data-menu-icon]');
const closeIcon = document.querySelector('[data-close-icon]');

const handleToggleIcon = () => {
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    nav.classList.toggle('hide');
}

toggler.addEventListener('click', handleToggleIcon )

console.log('end of script');