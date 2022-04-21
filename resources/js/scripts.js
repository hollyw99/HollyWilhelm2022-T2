
/* NAVIGATION */

function openNav() {

    let toggler = document.querySelector('.nav-prompt')

    let navigation = document.querySelector ('.main-nav')

    toggler.onclick = function(){
    navigation.classList.toggle('open')
    }

}

/* this is for lightbox gallery */ 

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });