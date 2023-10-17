import './Catalog.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { PiChecksLight, PiLockBold, PiTrendUpDuotone } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { CatalogItem } from './CatalogItem/CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels } from '../../Redux/Catalog/catalogActions';
import { channelsSelector, currentPageSelector } from '../../Redux/Catalog/catalogSelectors';
import Pagination from '../Pagination/Pagination';

export const Catalog = () => {
  const [isRating, setIsRating] = useState(false);
  const ratingChange: any = () => {
    setIsRating((prevState) => !prevState)
  };

  let currentPage = useSelector(currentPageSelector);
  console.log(currentPage)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannels(currentPage, 30) as any);
  }, []);

  const channels = useSelector(channelsSelector);
  return (
    <>
      <Header />
      <div className="main_pages">
        <div className='container'>
          <h1 className='catalog_title'>Каталог Telegram-каналов</h1>

          <div className='catalog_container'>
            <div className='filter_title'>
              <p className='title_text'>Фильтр</p>
              <svg xmlns="http://www.w3.org/2000/svg" className='filter_svg' width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M4 6l8 0"></path>
                <path d="M16 6l4 0"></path>
                <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M4 12l2 0"></path>
                <path d="M10 12l10 0"></path>
                <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M4 18l11 0"></path>
                <path d="M19 18l1 0"></path>
              </svg>
            </div>
            <div className='info_items'>
              <div className="info_item info_item-chanels">Каналы</div>
              <div className="info_item info_item-count">12 953</div>
              <div className="info_item info_item-rating" onClick={ratingChange}>
                <span>Рейтинг</span>
                <PiTrendUpDuotone
                  size={20}
                  style={{
                    marginRight: '10px',
                    rotate: isRating ? '180deg' : '',
                    transition: isRating ? '300ms' : '300ms'
                  }}
                />
              </div>
              <div className="info_item info_item-er on_hover_yellow">ER</div>
              <div className="info_item info_item-views on_hover_yellow">Просмотры</div>
              <div className="info_item info_item-users on_hover_yellow">Подписчики</div>
              <div className="info_item info_item-price on_hover_yellow">Стоимость</div>
              <div className="info_item info_item-add on_hover_yellow">Добавлен</div>
              <div className="info_item info_item-cpv on_hover_yellow">CPV</div>
              <div className="info_item info_item-selected"><PiChecksLight /></div>
            </div>
            <div className="filter">

              <div className='filter_input'>
                <div className="input_up">
                  <input type="text" placeholder='Поиск...' className='input_search' />
                  <i className='input_search-svg'><FiSearch size={20} color='rgb(50, 95, 235)' /></i>
                </div>

                <p className='title_input_down'>Тематики</p>
                <div className='input_down'>
                  <input type="button" value='Все тематики' title='' className='input_select' />
                  <i className='input_select-svg'><FiChevronDown size={25} color='rgb(50, 95, 235)' /></i>
                </div>
              </div>
              <div className='filter_unlock'>
                <div className='unlock_title_group'>
                  <PiLockBold color='rgb(50, 95, 235)' />
                  <span className='unlock_title'>Разблокируйте фильтры</span>
                </div>

                <p className='unlock_description'>Войдите или зарегистрируйтесь, чтобы получить полный доступ к фильтрам</p>
                <button className='unlock_btn'>Зарегистрироваться</button>
              </div>
            </div>
            <div className='catalog_items'>
              {channels.map((channel: any) => {
                return <CatalogItem key={channel.id} channel={channel} />
              })}
            </div>
            <Pagination />
          </div>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </>
  )
};
