import { Carousel } from '@mantine/carousel';
import './Slider.css';
import '@mantine/carousel/styles.css';
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

export function Slider() {
  return (
    <Carousel
      slideSize="17%"
      loop
      align="start"
      slidesToScroll={1}
      style={{
        color: '#325FEB'
      }}
      controlSize={50}
    >
      <Carousel.Slide>
        <img src={biofuel} height={121} alt="biofuel" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={bruno} height={121} alt="bruno" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={cabins} height={121} alt="cabins" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={care} height={121} alt="care" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={panda} height={121} alt="panda" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={travelty} height={121} alt="travelty" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={wolf} height={121} alt="wolf" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={coco} height={121} alt="coco" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={wellness} height={121} alt="wellness" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={culture} height={121} alt="culture" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={gamer} height={121} alt="gamer" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={geometric} height={121} alt="geometric" />
      </Carousel.Slide>
    </Carousel>
  );
}
