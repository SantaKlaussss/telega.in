import './ScrollToTop.css';
import arrow from '../../img/arrow.png';
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [currentScrollY, setCurrentScrollY] = useState(0);

  function goTop() {
    if (currentScrollY > 0) {
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    const changeScroll = () => { setCurrentScrollY(window.scrollY) };
    window.addEventListener('scroll', changeScroll);

    return () => {
      window.removeEventListener('scroll', changeScroll);
    };
  })

  return currentScrollY > 150 ? (
    <img className='scroll' src={arrow} alt='arrow' onClick={goTop}/>
  ) : null
};
