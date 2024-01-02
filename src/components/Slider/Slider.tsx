import React from 'react'
import styles from './slider.module.css'

interface ISlider {
  title: string;

  marginTop?: number;
}

const Slider = ({ title, marginTop }: ISlider) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div style={{ marginTop }}></div>
    </div>
  )
}

export default Slider