import React from 'react'
import useStyle from './style';
import { Link } from "react-router-dom";
export default function TimeButton(props) {
    const { ngayChieuGioChieu, maLichChieu } = props
    const classes = useStyle()
    const calculateTimeout = (ngayChieuGioChieu) => {
        const fakeThoiLuong = 120
        const timeInObj = new Date(ngayChieuGioChieu);
        const timeOutObj = new Date(timeInObj.getTime() + fakeThoiLuong * 60 * 1000);
        return timeOutObj.toLocaleTimeString([], { hour12: false }).slice(0, 5)
    }
    return (
        <div>
            <Link to={`/datve/${maLichChieu}`}
                className={classes.theaterMovieTime}>
                {`${ngayChieuGioChieu.slice(11, 16)} ~ ${calculateTimeout(ngayChieuGioChieu)}`}
            </Link>
        </div>
    )
}
