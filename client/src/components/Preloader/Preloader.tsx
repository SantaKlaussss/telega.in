import spin from '../../img/spin.svg';
import './Preloader.css';

export const Preloader = () => {
  return (
    <>
      <img src={spin} alt="spinner" className='spinner' />
    </>
  )
};
