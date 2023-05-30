let open = document.querySelector('.mob-menu-btn');
let close = document.querySelector('.mob-menu-close');
let mobMenu = document.querySelector('.mob-menu');

open.addEventListener('click', function() {
    mobMenu.style.display = 'block';
});

close.addEventListener('click', function() {
    mobMenu.style.display = 'none';
});