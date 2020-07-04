const menu = document.querySelector('#menu-dropdown')
const card = document.querySelector('.card')

document.querySelector('.btn-menu').addEventListener('click', function () {
    if(!(menu.classList.contains('active')))
        menu.classList.add('active')
    else
        menu.classList.remove('active')

})

 
for(let card of cards){
    card.addEventListener('click', function () {
        
    })
}