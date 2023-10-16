import './CatalogItem.css';
import { useState } from 'react';
import { AiTwotoneTrophy } from "react-icons/ai";
import { FaRegGem } from "react-icons/fa";
import { RiHomeLine, RiPercentLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FcBusinesswoman } from 'react-icons/fc';
import { BsFillCartPlusFill, BsFillPersonFill } from "react-icons/bs";
import { FiChevronDown } from 'react-icons/fi';
import { PiDotsThreeBold } from 'react-icons/pi';

type catalogItemProps = {
  channel: any
}

export const CatalogItem: React.FC<catalogItemProps> = ({ channel }) => {

  const [isSelect, setIsSelect] = useState(false);
  const formatSelect = (e: any) => {
    e.preventDefault()
    setIsSelect((prevState) => !prevState);
  }

  const { id, rating, logo, name, description, category, feature: { sale, authorFamous, trust }, followers, format } = channel;

  const [isCount, setIsCount] = useState(false);
  const countSelect = (e: any) => {
    e.preventDefault()
    setIsCount((prevState) => !prevState);
  }

  const [currentType, setCurrentType] = useState(Object.keys(format)[0]);
  const handlerForamt = (e: any) => {
    setCurrentType(e.target.dataset.typeformat)
  }

  const [countFormat, setCountFormat] = useState('1')
  const handleCount = (e:any) => {
    setCountFormat(e.target.dataset.countformat)
  }

  return (
    <>
      <div className="card_container">
        <div className='card_items'>
          <div className="card_item card_item-logo">
            <div className="logo_raiting">
              <AiTwotoneTrophy size={12} className='logo_raiting-svg' />
              <p>{rating}</p>
            </div>
            <div className="logo_img">
              <FaRegGem className="logo_img-svg" />
              <img src={logo} alt={description} />
            </div>
          </div>
          <div className="card_item card_item-name">
            <div className='name_info'>
              <p className='name_title'>{name}</p>
              <p className='name_description'>{description}</p>
              <p className='name_about_chanels'>{category}</p>
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
              <span className='card_item-users_count small_title_count'>{followers}</span>
              <div className='person'>
                <span className='person_man'><BsFillPersonFill /></span><br />
                <span className='person_woman'><FcBusinesswoman /></span>
              </div>
              <div className='line'></div>
            </div>
            <div className="card_item card_item-views">
              <p className="card_item-views_text small_title_text">Просмотры:</p>
              <p className='card_item-views_count small_title_count'>{format[currentType].views}K</p>
              <p className='card_item-er small_title_text'>ER:</p>
              <p className="card_item-percent small_title_count">{format[currentType].er}%</p>
            </div>
            <div className="card_item card_item-cpv">
              <p className="card_item-cpv_text small_title_text">CPV:</p>
              <p className='card_item-cpv_price small_title_count'>{format[currentType].cpv} ₽</p>
            </div>
          </div>
          <div className="card_item card_item-price">
            <form className='format'>
              <div className='format_left'>
                <p className='title_format_left small_title_text'>Формат:</p>
                <div className="format_left-wrapper" onClick={formatSelect}>
                  <button className='format_left_select'>{currentType}</button>
                  <i className='input_select-svg'><FiChevronDown size={25} color='rgb(50, 95, 235)' /></i>
                  <div className="list_items">
                    <ul className='left_show'
                      style={{ display: isSelect ? 'block' : 'none' }}>
                        {Object.keys(format).map((item) => {
                          return <li className='selected' key={id} data-typeFormat={item} onClick={handlerForamt}>{item}</li>
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='format_right'>
                <p className='title_format-right small_title_text'>Колличество:</p>
                <div className="format_right-wrapper" onClick={countSelect}>
                  <button className='format_right_select' >{countFormat}</button>
                  <i className='input_select-svg'><FiChevronDown size={25} color='rgb(50, 95, 235)' /></i>
                  <div className="list_items">
                    <ul
                      className='right_show'
                      style={{ display: isCount ? 'block' : 'none' }}>
                      <li className='selected' data-countFormat='1' onClick={handleCount}>1</li>
                      <li className='selected' data-countFormat='2' onClick={handleCount}>2</li>
                      <li className='selected' data-countFormat='3' onClick={handleCount}>3</li>
                      <li className='selected' data-countFormat='4' onClick={handleCount}>4</li>
                      <li className='selected' data-countFormat='5' onClick={handleCount}>5</li>
                      <li className='selected' data-countFormat='6' onClick={handleCount}>6</li>
                      <li className='selected' data-countFormat='7' onClick={handleCount}>7</li>
                      <li className='selected' data-countFormat='8' onClick={handleCount}>8</li>
                      <li className='selected' data-countFormat='9' onClick={handleCount}>9</li>
                      <li className='selected' data-countFormat='10' onClick={handleCount}>10</li>
                      <li className='selected' data-countFormat='15' onClick={handleCount}>15</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
            <div className='format_price'>
              <p className='format_price-big'>{format[currentType].price}
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
