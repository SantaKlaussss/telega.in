import React, { useState } from 'react';
import './Header.css';
import { Switch } from 'antd';
import online from '../../../img/online.png';
import { DownOutlined, LoginOutlined } from '@ant-design/icons';
import { Serves } from '../Serves/serves';
import { useDispatch, useSelector } from 'react-redux';
import { activeToggleSelector } from '../Redux/selectors';
import { activeToggleAction } from '../Redux/actions';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isServesActived, setIsServesActived] = useState(false);

  const servesRotate = () => {
    setIsServesActived((prevState) => !prevState);
  }

  const toggleDispatch = useDispatch();
  const isToggle = useSelector(activeToggleSelector);
  const navigate = useNavigate();

  const onToggle = () => {
    toggleDispatch(activeToggleAction());
    if (isToggle) {
      return navigate("/toggle-f");
    }
    return navigate("/toggle-u");
  };

  return (
    <header className='header'>
      <nav className='navigation'>
        <ul className='navigation__items'>
          <li className='navigation__item'>
            <a href="/" className='navigation__item-logo'>
              <svg width="150" height="auto" viewBox="0 0 293 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M232 37.6H219.7V49.9H232V37.6Z" fill="#325FEB"></path>
                <path d="M14.2 13.9H0V5.59998H38.6V13.9H24.4V49.8H14.2V13.9Z" fill="black"></path>
                <path d="M73.1 35.6H47.4C48.3 39.8 52 42.4 57.1 42.4C60.7 42.4 63.3 41.3 65.6 39.1L70.8 44.8C67.6 48.4 62.9 50.3 56.8 50.3C45 50.3 37.4 42.9 37.4 32.8C37.4 22.6 45.2 15.3 55.5 15.3C65.5 15.3 73.2 22 73.2 32.9C73.3 33.7 73.1 34.8 73.1 35.6ZM47.2 29.9H64C63.3 25.6 60.1 22.8 55.7 22.8C51.1 22.8 47.9 25.5 47.2 29.9Z" fill="black"></path>
                <path d="M79.9 2.89996H89.8V49.8H79.9V2.89996Z" fill="black"></path>
                <path d="M132 35.6H106.3C107.2 39.8 110.9 42.4 116 42.4C119.6 42.4 122.2 41.3 124.5 39.1L129.7 44.8C126.5 48.4 121.8 50.3 115.7 50.3C103.9 50.3 96.3 42.9 96.3 32.8C96.3 22.6 104.1 15.3 114.4 15.3C124.4 15.3 132.1 22 132.1 32.9C132.2 33.7 132.1 34.8 132 35.6ZM106.2 29.9H122.9C122.2 25.6 119 22.8 114.6 22.8C110.1 22.8 106.9 25.5 106.2 29.9Z" fill="black"></path>
                <path d="M173.9 15.8V44.1C173.9 56.7 167.1 62.6 154.8 62.6C148.4 62.6 142.1 61 138.1 57.9L142 50.8C144.9 53.1 149.7 54.7 154 54.7C161 54.7 164 51.5 164 45.4V43.9C161.4 46.7 157.7 48.1 153.3 48.1C143.9 48.1 136.3 41.6 136.3 31.7C136.3 21.8 143.9 15.3 153.3 15.3C158 15.3 162 16.9 164.6 20.2V15.8H173.9ZM164.1 31.7C164.1 26.7 160.4 23.4 155.2 23.4C150 23.4 146.2 26.8 146.2 31.7C146.2 36.7 150 40 155.2 40C160.4 40 164.1 36.7 164.1 31.7Z" fill="black"></path>
                <path d="M213.2 30.4V49.8H203.9V45.6C202.1 48.7 198.5 50.3 193.5 50.3C185.5 50.3 180.8 45.9 180.8 40C180.8 34 185 29.8 195.4 29.8H203.2C203.2 25.6 200.7 23.1 195.4 23.1C191.8 23.1 188.1 24.3 185.6 26.3L182.1 19.4C185.8 16.7 191.3 15.3 196.8 15.3C207.1 15.3 213.2 20.1 213.2 30.4ZM203.3 39.1V35.6H196.5C191.9 35.6 190.4 37.3 190.4 39.6C190.4 42.1 192.5 43.7 196 43.7C199.3 43.7 202.2 42.2 203.3 39.1Z" fill="black"></path>
                <path d="M237.4 5.59998C237.4 2.49998 239.9 0.0999756 243.5 0.0999756C247.1 0.0999756 249.6 2.39998 249.6 5.39998C249.6 8.69998 247.1 11.1 243.5 11.1C239.9 11.1 237.4 8.69998 237.4 5.59998ZM238.6 15.8H248.5V49.8H238.6V15.8Z" fill="black"></path>
                <path d="M292.4 30.4V49.9H282.5V31.9C282.5 26.4 280 23.9 275.6 23.9C270.9 23.9 267.4 26.8 267.4 33.1V49.9H257.5V15.9H266.9V19.9C269.6 17 273.5 15.4 278.2 15.4C286.4 15.3 292.4 20 292.4 30.4Z" fill="black"></path>
              </svg>
            </a>
            <div className="logo__online">
              <img className='logo__online-icon' src={online} width={20} height={'auto'} alt="онлайн" />
              <span className='logo__online-text'>459</span>
            </div>
          </li>
          <li className='navigation__item navigation__item-state'>
            <p style={{ color: isToggle ? '' : '#325feb' }} className='text-f'>Владельцу канала</p>
            <Switch
              onChange={onToggle}
              style={{ color: 'blue' }}
              checked={isToggle} 
            />
            <p style={{ color: isToggle ? '#325feb' : '' }} className='text-u'>Заказчикам</p>
          </li>
          <li className='navigation__item navigation__item-serves'>
            {isServesActived && <Serves />}
            <p onClick={servesRotate} className='text-serves'> Cервисы</p>
            <DownOutlined
              onClick={servesRotate} className='logo-serves'
              style={{
                rotate: isServesActived ? '180deg' : '',
                transition: isServesActived ? '300ms' : '300ms',
                color: 'blue',
                fontSize: '17px',
                fontWeight: '500px'
              }} />
          </li>
          <li className='navigation__item'>
            <button type='button' className='button-reg'>Регистрация</button>
          </li>
          <li className='navigation__item navigation__item-enter'>
            <div className='enter__button'>
              Войти
              <LoginOutlined className='enter__logo' />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
