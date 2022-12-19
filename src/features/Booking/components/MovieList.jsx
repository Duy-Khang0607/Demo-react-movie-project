import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { fetchMovieAction } from "../redux/action";
import { Link } from "react-router-dom";
const MovieList = () => {
  // Thay vì dispatch action lên store thì sẽ sử dụng hook(cụ thế dùng useSelector)
  const movies = useSelector((state) => state.booking.movies);
  // Để fetch lại danh sách movie khi nhấn paginaton
  const dispatch = useDispatch();

  return (
    <div className='container mx-auto'>
      <h1 className='text-center font-bold text-5xl'>Danh sách phim</h1>
      {/* grid antd chia thanh 1 hang thanh 24 cot  */}
      <Row gutter={30} className='my-5'>
        {movies.items?.map((item) => {
          return (
            <Col
              className='mb-7'
              key={item.maPhim}
              span={6}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  height: "600px",
                }}
                cover={
                  <img
                    className='w-full h-96 object-cover'
                    alt='example'
                    src={item.hinhAnh}
                  />
                }>
                <h1 className='text-2xl font-medium h-10'>{item.tenPhim}</h1>
                <p className='text-lg font-thin w-full mx-auto h-14'>
                  {item.moTa.substr(0, 50) + "..."}
                </p>
                <Link to={`/detail/${item.maPhim}`}>
                  <Button type='primary' size='medium'>
                    Đặt vé
                  </Button>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Nếu có danh sách phim thì render cái pagination ra  */}
      {movies.items && (
        <Pagination
          size='large'
          className='text-center'
          defaultCurrent={movies.currentPage} // Hiển thị số trang hiện tại
          total={movies.totalCount} //
          pageSize={10}
          onChange={(page) => {
            dispatch(fetchMovieAction(page));
          }}
        />
      )}
    </div>
  );
};

export default MovieList;
