import './Catalog.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { PiChecksLight, PiLockBold, PiTrendUpDuotone } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { CatalogItem } from './CatalogItem/CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels, valueSearchAction, valueSortAction } from '../../Redux/Catalog/catalogActions';
import { channelsSelector, currentPageSelector, valueSearchSelector, valueSortSelector } from '../../Redux/Catalog/catalogSelectors';
import Pagination from '../Pagination/Pagination';
import { channelType } from '../../Redux/Types';
import { filtered, sortedChannels } from './filter';
import { Reorder } from 'framer-motion';

export const Catalog = () => {
  const channels = useSelector(channelsSelector);
  const valueSearch = useSelector(valueSearchSelector);
  const channelsSort = useSelector(valueSortSelector);

  // состояние для DrugnDrop каналов
  const [renderedChannels, setRenderedChannels] = useState<channelType[]>([]);

  //логика для сортировки
  const [isRating, setIsRating] = useState(false);

  const sortedChange: any = (e: any) => {
    let sortType = e.target.dataset.sorting;
    sortedChannels(sortType, channels, channelsSort.order);

    setIsRating((prevState) => {
      return !prevState;
    })

    dispatch(valueSortAction(sortType))
  }

  // логика для пагинации
  let currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannels(currentPage, 3) as any);
  }, [currentPage])

  // логика для фильтра
  const valueSearchFilter = (e: any) => {
    dispatch(valueSearchAction(e.target.value))
  }

  useEffect(() => {
    setRenderedChannels(filtered(valueSearch, channels));
  }, [channels, valueSearch]);

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
            <div className='info_items' >
              <div className="info_item info_item-chanels">Каналы</div>
              <div className="info_item info_item-count">12 953</div>
              <div className="info_item info_item-rating" data-sorting='rating' onClick={(e) => { sortedChange(e) }}>
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
              <div className="info_item info_item-er on_hover_yellow" data-sorting='er' onClick={(e) => { sortedChange(e) }}>ER</div>
              <div className="info_item info_item-views on_hover_yellow" data-sorting='views' onClick={(e) => { sortedChange(e) }} >Просмотры</div>
              <div className="info_item info_item-users on_hover_yellow" data-sorting='followers' onClick={(e) => { sortedChange(e) }}>Подписчики</div>
              <div className="info_item info_item-price on_hover_yellow" data-sorting='price' onClick={(e) => { sortedChange(e) }}>Стоимость</div>
              <div className="info_item info_item-add on_hover_yellow">Добавлен</div>
              <div className="info_item info_item-cpv on_hover_yellow" data-sorting='cpv' onClick={(e) => { sortedChange(e) }}>CPV</div>
              <div className="info_item info_item-selected"><PiChecksLight /></div>
            </div>
            <div className="filter">

              <div className='filter_input'>
                <div className="input_up">
                  <input
                    type="text"
                    placeholder='Поиск...'
                    className='input_search'
                    onChange={(e) => { valueSearchFilter(e) }} />
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
            <Reorder.Group axis="y" values={renderedChannels} className='catalog_items' onReorder={setRenderedChannels}>
              {renderedChannels.map((channel: channelType) => {
                return <Reorder.Item key={channel.id} value={channel} >
                  <CatalogItem key={channel.id} channel={channel} />
                </Reorder.Item>
              })}
            </Reorder.Group>
          </div>
        </div>
      </div>
      <div className='pagination'>
        <Pagination />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
};
