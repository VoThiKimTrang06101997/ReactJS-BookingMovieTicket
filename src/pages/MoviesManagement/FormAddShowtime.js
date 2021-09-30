import React from 'react'
// { useState, useEffect }
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, Grid, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import CloseIcon from '@material-ui/icons/Close';
import useStyle from './style';
import { postAddMovieShowTime } from '../../reducers/actions/Theater';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addMovieShowtimeSchema } from "../../reducers/services";
import { Alert } from '@material-ui/lab';
export default function FormAddShowTime(props) {
    const classes = useStyle()

    // lấy biến loading để set disable cho các button và error để show vào TH FAIL
    const { loading, error, message } = useSelector((state) => state.theaterReducer);

    const dispatch = useDispatch();

    const { movieIdAddShowTime } = props

    const handleAddMovieShowTime = (dataMovieShowTime) => {
        dispatch(postAddMovieShowTime(dataMovieShowTime))

        // props.onCloseForm()
    }

    const handleReset = () => {
        props.onCloseForm()
    }

    return (
        <div className={classes.formMovie} >
            <Grid container >
                <Formik
                    initialValues={{
                        maPhim: movieIdAddShowTime,
                        ngayChieuGioChieu: "",
                        maRap: "",
                        giaVe: ""
                    }}
                    validationSchema={addMovieShowtimeSchema}
                    onSubmit={(data) => handleAddMovieShowTime(data)}
                >
                    {props => (
                        <Form>

                            <Grid item xs={12} className={` ${classes.bigField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-movieId">Mã Phim</InputLabel>
                                    <Field
                                        id="outlined-adornment-movieId"
                                        type='number'
                                        name='maPhim'
                                        onChange={props.handleChange}
                                        labelWidth={70}
                                        disabled={true}
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="maPhim">
                                        {(maPhim) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{maPhim}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} className={` ${classes.bigField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-showtime">Ngày Khởi Chiếu</InputLabel>
                                    <Field
                                        id="outlined-adornment-showtime"
                                        type='text'
                                        name='ngayChieuGioChieu'
                                        onChange={props.handleChange}
                                        labelWidth={135}
                                        placeholder="VD: 01/01/2021 07:07:00"
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="ngayChieuGioChieu">
                                        {(ngayChieuGioChieu) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{ngayChieuGioChieu}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} className={` ${classes.bigField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-money">Giá Vé</InputLabel>
                                    <Field
                                        id="outlined-adornment-money"
                                        type='text'
                                        name='giaVe'
                                        onChange={props.handleChange}
                                        labelWidth={70}
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="giaVe">
                                        {(giaVe) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{giaVe}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} className={` ${classes.bigField} `} >
                                <FormControl className={`${classes.textInput} `} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-theater">Mã Rạp</InputLabel>
                                    <Field
                                        id="outlined-adornment-theater"
                                        type='text'
                                        name="maRap"
                                        onChange={props.handleChange}
                                        labelWidth={70}
                                        as={OutlinedInput}
                                    />
                                    <ErrorMessage name="maRap">
                                        {(maRap) => {
                                            return (
                                                <div style={{ color: '#ff0000d1' }}>{maRap}</div>
                                            )
                                        }}
                                    </ErrorMessage>
                                </FormControl>
                            </Grid>

                            <Grid container justify='space-between'>
                                <Button type='submit' variant="contained" color="primary" startIcon={<MovieIcon />} disabled={loading}>
                                    Thêm lịch chiếu
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
                        {error ? <Alert severity="error">{error}</Alert> : <Alert severity="success">{message}</Alert>}
                    </FormControl>
                </Grid>

            </Grid>
        </div >
    )
}
