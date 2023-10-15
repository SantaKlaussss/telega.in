import './CatalogItem.css';
import { useEffect, useState } from 'react';
import { AiTwotoneTrophy } from "react-icons/ai";
import { FaRegGem } from "react-icons/fa";
import { RiHomeLine, RiPercentLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FcBusinesswoman } from 'react-icons/fc';
import { BsFillCartPlusFill, BsFillPersonFill } from "react-icons/bs";
import { FiChevronDown } from 'react-icons/fi';
import { PiDotsThreeBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { channelsSelector } from '../../../Redux/Catalog/catalogSelectors';
import { fetchChannels } from '../../../Redux/Catalog/catalogActions';

export const CatalogItem = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannels() as any);
  }, []);

  const channels = useSelector(channelsSelector);

  const [isSelect, setIsSelect] = useState(false);
  const formatSelect = (e:any) => {
    e.preventDefault()
    setIsSelect((prevState) => !prevState);
  }

  const [isCount, setIsCount] = useState(false);
  const countSelect = (e: any) => {
    e.preventDefault()
    setIsCount((prevState) => !prevState);
  }

  console.log(channels)

  return (
    <>
    <div className="card_container">
      <div className='card_items'>
        <div className="card_item card_item-logo">
          <div className="logo_raiting">
              <AiTwotoneTrophy size={12}/>
              <p>{channels.rating}</p>
          </div>
          <div className="logo_img">
              <FaRegGem className="logo_img-svg" />
              <a href="/">
                <img src={channels.logo} alt={channels.name}  />
              </a>
          </div>
        </div>
        <div className="card_item card_item-name">
          <div className='name_info'>
              <p className='name_title'>{channels.name}</p>
              <p className='name_description'>{channels.description}</p> 
              <p className='name_about_chanels'>{channels.category}</p>
          </div>
          <div className='name_logo'>
              <div className="logo_item logo_item-sale"><RiPercentLine /></div>
              <div className="logo_item logo_item-author"><HiOutlineUser /></div>
              <div className="logo_item logo_item-trust"><RiHomeLine /></div>
          </div>
        </div>
        <div className="grey">
          <div className="card_item card_item-users">
              <span className="card_item-users_text small_title_text">Подписчики:</span><br />
              <span className='card_item-users_count small_title_count'>{channels.followers}</span>
              <div className='person'>
                <span className='person_man'><BsFillPersonFill /></span><br />
                <span className='person_woman'><FcBusinesswoman /></span>
              </div>
              <div className='line'></div>
          </div>
          <div className="card_item card_item-views">
              <p className="card_item-views_text small_title_text">Просмотры:</p>
              <p className='card_item-views_count small_title_count'>{channels.format['1/24'].views}K</p>
              <p className='card_item-er small_title_text'>ER:</p>
              <p className="card_item-percent small_title_count">{channels.format.oneDay.er}%</p>
          </div>
          <div className="card_item card_item-cpv">
              <p className="card_item-cpv_text small_title_text">CPV:</p>
              <p className='card_item-cpv_price small_title_count'>{channels.format.oneDay.cpv} ₽</p>
          </div>
        </div>
        <div className="card_item card_item-price">
          <form className='format'>
            <div className='format_left'>
              <p className='title_format_left small_title_text'>Формат:</p>
              <div className="format_left-wrapper" onClick={formatSelect}>
                <button className='format_left_select' >1/24</button>
                <i className='input_select-svg'><FiChevronDown size={25} color='rgb(50, 95, 235)' /></i>
                <div className="list_items">
                  <ul 
                    className='left_show' 
                      style={{ display: isSelect ? 'block' : 'none' }}>
                    <li className='selected'>1/24</li>
                    <li className='selected'>Нативный</li>
                    <li className='selected'>Без удаления</li>
                    <li className='selected'>Репост</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='format_right'>
                <p className='title_format-right small_title_text'>Колличество:</p>
                <div className="format_right-wrapper" onClick={countSelect}>
                  <button className='format_right_select' >1</button>
                <i className='input_select-svg'><FiChevronDown size={25} color='rgb(50, 95, 235)' /></i>
                <div className="list_items">
                  <ul
                    className='right_show'
                      style={{ display: isCount ? 'block' : 'none' }}>
                    <li className='selected'>1</li>
                    <li className='selected'>2</li>
                    <li className='selected'>3</li>
                    <li className='selected'>4</li>
                    <li className='selected'>5</li>
                    <li className='selected'>6</li>
                    <li className='selected'>7</li>
                    <li className='selected'>8</li>
                    <li className='selected'>9</li>
                    <li className='selected'>10</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
            <div className='format_price'>
              <p className='format_price-big'>{channels.format['1/24'].price}
                <span className='format_price-little'>.00</span>₽
              </p>
            </div>
        </div>
        <div className="card_item card_item-cart">
          <PiDotsThreeBold 
            size={40} 
            color='white'
            className='point-svg'
          />
          <BsFillCartPlusFill
            size={25} 
            color='white'
            className='cart-svg'
          />
        </div>
      </div>
    </div>
    </>
  )
};
