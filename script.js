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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
        const scrollDown = window.scrollY


        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
                {
                    sectionsClass.classList.add('active-link')
                }
                else
                {
                    sectionsClass.classList.remove('active-link')
                }
        })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)