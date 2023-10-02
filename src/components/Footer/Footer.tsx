import React from 'react';
import './Footer.css';
import pay from '../../img/pay.png';
import phone from '../../img/phone.png';
import cmc from '../../img/смс.png';
import telegram from '../../img/telegram.png';
import youtube from '../../img/youtube.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer__items'>
        <div className='footer__item telega__pay__system'>
          <img src={pay} width={120} alt="pay" />
          <ul>
            <li>c 2023</li>
          </ul>
        </div>
        <div className='footer__item telega__info'>
          <p className='item__title'>Telega</p>
          <ul className='list__items'>
            <li className='list__item'>Вакансии</li>
            <li className='list__item'>Пользовательское соглашение</li>
            <li className='list__item'>Правила пользования</li>
          </ul>
        </div>
        <div className='footer__item telega__product'>
          <p className='item__title'>Продукты</p>

          <ul className='list__items'>
            <li className='list__item'>Каталог Telegram-каналов</li>
            <li className='list__item'>Каталог Telegram-ботов</li>
            <li className='list__item'>Каталог Telegram-предложений</li>
            <li className='list__item'>Аналитика Telegram-каналов</li>
            <li className='list__item'>Готовыые предложенния</li>
            <li className='list__item'>Бот горящих предложений</li>
            <li className='list__item'>Бот нотификации</li>
          </ul>
        </div>
        <div className='footer__item telega__messages'>
          <p className='item__title'>Сообщество</p>
          <ul className='list__items'>
            <li className='list__item'>Блог</li>
            <li className='list__item'>Исследование рынка нативных интеграций</li>
            <li className='list__item'>Наш Telegram-канал</li>
            <li className='list__item'>Партнерская программа</li>
            <li className='list__item'>Владельцам каналов</li>
            <li className='list__item'>Отзыв о Telega.in</li>
            <li className='list__item'>База знганий</li>
          </ul>
        </div>
        <div className='footer__item telega_help'>
          <p className='item__title'>Помощь</p>
          <ul className='list__items'>
            <li className='list__item'>FAQ</li>
            <li className='list__item'>Бот поддержки</li>
            <li className='list__item'>Напишите нам</li>
          </ul>
        </div>
        <div className='footer__item telega__sales__dep'>
          <p className='item__title'>Отдел продаж</p>
          <p className='work__schedule'>Пн-Пт: C 09:00 до 18:00</p>
          <a href="/" className='phone'>
            <img src={phone} height={16} alt="phone" />
            <p>8(800)707-63-15</p>
          </a>
          <a href="/" className='phone'>
            <img src={phone} height={16} alt="phone" />
            <p>+7(495)818-62-50</p>
          </a>
          <p>Круглосуточно</p>
          <a href="/" className='cmc'>
            <img src={cmc} alt="cmc" />
            info@telega.in
          </a>
          <a href="/">
            <img src={youtube} width={20} alt="youtube" />
            <img src={telegram} width={20} alt="telegram" />
          </a>

        </div>
      </nav>
      
    </footer>
  )
}

export default Footer
