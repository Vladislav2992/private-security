(function() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.heder__main-menu')

    burger.addEventListener('click', ()=>{
        menu.classList.toggle('active')
        burger.classList.toggle('active')
    })
})()