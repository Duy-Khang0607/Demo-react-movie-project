import React from "react";
import { Form, Button, Input, Card } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    // call servie api
    // Trả về thông tin user login thành công => res.data.content => file action
    // Lưu data lên store => file action

    try {
      await dispacth(loginAction(values));
      //navigate user qua trang Home (chuyển trang)
      navigate("/");
    } catch (error) {
      console.log(error.response.data.content);
    }
  };

  return (
    <div className='container  mx-auto m-14 flex justify-center'>
      <Card
        className='bg-slate-500'
        hoverable
        style={{
          width: "500px",
          height: "500px",
        }}>
        <h1 className='text-center text-4xl'>Login</h1>
        <Form
          name='basic'
          onFinish={handleLogin}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          autoComplete='off'>
          <Form.Item
            label='Username'
            name='taiKhoan'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='matKhau'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
