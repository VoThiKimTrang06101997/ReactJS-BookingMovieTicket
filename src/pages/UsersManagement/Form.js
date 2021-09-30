import React from 'react'
// { useState }
import { useSelector, useDispatch } from 'react-redux';
import { addUser, putUserUpdate } from '../../reducers/actions/User';
// import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Grid } from '@material-ui/core';
// import { Visibility, VisibilityOff, PersonAddIcon, PublishIcon, CloseIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import useStyle from './style';
import { Button, Grid } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PublishIcon from '@material-ui/icons/Publish';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addUserSchema } from "../../reducers/services";
export default function FormUser(props) {
    const classes = useStyle()

    // lấy biến loading để set disable cho các button và error để show vào TH FAIL
    const { loading, error } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch()

    // giá trị user và biến set TH disabled cái tài khoản hay không, nhận từ component cha
    const { userUpdate, onChangeTK } = props

    const [values, setValues] = React.useState({
        showPassword: false,
    });;

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleUser = (user) => {
        //  Ở đây xài cùng 1 form cho cả update và add, nên ta kiểm tra biến onChangeTK, nếu là true ( TH taiKhoan bị disabled thì nghĩa là đang cập nhập, và gọi api CapNhap. Nêú onChangeTK là false thì nghĩa là đang thêm vào mới, và gọi api ThemMoi)
        if (onChangeTK) {
            dispatch(putUserUpdate(user))
        }
        else {
            dispatch(addUser(user))
        }

        //tiến hành đóng form lại
        // props.onClose()
        // thay đổi giá trị set biến để disable cái tài khoản hay không
        // props.onChangeIsActive()

    }

    const handleReset = () => {
        props.onChangeIsActive()

    }

    return (

        <div className={classes.formUser}>
            <h2>{onChangeTK ? "Cập Nhập Tài Khoản" : "Thêm Tài Khoản"}</h2>
            <Formik
                initialValues={{
                    taiKhoan: userUpdate.taiKhoan || "",
                    matKhau: userUpdate.matKhau || "",
                    email: userUpdate.email || "",
                    soDt: userUpdate.soDt || "",
                    maLoaiNguoiDung: userUpdate.maLoaiNguoiDung || "",
                    hoTen: userUpdate.hoTen || "",
                    maNhom: userUpdate.maNhom || ""

                }}
                validationSchema={addUserSchema}
                onSubmit={(data) => handleUser(data)}
            >
                {props => (
                    <Form>

                        <Grid item xs={12} className={` ${classes.bigField} `} >
                            <FormControl className={`${classes.textInput} `} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-userId">Tài Khoản</InputLabel>
                                <Field
                                    id="outlined-adornment-userId"
                                    type='text'
                                    name='taiKhoan'
                                    onChange={props.handleChange}
                                    labelWidth={85}
                                    disabled={onChangeTK}
                                    as={OutlinedInput}
                                />
                                <ErrorMessage name="taiKhoan">
                                    {(taiKhoan) => {
                                        return (
                                            <div style={{ color: '#ff0000d1' }}>{taiKhoan}</div>
                                        )
                                    }}
                                </ErrorMessage>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} className={` ${classes.bigField} `} >
                            <FormControl className={`${classes.textInput} `} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Họ Tên</InputLabel>
                                <Field
                                    id="outlined-adornment-showtime"
                                    type='text'
                                    name='hoTen'
                                    onChange={props.handleChange}
                                    labelWidth={60}

                                    as={OutlinedInput}
                                />
                                <ErrorMessage name="hoTen">
                                    {(hoTen) => {
                                        return (
                                            <div style={{ color: '#ff0000d1' }}>{hoTen}</div>
                                        )
                                    }}
                                </ErrorMessage>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} className={` ${classes.bigField} `} container justify='space-between'>

                            <Grid className={` ${classes.smallField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Mật Khẩu</InputLabel>
                                    <Field
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        name='matKhau'
                                        onChange={props.handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="matKhau">
                                        {(matKhau) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{matKhau}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid className={` ${classes.smallField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-phone">Số Điện Thoại</InputLabel>
                                    <Field
                                        id="outlined-adornment-phone"
                                        type='text'
                                        name="soDt"
                                        onChange={props.handleChange}
                                        labelWidth={115}
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="soDt">
                                        {(soDt) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{soDt}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} className={` ${classes.bigField} `} >
                            <FormControl className={`${classes.textInput} `} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">E-Mail</InputLabel>
                                <Field
                                    id="outlined-adornment-email"
                                    type='text'
                                    name="email"
                                    onChange={props.handleChange}
                                    labelWidth={55}
                                    as={OutlinedInput}
                                />
                                <ErrorMessage name="email">
                                    {(email) => {
                                        return (
                                            <div style={{ color: '#ff0000d1' }}>{email}</div>
                                        )
                                    }}
                                </ErrorMessage>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} className={` ${classes.bigField} `} container justify='space-between'>
                            <Grid className={` ${classes.smallField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <Field
                                        id="outlined-adornment-customer"
                                        select
                                        label="Mã Loại Người Dùng"
                                        name="maLoaiNguoiDung"
                                        onChange={props.handleChange}
                                        labelWidth={70}
                                        variant="outlined"
                                        as={TextField}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="KhachHang">Khách Hàng</option>
                                        <option value="QuanTri">Quản Trị</option>
                                    </Field>
                                    <ErrorMessage name="maLoaiNguoiDung">
                                        {(maLoaiNguoiDung) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{maLoaiNguoiDung}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid className={` ${classes.smallField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <Field
                                        id="outlined-adornment-group"
                                        select
                                        label="Mã Nhóm"
                                        name="maNhom"
                                        onChange={props.handleChange}
                                        labelWidth={70}
                                        variant="outlined"
                                        as={TextField}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="GP01">GP01</option>
                                        <option value="GP02">GP02</option>
                                        <option value="GP03">GP03</option>
                                    </Field>
                                    <ErrorMessage name="maNhom">
                                        {(maNhom) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{maNhom}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container justify='space-between'>
                            <Button type='submit' variant="contained" color="primary" startIcon={onChangeTK ? <PublishIcon /> : <PersonAddIcon />} disabled={loading}>
                                {onChangeTK ? "Cập nhập" : "Thêm vào"}
                            </Button>

                            <Button variant="contained" color="secondary" startIcon={<CloseIcon />} onClick={() => handleReset()} >
                                Đóng
                            </Button>
                        </Grid>

                    </Form>
                )}
            </Formik>
            <Grid item xs={12} className={` ${classes.bigField} `} >
                <FormControl className={`${classes.textInput} `} variant="outlined">
                    {error ? <Alert severity="error">{error}</Alert> : null}
                </FormControl>
            </Grid>

        </div>
    )
}
