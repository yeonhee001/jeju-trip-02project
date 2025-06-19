import React from 'react'
import AroundItem from './AroundItem'
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, useLocation } from 'react-router-dom';


function Around({arounddata}) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const type = pathParts[3]; // 현재 페이지의 type 추출

  return (
    <Swiper className='trip-around-swiper'
    slidesPerView={3.5}
    spaceBetween={20}
    >
      {
        arounddata.slice(0,8).map((item)=>
          <SwiperSlide className='trip-around-slide' key={item.contents_id || item.contentsid}>
            <NavLink to={`/trip/triplist/${type}/tripdetail/${item.contents_id || item.contentsid}`}>
              <AroundItem img={item.img_path || item.repPhoto?.photoid?.imgpath || '/imgs/common_noimage_02.png'} title={item.title} address={(item.road_address || item.roadaddress).replace("제주특별자치도 ", "")}/>
            </NavLink>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default Around