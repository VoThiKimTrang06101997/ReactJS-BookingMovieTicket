import { Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import TimeButton from '../TimeButton'
import formatDate from '../../utilities/formatDate'
export default function ListMovieTheater(props) {
    const { lstShowtimeMovie } = props
    const mangChiChuaNgay = lstShowtimeMovie.lstLichChieuTheoPhim.map(item => {  // tạo mảng mới chỉ chứa ngày
        return item.ngayChieuGioChieu.slice(0, 10);// item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    })
    const MangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)] // xóa đi ngày trùng lặp > dùng mảng này để render số phần tử

    const filterByDay = (date) => { // lọc ra item từ mảng gốc
        const gioChieuRenDer = lstShowtimeMovie.lstLichChieuTheoPhim.filter(item => {
            if (item.ngayChieuGioChieu.slice(0, 10) === date) {
                return true
            }
            return false
        })
        return gioChieuRenDer;
    }
    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={2}>
                    <img style={{ width: '50px', height: '50px', margin: '20px' }} src={lstShowtimeMovie.hinhAnh} alt="IMG" />
                </Grid>
                <Grid item xs={10}>
                    <h3 style={{ fontSize: '20px', color: 'black' }} >
                        <span>C13</span> {lstShowtimeMovie.tenPhim}
                    </h3>
                    <p m={0}>120 phút - TIX - IMDb 7.5</p>
                </Grid>
            </Grid>


            <Grid container >

                {MangNgayKhongTrungLap.map(date => (
                    <>
                        <Grid item xs={12}>
                            <p style={{ fontSize: '16px' }}>{formatDate(date).dateFull}</p>
                        </Grid>
                        <Grid item xs={12} container key={date}>
                            {filterByDay(date).map(lichChieuTheoPhim => {
                                return (
                                    <Grid item xs={3} key={lichChieuTheoPhim.maLichChieu} >
                                        <TimeButton ngayChieuGioChieu={lichChieuTheoPhim.ngayChieuGioChieu} maLichChieu={lichChieuTheoPhim.maLichChieu} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </>
                ))
                }
            </Grid>
        </>

    )
}
