import React, { useState } from "react";
import { sliderData } from "../assets/data/sliderData";
import styles from "./ImageSlider.module.scss";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Следующий слайд
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Предыдущий слайд
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Проверка на пустоту массива слайдов
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      {sliderData.map((slider, index) => {
        return (
          <div className={current === index ? "slide active" : "slide"}>
            {current === index ? (
              <img src={slider.image} key={slider.id} alt="img" />
            ) : null}
          </div>
        );
      })}
      <div className={styles.btn__container}>
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </div>
    </section>
  );
};

export default ImageSlider;
