import React, { useState } from "react";
import Navigation from "./Navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "../App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

import frozen from '../images/frozen.png';
import little from '../images/little.png';
import cinderella from '../images/cinderella.png';
import rapunzel from '../images/rapunzel.png';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([
    {
      id: 0,
      title: "Frozen",
      discrepion:
        "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
      rating: 9,
      img: "frozen",
      trailer: "https://youtu.be/L0MK7qz13bU",
    },
    {
      id: 1,
      title: "Little Mermaid",
      discrepion:
        "A young mermaid makes a deal with a sea witch, to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
      rating: 8,
      img: "little",
      trailer: "https://youtu.be/GC_mV1IpjWA",
    },
    {
      id: 2,
      title: "Cinderella",
      discrepion:
        "Cinderella, is a folk tale with thousands of variants throughout the world. ... The protagonist is a young woman living in ...",
      rating: 6,
      img: "cinderella",
      trailer: "https://youtu.be/GC_mV1IpjWA",
    },
    {
      id: 3,
      title: "Rapunzel",
      discrepion:
        "Rapunzel is a fictional character who appears in Walt Disney Animation Studios' 50th animated feature film Tangled (2010). Voiced by American actress and ...",
      rating: 6,
      img: "rapunzel",
      trailer: "https://youtu.be/GC_mV1IpjWA",
    },
  ]);

  let moviesHtml = moviesArr.map((movie, i) => {
    return (
   
        <SwiperSlide className="slide" key={movie.id}>
          <img src={window[movie.img]} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p> 
        </SwiperSlide>
    
    );
  });

  return (
    <div>
      <Navigation disable={"Movies"}></Navigation>
      <div className="movies">

        <h1 className="movies-title">Movies</h1>
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={3}
          effect={"coverflow"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          
          <SwiperSlide className="slide">Slide 1 <img src="../images/rapunzel.png" alt="" /></SwiperSlide>
          {moviesHtml}
          <SwiperSlide className="slide">Slide 1 <img src="../images/rapunzel.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Movies;
