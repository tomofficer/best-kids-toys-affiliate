import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} style={{ width: '500px' }}>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/2_Gmze1f9jR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095921578"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/4_eTxids_UT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096045886"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/3_bpfVcDl3k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095987115"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/5_AxTNYlkBw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096154322"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/6_U1y-EgAxG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096206408"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623"
          alt=""
        />
      </div>
    </Slider>
  );
}
