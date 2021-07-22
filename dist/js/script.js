const humburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

humburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    document.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape'){
            menu.classList.remove('active');
        }
    });
    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
});

