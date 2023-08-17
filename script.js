/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
        navToggle = document.getElementById('nav__toggle'),
        navClose = document.getElementById('nav__close')

// menu show 
// validate if const exist 
// click and menu opens 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    });
}  
// menu hidden 
// validate if const exist 
// click and menu closes
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show__menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
// to go to the click page in the menu 
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{ 
    const navMenu = document.getElementById('nav__menu') 
    // When we click on each nav__link, we remove the show-menu class 
    navMenu.classList.remove('show__menu') 
}
navLink.forEach(n => n.addEventListener('click', linkAction))
