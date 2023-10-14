import React from 'react'
import './Login.css';
import { FiEye, FiMail, FiX } from 'react-icons/fi';

export const Login:React.FC = () => {
  return (
    <div className='login_container'>
      <FiX className='login_close'/>
      <div className='login_main'>
        <p className="title">Авторизация</p>
        <div className="email_wrapper">
          <input type="email" title='email'className='email_input' placeholder='Электронная почта' />
          <FiMail className='email_input-svg'/>
        </div>
        <div className="password_wrapper">
          <input type="password" title='password' className='password_input' placeholder='Пароль'/>
          <FiEye className='password_input-svg' />
        </div>
        <p className="forget_pass">Забыли пароль?</p>
        <button type='button' title='button' className='login_button'>Войти</button>
        <div className="login_footer">
          <div className='login_footer-not_acc'>Нет аккаунта?</div>
          <div className='login_footer-registration'>Зарегистрироваться</div>
        </div>
      </div>
    </div>
  )
}