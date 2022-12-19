import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";

const HomeCarousel = () => {
  const banners = useSelector((state) => {
    return state.booking.banners;
  });
  return (
    <Carousel autoplay>
      {banners.map((item) => {
        return (
          <div key={item.maBanner}>
            <img
              style={{ height: "1000px" }}
              alt=''
              src={item.hinhAnh}
              className='w-full object-cover'
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
