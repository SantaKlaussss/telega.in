import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import style from './SliderPlatformOwners.module.css';
import { memo } from 'react';

export const SliderPlatformOwners = memo(function () {
  return (
    <div className={style.container}>
      <Carousel
        slideSize="17%"
        loop
        dragFree={true}
        withControls={false}
      >
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/050/809/original/2024-01-05_20.23.20.jpg'}
            alt="cat" />
          <h1 className={style.sliderImg__description}>
            Котя
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/076/063/original/RX9JnqNobj8tWzKTzQ7_1T55l77Ws2FFIHhDkS-BEkigCkjmsPxmzpX9gOYf_MPLgpjbga8W9EN_bT8_CM2tu8Uo.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Кулинарные изыски
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/071/958/original/94272232-DE97-4DFB-B2DB-41AE742D3150.jpeg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Технологии и инновации
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/067/912/original/avatar%281%29.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Психология и саморазвитие
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/067/387/original/eviNUoDO3Hw.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Юрий Поддубный
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/064/659/original/%D0%B0%D0%B2%D0%B0%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Экология и защита природы
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/063/039/original/photo_2022-01-06_20.00.33.jpeg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Мода вне моды
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/062/775/original/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BE.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Творчество без границ
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/052/382/original/E02D36F7-CCA8-49B5-AB0E-770D2A441A17.jpeg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Фитнес-клуб в кармане
          </h1>
        </Carousel.Slide>
        <Carousel.Slide>
          <img className={style.sliderImg} src={'https://telega.in/system/channels/avatars/000/072/994/original/photo_2022-03-14_23-31-50.jpg'}
            alt="black cat" />
          <h1 className={style.sliderImg__description}>
            Книги и литература
          </h1>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
});

//
