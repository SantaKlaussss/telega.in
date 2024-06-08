import React from 'react'
import style from './HowMany.module.css'
import { DragnDrop } from './DragnDrop/DragnDrop'

export const HowMany = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Сколько можно <span className={style.green}>заработать?</span>
      </h1>
      <h3 className={style.description}>
        Рассчитайте доход со своего канала <span className={style.green}>за одно размещение</span>
      </h3>
      <section className={style.main}>
        <div className={style.left}>
          <h1 className={style.left__title}>Тематика</h1>
          <select title='select' name='select' className={style.left__select}>
            <option className={style.left__option}>Авто и мото</option>
            <option className={style.left__option}>Бизнес и стартапы</option>
            <option className={style.left__option}>Видеоигры</option>
            <option className={style.left__option}>В мире животных</option>
            <option className={style.left__option}>Дети и родители</option>
            <option className={style.left__option}>Другое</option>
            <option className={style.left__option}>Еда и кулинария</option>
            <option className={style.left__option}>Здоровье и медицина</option>
            <option className={style.left__option}>Знаменитости и образ жизни</option>
            <option className={style.left__option}>Инвестиции</option>
            <option className={style.left__option}>Иностранные языки</option>
            <option className={style.left__option}>Интернет технологии</option>
            <option className={style.left__option}>Искусство и дизайн</option>
            <option className={style.left__option}>История</option>
            <option className={style.left__option}>Кино</option>
            <option className={style.left__option}>Книги, Аудиокниги и Подкасты</option>
            <option className={style.left__option}>Красота и уход</option>
            <option className={style.left__option}>Криптовалюты</option>
            <option className={style.left__option}>Культура и события</option>
            <option className={style.left__option}>Любопытные факты</option>
            <option className={style.left__option}>Маркетинг и PR</option>
            <option className={style.left__option}>Мода и стиль</option>
            <option className={style.left__option}>Мотивация и саморазвитие</option>
            <option className={style.left__option}>Музыка</option>
            <option className={style.left__option}>Наука и технологии</option>
            <option className={style.left__option}>Недвижимость</option>
            <option className={style.left__option}>Новости и СМИ</option>
            <option className={style.left__option}>Образование</option>
            <option className={style.left__option}>Отдых и развлечения</option>
            <option className={style.left__option}>Психология и отношения</option>
            <option className={style.left__option}>Путешествия и туризм</option>
            <option className={style.left__option}>Работа и вакансии</option>
            <option className={style.left__option}>Региональные</option>
            <option className={style.left__option}>Религия и духовность</option>
            <option className={style.left__option}>Скидки и акции</option>
            <option className={style.left__option}>Спорт</option>
            <option className={style.left__option}>Строительство и ремонт</option>
            <option className={style.left__option}>Трейдинг</option>
            <option className={style.left__option}>Узбекские каналы</option>
            <option className={style.left__option}>Фитнес</option>
            <option className={style.left__option}>Юриспруденция</option>
            <option className={style.left__option}>Хобби и деятельность</option>
            <option className={style.left__option}>Экономика и Финансы</option>
            <option className={style.left__option}>Юмор и мемы</option>
          </select>
          <div className={style.followers}>
            <h1 className={style.followers__title}>Колличество подписчиков</h1>
            <p className={style.followers__count}>50 000</p>
          </div>
          <DragnDrop/>
        </div>
        <div className={style.right}>
          <h1 className={style.right__title}>Предполагаемый доход</h1>
          <p className={style.right__price}>10 000 ₽</p>
          <button className={style.right__button} type='submit'>Добавить в каталог</button>
        </div>
      </section>
    </div>
  )
}
