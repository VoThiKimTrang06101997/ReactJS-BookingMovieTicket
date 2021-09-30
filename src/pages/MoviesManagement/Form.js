import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, updateMovie } from '../../reducers/actions/Movie';
import { FormControl, Grid, InputLabel, OutlinedInput, TextField, Button } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import PublishIcon from '@material-ui/icons/Publish';
import CloseIcon from '@material-ui/icons/Close';
import useStyle from './style';

export default function Form(props) {
    const classes = useStyle()

    // lấy biến loading để set disable cho các button và error để show vào TH FAIL
    const { loading } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();

    // giá trị movie và biến set TH disabled cái tài khoản hay không, nhận từ component cha
    const { movieUpdate, onChangeMaPhim } = props

    const [movie, setMovie] = useState({
        tenPhim: movieUpdate.tenPhim || "",
        biDanh: movieUpdate.biDanh || "",
        trailer: movieUpdate.trailer || "",
        hinhAnh: movieUpdate.hinhAnh || {},
        moTa: movieUpdate.moTa || "",
        maNhom: movieUpdate.maNhom || "GP01",
        ngayKhoiChieu: movieUpdate.ngayKhoiChieu || "",
        danhGia: movieUpdate.danhGia || ""
    });
    useEffect(() => {
        setMovie(movieUpdate)
    }, [movieUpdate])

    // hàm thay đổi movie khi điền vào form ngay lập tức
    const handleChange = (prop) => (event) => {
        if (prop === 'hinhAnh') {
            setMovie((movie) => ({ ...movie, hinhAnh: event.target.files[0] }))
        }
        else
            setMovie({ ...movie, [prop]: event.target.value });
    };

    const handleMovie = (movieProps) => {
        // nếu là TH UPDATE 
        if (onChangeMaPhim) {
            dispatch(updateMovie(movieProps))
        }
        // nếu là TH ADD
        else {
            dispatch(addMovie(movieProps))
        }
        // thay đổi giá trị set biến để disable cái tài khoản hay không
        props.onChangeIsActive()
    }

    const handleReset = () => {
        props.onChangeIsActive()
    }

    return (

        <div className={classes.formMovie} >
            <h2>{onChangeMaPhim ? "Cập Nhập Phim" : "Thêm Phim"}</h2>

            <Grid container >

                <Grid item xs={12} className={` ${classes.bigField} `} >
                    <FormControl className={`${classes.textInput} `} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-nameMovie">Tên Phim</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-nameMovie"
                            type='text'
                            value={movie.tenPhim}
                            onChange={handleChange('tenPhim')}
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} className={` ${classes.bigField} `} >
                    <FormControl className={`${classes.textInput} `} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-aliases">Bí Danh</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-aliases"
                            type='text'
                            value={movie.biDanh}
                            onChange={handleChange('biDanh')}
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} className={` ${classes.bigField} `} container justify='space-between'>
                    <Grid item className={` ${classes.smallField} `} >
                        <FormControl className={`${classes.textInput} `} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-trailer">Trailer</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-trailer"
                                type='text'
                                value={movie.trailer}
                                onChange={handleChange('trailer')}
                                labelWidth={70}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item className={` ${classes.smallField} `}  >
                        <TextField
                            className={`${classes.textInput} `}
                            type="file"
                            onChange={handleChange('hinhAnh')}
                            variant='outlined'
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} className={` ${classes.bigField} `} >
                    <FormControl className={`${classes.textInput} `} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-describe">Mô Tả</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-describe"
                            type='text'
                            value={movie.moTa}
                            onChange={handleChange('moTa')}
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} className={` ${classes.bigField} `}  >
                    <TextField
                        type='text'
                        className={classes.textInput}
                        label="Ngày Khởi Chiếu"
                        value={movie.ngayKhoiChieu}
                        onChange={handleChange('ngayKhoiChieu')}
                        variant="outlined"
                        placeholder='VD: 01/01/2021'
                    />
                </Grid>

                <Grid item xs={12} className={`${classes.bigField} `} container justify='space-between'>

                    <Grid item className={`${classes.smallField} `} >
                        <TextField
                            className={classes.textInput}
                            select
                            label="Mã Nhóm"
                            value={movie.maNhom}
                            onChange={handleChange('maNhom')}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Chọn mã nhóm"
                            variant="outlined"
                        >
                            <option value="GP01">GP01</option>
                            <option value="GP02">GP02</option>
                            <option value="GP03">GP03</option>
                        </TextField>
                    </Grid>

                    <Grid item className={`${classes.smallField} `} >
                        <FormControl className={`${classes.textInput} `} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-rate">Đánh Giá</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-rate"
                                type='number'
                                value={movie.danhGia}
                                onChange={handleChange('danhGia')}
                                labelWidth={70}
                            />
                        </FormControl>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container justify='space-between'>
                <Button variant="contained" color="primary" startIcon={onChangeMaPhim ? <PublishIcon /> : <MovieIcon />} onClick={() => handleMovie(movie)} disabled={loading}>
                    {onChangeMaPhim ? "Cập nhập" : "Thêm vào"}
                </Button>

                <Button variant="contained" color="secondary" startIcon={<CloseIcon />} onClick={() => handleReset()} >
                    Đóng
                </Button>
            </Grid>

        </div>

    )
}
