import React from "react";
import ImageSlider from "./components/ImageSlider";
import { sliderData } from "./assets/data/sliderData";

const App = () => {
  return <ImageSlider slides={sliderData} />;
};

export default App;
