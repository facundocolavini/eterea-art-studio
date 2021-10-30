const  mobileBtn = document.getElementById('btn-open');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('btn-close');

mobileBtn.addEventListener('click',()=>{
    nav.classList.add('menu-btn');
})
mobileBtnExit.addEventListener('click',()=>{
    nav.classList.remove('menu-btn');
})