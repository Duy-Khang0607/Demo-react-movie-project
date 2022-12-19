import { Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getScheduleMovieCinema } from "../utils/bookSerives";

const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  // Danh sách hệ thống rạp
  const cinemas = useSelector((state) => {
    return state.booking.cinemas;
  });
  useEffect(() => {
    getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]); // => Bỏ cinemas vào mảng vì do cho useEffect này chạy lại lần nữa

  return (
    <div className='container mx-auto mt-20'>
      <h1 className='text-5xl font-bold text-center tracking-wide'>
        Lịch chiếu
      </h1>
      <Tabs
        onChange={(key) => {
          getScheduleMovieCinema(key).then((res) => {
            setListSchedule(res.data.content);
            console.log(res.data.content);
          });
        }}
        tabPosition='left'
        items={cinemas?.map((item) => {
          return {
            label: (
              <>
                <img
                  alt=''
                  className='w-24
                 object-cover'
                  src={item.logo}
                />
              </>
            ),
            key: item.maHeThongRap,
            children: listSchedule[0]?.lstCumRap.map((item) => {
              return (
                <div key={item.diaChi}>
                  <h3>{item.tenCumRap}</h3>
                  <p>{item.diaChi}</p>
                </div>
              );
            }),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
