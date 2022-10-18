import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from 'reactstrap';

import logoOne from'../images/logoOne.png'
import logoTwo from'../images/logoTwo.png'

const items = [
  {
    src: logoOne,
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: logoTwo,
    altText: '',
    caption: '',
    key: 2,
  },
 
];

function Caros(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };



  const slides = items.map((item) => {
    return (
      <CarouselItem className='caro'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='im'/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
    <style>
      {`  .im{
            width:100%;
            height:100vh;
          }
          .arr{
            color:white;
            border: 2px solid black;
            border-radius: 50%;
            width:30px;
            height:30px;
            margin-top:22rem;
            margin-right:7rem;
            margin-left:7rem;
            background-color: black;
        }
        .caro{
            position: relative;
            width:100%;
            height:100vh;
            background-color: burlywood;
        }
        .caro::after{
            content:" ";
            position: absolute;
            background-color: rgba(0, 0, 0, 50%);
            width:100%;
            height:100vh;
            left: 0;
            top: 0;
        }
          `  
          }
    </style>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        className='arr'
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        className='arr'
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
}

export default Caros;