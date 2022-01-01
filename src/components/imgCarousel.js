import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import carouselImg1 from '../assets/images/slider-badag.jpg'
import carouselImg2 from '../assets/images/slider-badging.jpg'
import carouselImg3 from '../assets/images/slider-scale.jpg'
import carouselImg4 from '../assets/images/slider-scales.jpg'
// import {Carousel} from 'react-slick'

const ImgCarousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true
    }
    return (
            <Carousel {...settings}>
               <Wrap>
                   <a>
                       <img src={carouselImg1} alt=''/>
                   </a>
               </Wrap>
               <Wrap>
                   <a>
                       <img src={carouselImg2} alt=''/>
                   </a>
               </Wrap>
               <Wrap>
                   <a>
                       <img src={carouselImg3} alt=''/>
                   </a>
               </Wrap>
               <Wrap>
                   <a>
                       <img src={carouselImg4} alt=''/>
                   </a>
               </Wrap>
            </Carousel>
    )
}

const Carousel = styled(Slider)`
  margin-top: 30px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }


    }

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(158,158,171);
        }
    }

    li.slick-active button:before{
        color: white
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px
    }

    .slick-next{
        right: -75px
    }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a{
      border-radius: 4px;
      box-shadow: rgb(0 0 0 /69%)0 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;
      cursor: pointer;
      display: block;
      position: relative;
      padding: 4px;

      img{
          width: 100%;
          height: 1005;
      }

      &:hover{
          padding: 0;
          border: 4px solid rgba(249, 249, 249, 0.8);
          transition-duration: 300ms;
      }
  }
`;

export default ImgCarousel
