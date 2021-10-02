//HeaderScroll
const headerScroll = document.querySelector('.header-scroll');
window.onscroll = () => {
    let scroll = window.scrollY;
    if(scroll > 300)
    {
        headerScroll.classList.add('activo');
    } else
    {
        headerScroll.classList.remove('activo');
    }
}