import { features } from 'process'
import style from './HowToBuy.module.css'

export const HowToBuy = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Как купить интеграцию в Телеграм с Telega.in</h1>
      <ul className={style.features}>
        <li className={style.features__item}>
          <img title='cat' src={'https://telega.in/assets/home/wc2-aaff057635750d0aee65baef23003996b8f9567f94526bb5d29c0bd14c000a3d.svg'} className={style.features__logo}></img>
          <p className={style.features__description}>Нам доверяют 
            <span className={style.textBold}> 13 588 </span> 
            владельцев проверенных каналов
          </p>
        </li>
        <li className={style.features__item}>
          <img src='https://telega.in/assets/home/wc6-db6638de30ae444024db907102f31b0eaafe9be4976eee2de8294e9a2cfc25ec.svg' title='cart' className={style.features__logo}></img>
          <p className={style.features__description}>Вывод средств 
            <span className={style.textBold}> 3 раза </span>
            в неделю
          </p>
        </li>
        <li className={style.features__item}>
          <img title='cat scientist' src='https://telega.in/assets/home/wc8-aa7da2ef0fe2f724140096130807bb85a7b8a04c48212ada821e74211ea426a6.svg' className={style.features__logo}></img>
          <p className={style.features__description}>Поддержка 
            <span className={style.textBold}> 7 дней </span> 
            в неделю
          </p>
        </li>
        <li className={style.features__item}>
          <img title='magnifier' src='https://telega.in/assets/home/wc3-db4043a463b7fca8bd70791a58b738350cd6d9e044dd3339b744b2a7c8955e3f.svg' className={style.features__logo}></img>
          <p className={style.features__description}>Общение тольое с реальными клиентами, сделавшими заказ</p>
        </li>
        <li className={style.features__item}>
          <img title='suit' src='https://telega.in/assets/home/wc5-e07047cfcaa50b2bc2e71745f12756f2ef8e1329faeee98a0778f94759b86f48.svg' className={style.features__logo}></img>
          <p className={style.features__description}>Начните получать заказы от крупных компаний</p>
        </li>
        <li className={style.features__item}>
          <img title='buy' src='https://telega.in/assets/home/wc4-7d2aa66ca1db775aa599cea03853f22a3f17c463b97807798c2147c64bd543a2.svg' className={style.features__logo}></img>
          <p className={style.features__description}>Гарантия честных сделок</p>
        </li>
        <li className={style.features__item}>
          <img src='https://telega.in/assets/home/wc7-cc794e7f09f5d7f6e47ccd8b052c1407cb36eef09f76bd39df3874ca21d1584c.svg' title='dog' className={style.features__logo}></img>
          <p className={style.features__description}>Дополнительный заработок по реферальной программе</p>
        </li>
      </ul>
      <button type='submit' className={style.addChannels}>Добавить канал бесплатно</button>
    </div>
  )
}
