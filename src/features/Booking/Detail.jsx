import { Col, Row, Rate, Tag, Button, Modal, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import {
//   fetchDetailAction,
//   fetchMovieDetailScheduleAction,
// } from "../redux/action";
import moment from "moment";
import {
  // fetchDetailAction,
  fetchMovieDetailScheduleAction,
} from "./redux/action";

const MovieDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    var iframe = document.querySelector("#video-trailer");
    if (iframe !== null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    setOpenModal(false);
  };

  // Lấy xuống id khi ở trang Detail
  const params = useParams();
  const dispatch = useDispatch();

  // useSelector để lấy dữ liệu reducer xuống
  const movieDetail = useSelector((state) => {
    // return state.booking.movieDetail;
    return state.booking.movieDetailSchedule;
  });
  console.log(movieDetail);

  useEffect(() => {
    // [] => Chỉ chạy 1 lần giống componentDidMount
    const movieID = params.id;

    // dispatch(fetchDetailAction(movieID));
    dispatch(fetchMovieDetailScheduleAction(movieID));
  }, [params]);

  let trailer = "";
  trailer = movieDetail && movieDetail?.trailer.replace("watch?v=", "embed/");
  console.log(trailer);

  return (
    <div className='container mx-auto pt-10'>
      <Row gutter={20}>
        <Col span={8}>
          <img
            alt=''
            className='w-full h-96 object-cover rounded'
            src={movieDetail?.hinhAnh}
          />
        </Col>
        <Col span={16}>
          <h2 className='text-2xl'>{movieDetail?.tenPhim}</h2>
          <p>{movieDetail?.moTa}</p>
          <table className='table-fixed border-spacing-5'>
            <tbody>
              <tr>
                <th>Đánh giá:</th>
                <td>
                  <Rate value={movieDetail?.danhGia} count={10} />
                </td>
              </tr>
              <tr>
                <th>
                  {movieDetail?.sapChieu && <Tag color='gold'>Sắp chiếu</Tag>}
                  {movieDetail?.dangChieu && (
                    <Tag color='volcano'>Đang chiếu</Tag>
                  )}
                </th>
              </tr>
              <tr>
                <th>Ngày khởi chiếu:</th>
                <td>
                  {moment(movieDetail?.ngayKhoiChieu).format("DD/MM/yyyy")}
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    className='mr-2 text-center'
                    type='primary'
                    size='large'
                    onClick={() => showModal()}>
                    Trailer
                  </Button>
                  <Button type='primary' size='large'>
                    Đặt vé
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>

        <Tabs
          tabPosition='left'
          items={movieDetail?.heThongRapChieu.map((item) => {
            return {
              label: (
                <>
                  <img
                    alt=''
                    className='w-24
                 object-cover'
                    src={item.logo}
                  />
                  <br /> <h3 className='text-center'>{item.tenHeThongRap}</h3>
                </>
              ),
              key: item.maHeThongRap,
              children: item.cumRapChieu.map((item) => {
                return (
                  <div>
                    <h3 className='text-xl mb-2  text-blue-400'>
                      {item.tenCumRap}{" "}
                      <span className='text-lg font-normal'>
                        ({item.diaChi})
                      </span>
                      {item.lichChieuPhim.map((itemLich) => {
                        return (
                          <div className='mb-3'>
                            <Tag className='text-lg p-2 text-lime-500'>
                              {moment(itemLich.ngayChieuGioChieu).format(
                                "DD/MM/yyyy - hh:mm"
                              )}
                            </Tag>
                          </div>
                        );
                      })}
                    </h3>
                  </div>
                );
              }),
            };
          })}
        />
      </Row>

      <Modal
        title='Trailer'
        open={openModal}
        onCancel={closeModal}
        width='800px'>
        <iframe
          id='video-trailer'
          width='100%'
          height='500px'
          src={trailer}></iframe>
      </Modal>
    </div>
  );
};

export default MovieDetails;
