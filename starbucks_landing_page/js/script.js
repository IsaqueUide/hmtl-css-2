const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links')
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})

window.addEventListener('scroll', () =>{
    const header = document.getElementById('header')

    if(window.scrollY > 0){
        console.log('olá')
    }
})