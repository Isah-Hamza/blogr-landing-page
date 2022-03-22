console.log('start of script');
var nav = document.querySelector('[data-nav]');
var toggler = document.querySelector('[data-toggler]');
var menuIcon = document.querySelector('[data-menu-icon]');
var closeIcon = document.querySelector('[data-close-icon]');
var handleToggleIcon = function () {
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    nav.classList.toggle('hide');
};
toggler.addEventListener('click', handleToggleIcon);
console.log('end of script');
