import './serves.css';
import { AlertOutlined, BarChartOutlined, CommentOutlined, CrownOutlined, RedditOutlined, RiseOutlined } from '@ant-design/icons';

export const Serves = () => {
  return (
    <div className='popap__container'>
      <span className='popap__title'>Каталоги</span>
      <ul className='popap__items'>
        <li className='popap__item'>
          <a href="">
            <CommentOutlined className='popap__item-log'/>
            <span className='popap__item-text'>Каталог каналов</span>
          </a>
        </li>
        <li className='popap__item'>
          <a href="">
            <RedditOutlined className='popap__item-log' />
            <span className='popap__item-text'>Каталог ботов</span>
          </a>
        </li>
        <li className='popap__item'>
          <a href="">
            <AlertOutlined className='popap__item-log' />
            <span className='popap__item-text'>Каталог горящих предложений</span>
          </a>
        </li>
      </ul>
      <span className='popap__title'>Другое</span>
      <ul className='popap__items'>
        <li className='popap__item'>
          <a href="">
            <CrownOutlined className='popap__item-log' />
            <span className='popap__item-text'>Готовые предложения</span>
          </a>
        </li>
        <li className='popap__item'>
          <a href="">
            <RiseOutlined className='popap__item-log' />
            <span className='popap__item-text'>Массовая закупка репостов</span>
          </a>
        </li>
        <li className='popap__item'>
          <a href="/">
            <BarChartOutlined className='popap__item-log' />
            <span className='popap__item-text'>
              Аналитика Telegram-каналов</span>
          </a>
        </li>
      </ul>
      <div className='popap__item-button'>
        <button type='button' title='dutton' className='btn'> Заказать готовое предложение
      </button>
      </div>      
    </div>
  )
}
