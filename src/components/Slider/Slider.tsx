import { useRef } from 'react';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import './Slider.css'
import biofuel from '../../img/slice/biofuel.jpg';
import bruno from '../../img/slice/bruno.jpg';
import cabins from '../../img/slice/cabins.jpg';
import care from '../../img/slice/care.jpg';
import coco from '../../img/slice/coco.jpg';
import culture from '../../img/slice/culture.jpg';
import gamer from '../../img/slice/gamer.jpg';
import geometric from '../../img/slice/geometric.jpg';
import panda from '../../img/slice/panda.jpg';
import travelty from '../../img/slice/travelty.jpg';
import wellness from '../../img/slice/wellness.jpg';
import wolf from '../../img/slice/wolf.jpg';

export const Slider: React.FC = () => {
const slider = useRef<CarouselRef>(null)

  return (
    <div className='slider'>
      <Carousel dots={false} ref={slider} arrows autoplay >
        <div>
          <h3 className='slider__item'>
            <img src={biofuel} width={160} alt="biofuel" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={bruno} width={160} alt="bruno" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={cabins} width={160} alt="cabins" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={care} width={160} alt="care" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={coco} width={160} alt="coco" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={culture} width={160} alt="culture" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={gamer} width={160} alt="gamer" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={geometric} width={160} alt="geometric" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={panda} width={160} alt="panda" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={travelty} width={160} alt="travelty" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={wellness} width={160} alt="wellness" />
          </h3>
        </div>
        <div>
          <h3 className='slider__item'>
            <img src={wolf} width={160} alt="wolf" />
          </h3>
        </div>
      </Carousel>
    </div>
  )
};
