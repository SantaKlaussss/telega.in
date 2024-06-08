import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';
import style from './DragnDrop.module.css';

export function DragnDrop() {
  const [value, setValue] = useState(5000);
  const [endValue, setEndValue] = useState(10000);

  return (
    <Box>
      <Slider 
        value={value}
        onChange={setValue} 
        onChangeEnd={setEndValue}
        color='black'
        size={3}
        thumbSize={23}
        showLabelOnHover={false}
        min={100}
        max={100000}
        style={{marginBottom: '10px'}}
      />
    </Box>
  );
}
