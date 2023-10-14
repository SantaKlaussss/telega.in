import Header from '../Header/Header';
import './Customers.css';
import online from '../../img/online.png';
import main from '../../img/main.png';
import { Slider } from '../Slider/Slider';
import Footer from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { Login } from '../Login/Login';
import { useState } from 'react';

export const Customers:React.FC = () => {

  return (
    <>
      <Header />
      <ScrollToTop/>
      <div className='customers__main'>
        <div className='customers__container'>
          <section className='customers__advertising'>
            <div className='customers__advertising-left'>
              <h1 className='advertising-left__title'>Нативные размещения в Телеграмм: <br /> <span className='advertising-left__title-yellow'>проверенные вручную</span> каналы и боты</h1>
              <p className='advertising-left__text'>Мы помогаем найти целевую аудиторию в Telegram и запускать эффективные интеграции</p>
              <ul className='advertising-left__info'>
                <li className='info__users'>
                  <p className='users__count'>377 057</p>
                  <p className='users__month'><b>+ 17 108</b> за месяц</p>
                  <p className='users__text'> новых пользоватилей на платформе</p>
                </li>
                <li className='info__channels'>
                  <p className='users__count'>13 964</p>
                  <p className='users__month'><b>+ 727</b> за месяц</p>
                  <p className='users__text'> каналов, проверенных вручную</p>
                </li>
                <li className='info__online'>
                  <p className='users__count'>314</p>
                  <div className='users__online'>
                    <img src={online} alt="онлайн" width={16} />
                    <span>online</span>
                  </div>
                  <p className='users__text'> пользователей сейчас онлайн</p>
                </li>
              </ul>
              <div className='advertising-left__buy btn'>Купить размещение</div>
            </div>
            <div className='customers__advertising-right'>
              <img src={main} width={450} alt="main" />
            </div>
          </section>
          <div className='customers__slider'>
            <div className='slider__title'>
              <h1 className='slider__title-text'>
              Нам доверяют ЮРЛИЦА: Предоставляем счета и акты, работаем с ЭДО
            </h1>
              <div className='slider__title-line'></div>
            </div>
            <Slider />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
};
