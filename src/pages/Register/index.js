import React, { useState, useEffect } from "react";
// , useState 
import { register } from '../../reducers/actions/User';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useStyle from "./style";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupUserSchema } from "../../reducers/services";
import { Dialog, DialogActions, DialogTitle, DialogContentText, Button } from "@material-ui/core";
import { RESET_ERROR } from "../../reducers/constants/User";
export default function Register() {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const { loading, error } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // lấy user từ local lên: khi xóa user dưới local sẽ phải đăng nhập lại
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  useEffect(() => {
    document.title = 'Đăng ký'
  }, [])
  useEffect(() => {
    if (error !== null)
      setOpen(true)
  }, [error])

  if (loading) {
    return <div>loading</div>
  }
  if (currentUser) {
    return <Redirect to='/' />
  }

  return (

    <div className={classes.loginWrap}>
      <div className={classes.loginHtml}>
        <h3 className={classes.signUp}>Đăng Ký</h3>
        <div className={classes.loginForm}>
          <div className={classes.signInHtml}>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                hoTen: ""
              }}
              validationSchema={signupUserSchema}
              onSubmit={(user) => {
                dispatch(register(user))

              }}
              render={({ handleChange }) => (
                <Form>
                  <div className={classes.group}>
                    <label htmlFor="user" className={classes.label}>Tài khoản</label>

                    <Field id="user" type="text" className={classes.input} name="taiKhoan" onChange={handleChange} />
                    <ErrorMessage name="taiKhoan">
                      {(taiKhoan) => {
                        return (
                          <div style={{ color: '#ff0000d1' }}>{taiKhoan}</div>
                        )
                      }}
                    </ErrorMessage>
                  </div>
                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>Mật khẩu</label>
                    <Field id="pass" type="password" className={classes.input} data-type="password" name="matKhau" onChange={handleChange} />
                    <ErrorMessage name="matKhau">
                      {(matKhau) => {
                        return (
                          <div style={{ color: '#ff0000d1' }}>{matKhau}</div>
                        )
                      }}
                    </ErrorMessage>
                  </div>
                  <div className={classes.group}>
                    <label htmlFor="fullName" className={classes.label}>Họ tên</label>
                    <Field id="fullName" type="text" className={classes.input} name="hoTen" onChange={handleChange} />
                    <ErrorMessage name="hoTen">
                      {(hoTen) => {
                        return (
                          <div style={{ color: '#ff0000d1' }}>{hoTen}</div>
                        )
                      }}
                    </ErrorMessage>
                  </div>
                  <div className={classes.group}>
                    <label htmlFor="email" className={classes.label}>Email</label>
                    <Field id="email" type="text" className={classes.input} name="email" onChange={handleChange} />
                    <ErrorMessage name="email">
                      {(email) => {
                        return (
                          <div style={{ color: '#ff0000d1' }}>{email}</div>
                        )
                      }}
                    </ErrorMessage>
                  </div>
                  <div className={classes.group}>
                    <label htmlFor="phoneNumber" className={classes.label}>Số điện thoại</label>
                    <Field id="phoneNumber" type="text" className={classes.input} name="soDt" onChange={handleChange} />
                    <ErrorMessage name="soDt">
                      {(soDt) => {
                        return (
                          <div style={{ color: '#ff0000d1' }}>{soDt}</div>
                        )
                      }}
                    </ErrorMessage>
                  </div>
                  <div className={classes.group}>
                    <button type="submit" className={classes.button} defaultValue="Sign In" disabled={loading}>
                      Đăng ký
                    </button>
                  </div>
                  <div className={classes.devide} />
                  <div className={classes.footLnk}>
                    <Link to="/dangnhap" onClick={() => dispatch({ type: RESET_ERROR })}>Đã có tài khoản? Đăng nhập</Link>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>

      {/* <Dialog open={open}>
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContentText id="alert-dialog-description">
          <div style={{ padding: '0 20px' }}>{error}</div>
        </DialogContentText>

        <DialogActions>
          <Button color="primary">
            <Button onClick={handleOpen}>Tôi đã hiểu</Button>
          </Button>
        </DialogActions>
      </Dialog> */}

    </div>

  )
}
