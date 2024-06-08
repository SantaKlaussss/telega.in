import React from 'react';
import style from './JoinCommunity.module.css'
import { SliderPlatformOwners } from './SliderPlatformOwners/SliderPlatformOwners';
import { HowMany } from './HowMany/HowMany';

export const JoinCommunity = () => {
  return (
    <div className={style.platform}>
      <h1 className={style.platform__title}>
        Присоединяйтесь к растущему сообществу владельцев каналов
      </h1>
      <SliderPlatformOwners />
      <HowMany />
    </div>
  )
}
