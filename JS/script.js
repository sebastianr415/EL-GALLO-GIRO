const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let elements = document.getElementsByClassName('column');
let i ;

function two (){
    for ( i = 0; i < elements.length; i++){
        elements[i].getElementsByClassName.flex ='50%'
    }
}
