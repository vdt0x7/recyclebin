import React from "react";
import "./login.css";
import "antd/dist/antd.css";
import { Form, Button, Input } from "antd";
import avatar from "./avatar.jpg";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../features/userAuth";
import { useNavigate } from "react-router-dom";
import { getUsers } from '../../constants/callAPI';
//test when submit to store
function Login() {
  console.log(getUsers);
  const dispatch = useDispatch(setSignIn);
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch(setSignIn(values));
    //navigate to dashboard
    if(values.username === 'admin' && values.password === 'admin')
       navigate("/dashboard");
    else
    {
        alert("Username or password is not correct.Please add username:admin & password: admin");
        navigate("/login");
    }
  };

  // no handling when login failed now
  return (
    <div className="login-page">
      <div className="login-box">
        
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <p className="login-form__title">BStar</p>
          <p>Đăng nhập vào trang chủ</p>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item>
          <p style={{textAlign:"right",color:"#E03636",fontWeight:"bold"}}>Forgot password</p>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form__button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
