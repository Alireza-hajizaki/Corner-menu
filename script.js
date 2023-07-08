const toggleBtn = document.querySelector('#toggle-btn')
const menuItems = document.querySelectorAll('.menu a')
const mainDecs = document.querySelector('h1')
let isMenuActive = false;


toggleBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        
        menuItems[0].style.transform = 'translate(150px, 0)'
        menuItems[1].style.transform = 'translate(150px, 90px)'
        menuItems[2].style.transform = 'translate(90px, 150px)'
        menuItems[3].style.transform = 'translate(0, 150px)'
        
        toggleBtn.classList.add('active');
        mainDecs.style.color ="#0d0744"
        isMenuActive = true

    } else {
        
        menuItems.forEach(menuItem => menuItem.style.transform = 'translate(0, 0)')
        
        toggleBtn.classList.remove('active')
        mainDecs.style.color ="#FFF"
        isMenuActive = false
    
    }
})