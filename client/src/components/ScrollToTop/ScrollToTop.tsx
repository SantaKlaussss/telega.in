import './ScrollToTop.css';
import arrow from '../../img/arrow.png';

window.addEventListener("scroll", trackScroll);
const goTopBtn = document.querySelector(".scroll");

function trackScroll() {
  const offset = window.scrollY;
  if (offset > 150) {
    if (goTopBtn)
    goTopBtn.classList.add('scroll--show');
  } else if (goTopBtn) {
    goTopBtn.classList.remove('scroll--show');
  }
}

function goTop () {
  if (window.scrollY > 0) {
    window.scrollBy(0, -10);
    setTimeout(goTop, 0)
  }
}

export const ScrollToTop = () => {

  return (
    <img className='scroll' src={arrow} alt='arrow' onClick={goTop}/>
  )
};
