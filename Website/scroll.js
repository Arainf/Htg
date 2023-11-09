//header
const header = document.querySelector('.box-2');
const htg = document.querySelector('.htg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 250) {
      header.style.background = "#121212";
      htg.innerHTML = 'HTG';
    } else {
       header.style.background = null;
      htg.innerHTML = 'HARD TO GUARD';
    }
});