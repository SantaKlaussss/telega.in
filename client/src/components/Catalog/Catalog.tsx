import './Catalog.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

export const Catalog = () => {

  return (
    <>
      <Header/>
      <div className='container'>
        <h1 className='catalog_title'>Каталог Telegram-каналов</h1>
        <div className="catalog_info">
          <div className="filter">
            <div className='filter_title'>
              <p className='title_text'>Фильтр</p>
              <svg xmlns="http://www.w3.org/2000/svg" className='filter_svg' width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            <div className='filter_input'>
              <div className="input_up">
                <input type="text" placeholder='Поиск...' className='input_search'/>
                <i className='input_search-svg'><img src="https://avatars.mds.yandex.net/i?id=b8abc4a2247a6997db1b0d6ec4a254cfc0d4c357-9148914-images-thumbs&n=13" alt=""  width={25}/></i>
              </div>
              
              <p className='title_input_down'>Тематики</p>
              <div className='input_down'>
                <input type="button" value='Все тематики' title='' className='input_select'/>
                <i className='input_select-svg'><img src="https://cdn1.iconfinder.com/data/icons/arrows-flat-7/48/30.down_arrow_arrows_downloading_direction-1024.png" alt="arrow down" width={18} /></i>
              </div>
            </div>
            <div className='filter_unlock'>
              <div className='unlock_title_group'>
                <img src="https://avatars.mds.yandex.net/i?id=3c367c6b00c1954bd9488270bc086c0d61417739-8496372-images-thumbs&n=13" alt="замок" width={13} className='unlock_title-img'/>
                <span className='unlock_title'>Разблокируйте фильтры</span>
              </div>
              
              <p className='unlock_description'>Войдите или зарегистрируйтесь, чтобы получить полный доступ к фильтрам</p>
              <button className='unlock_btn'>Зарегистрироваться</button>
            </div>
          </div>
          <div className='sort'></div>
        </div>
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  )
};
