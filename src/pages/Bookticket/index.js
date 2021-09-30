import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRoomTicketList, bookTicket } from '../../reducers/actions/Theater';
import { Link, useParams } from "react-router-dom";
import LoadingPage from '../../components/LoadingPage';
import { Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, createMuiTheme, MuiThemeProvider, Hidden } from '@material-ui/core';

import zaloPay from "../../assets/img/payment-zalo.jpg";
import visaPay from "../../assets/img/payment-visa.png";
import atmPay from "../../assets/img/payment-atm.png";
import tienIchPay from "../../assets/img/payment-payoo.png";
import styled from 'styled-components';

import useStyle from './style';
import { UserOutlined } from "@ant-design/icons";
import { red } from '@material-ui/core/colors';

export default function Bookticket() {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    document.title = 'Đặt vé'
  }, [])
  // mảng chứa các ghế được chọn
  const [seatReserved, setSeatReserved] = useState([])

  // mảng chứa danh sách ghế ngồi đẩy lên server
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

  const [danhSachVe, setDanhSachVe] = useState({
    maLichChieu: "",
    danhSachVe: [],
    taiKhoanNguoiDung: currentUser.taiKhoan || ""
  })

  // cập nhập lại danhSachGhe sau mỗi lần danh sách ghế đang chọn bị thay đổi
  useEffect(() => {
    setDanhSachVe((currentData) => ({ ...currentData, danhSachVe: seatReserved }))
  }, [seatReserved])

  // biến chứa tổng tiền sau khi đặt ghế
  const [total, setTotal] = useState(0)

  // LẤY MÃ LỊCH CHIẾU DƯỚI MATCH VÀ GỌI API
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    // lấy mã lịch chiếu gán vào object danhSachVe
    setDanhSachVe((danhSachVe) => ({ ...danhSachVe, maLichChieu: param.maLichChieu }))
    dispatch(getRoomTicketList(param.maLichChieu))
  }, [param.maLichChieu])

  // LẤY DATA TỪ STORE VỀ
  const { seatList, loading, error, message } = useSelector((state) => state.theaterReducer);

  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <div>{error}</div>
  }

  // ĐẶT VÉ VÀ THÀNH TIỀN
  const handleSelect = (seat) => {
    if (seatReserved.indexOf(seat) > -1) {
      setTotal(total - seat.giaVe)       // trừ đi tiền của ghế vừa bỏ
      setSeatReserved(seatReserved?.filter(res => res !== seat))    // xóa khỏi res

    } else {
      if (seatReserved.length < 5) {            // vẫn chưa đặt quá 5 ghế thì thêm ghế vào res
        setSeatReserved(pre => [...pre, seat])      // thêm vào res
        setTotal(total + seat.giaVe)      // cộng thêm tiền của ghế vừa đặt
      }
      else {
        handleOpen()
      }
    }
  }

  const handleBookTicket = (danhSachVe) => {
    dispatch(bookTicket(danhSachVe))
    handleOpen()
    setSeatReserved([])
  }
  const handleReset = () => {
    handleOpen()
    setSeatReserved([])
    setTotal(0)
  }

  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      },
    }
  })

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container alignItems='center'>
        {/* CHỌN GHẾ NGỒI */}
        <Grid item container xs={12} md={9} className={classes.mainOfRoom} >

          {/* Tên rạp */}
          <Grid item xs={12} className={classes.mainOfRoom__topRoom} >
            <Grid container justify='space-between' alignItems='center' className={classes.topRoom__name}>
              <Grid xs={4} item className={classes.name__room}>
                <p style={{ marginTop: "-150px", color: "red" }} >{seatList.thongTinPhim?.tenCumRap}</p>
                <p >{seatList.thongTinPhim?.ngayChieu} - {seatList.thongTinPhim?.gioChieu} - {seatList.thongTinPhim?.tenRap}</p>
              </Grid>
              <Grid container justify='center' alignItems='center' xs={4} item className={classes.mainOfBill__total}>
                <Hidden mdUp>
                  <h1>{total} đ</h1>
                </Hidden>
              </Grid>
              <Grid xs={4} item>
                {/* Trong này để tính giờ */}
              </Grid>
            </Grid>
            <div className={classes.topRoom__screen}>

              <img src="/img/screen.png" alt="img" />
            </div>

          </Grid>

          {/* Ghế ngồi */}
          <Grid container justify='space-between' item xs={12} className={classes.mainOfRoom__midRoom}>
            {seatList.danhSachGhe?.map((seat, index) => {
              return (
                <Grid item key={index} className={classes.seat} >
                  <button className={` ${seat.daDat ? classes.seatCanNotSelect : `${seatReserved.indexOf(seat) > -1 ? classes.seatSelected : classes.seatCanSelect}`}  `} disabled={seat.daDat} onClick={() => handleSelect(seat)} >

                    <UserOutlined/>
                  </button>
                </Grid>
              )
            })}
          </Grid>

          {/* Chú thích */}
          <Grid container item xs={6} justify='space-between' className={classes.midRoom__note}>

            <Grid item xs={4} container justify='center' alignItems='center' className={classes.note__item} >
              <div className={`${classes.seat} ${classes.seatCanSelect}`}></div>
              <span>Ghế thường</span>
            </Grid>
            <Grid item xs={4} container justify='center' alignItems='center' className={classes.note__item} >
              <div className={`${classes.seat} ${classes.seatSelected}`}></div>
              <span>Ghế đang chọn</span>
            </Grid>
            <Grid item xs={4} container justify='center' alignItems='center' className={classes.note__item} >
              <div className={`${classes.seat} ${classes.seatCanNotSelect}`}></div>
              <span>Ghế đã có người chọn</span>
            </Grid>
          </Grid>

        </Grid>

        {/* TÍNH TIỀN */}
        <Grid item xs={12} md={3} className={classes.mainOfBill} >
          <Hidden smDown>
            <h1 className={`${classes.mainOfBill__total} ${classes.mainOfBill__item}`} >{total.toLocaleString()}đ</h1>
          </Hidden>
          <div className={`${classes.mainOfBill__infoMovie} ${classes.mainOfBill__item}`}>
            <p><span>C13</span> {seatList.thongTinPhim?.tenPhim} </p>
            <div>{seatList.thongTinPhim?.tenCumRap}</div>
            <p>{seatList.thongTinPhim?.ngayChieu}-{seatList.thongTinPhim?.gioChieu}-{seatList.thongTinPhim?.tenRap}</p>
          </div>

          <Grid className={`${classes.mainOfBill__seatSelect} ${classes.mainOfBill__item}`} container justify='space-between' alignItems='center'>
            <Grid item>
              <p className={classes.seatSelect__name}>Ghế:
                {seatReserved.map((item) => { return (<span key={item.maGhe}> {item.tenGhe} </span>) })}
              </p>
            </Grid>
            <Grid>
              <p className={classes.mainOfBill__total} style={{ color: "green" }}>{total.toLocaleString()}đ</p>
            </Grid>
          </Grid>

          <div className={classes.mainOfBill__item}>
            <div style={{ color: "blue" }}>E-Mail</div>
            <p>{currentUser.email}</p>
          </div>

          <div >
            <p style={{ color: "blue" }}>Phone: {currentUser.soDT}</p>
          </div>

          <Wrapper>
            <div className="checkout-payments">
              <h3>Hình thức thanh toán</h3>
              <div className="payment-methods">
                {/* Method item */}
                <div className="payment-method-item">
                  <input type="radio" name="method" />
                  <img style={{ width: "70px", marginLeft: "15px" }} src={zaloPay} className="img img--payment" alt="" />
                  <p style={{ marginLeft: "35px" }} className="payment-intro">Thanh toán qua ZaloPay</p>
                </div>
                {/* end Method item */}
                {/* Method item */}
                <div className="payment-method-item">
                  <input type="radio" name="method" />
                  <img src={visaPay} className="img img--payment" alt="" />
                  <p className="payment-intro">Visa, Master, JCB</p>
                </div>
                {/* end Method item */}
                {/* Method item */}
                <div className="payment-method-item">
                  <input type="radio" name="method" />
                  <img src={atmPay} className="img img--payment" alt="" />
                  <p className="payment-intro">Thẻ ATM nội địa</p>
                </div>
                {/* end Method item */}
                {/* Method item */}
                <div className="payment-method-item">
                  <input type="radio" name="method" />
                  <img src={tienIchPay} className="img img--payment" alt="" />
                  <p className="payment-intro">
                    Thanh toán tại cửa hàng tiện ích
                  </p>
                </div>
                {/* end Method item */}
              </div>
            </div>
          </Wrapper>


          <button className={`${classes.buyTickketButton} ${danhSachVe.danhSachVe[0] !== undefined ? classes.activeButton : classes.disableButton}`} disabled={(danhSachVe.danhSachVe.length === 0 ? true : false)} onClick={() => handleBookTicket(danhSachVe)}>Đặt Vé</button>
        </Grid>

      </Grid>

      {/* Popup thông báo đặt vé thành công hay thất bại, hoặc quá 5 vé */}
      {/* <Dialog open={open} >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          {seatReserved.length === 5
            ?
            <DialogContentText id="alert-dialog-description">
              <div>Không được đặt quá 5 vé</div>
            </DialogContentText>
            :
            <DialogContentText id="alert-dialog-description">
              {message !== '' ? message : error}
            </DialogContentText>

          }
        </DialogContent>

        {seatReserved.length === 5 ?
          <DialogActions>
            <Button color="primary">
              <Button onClick={handleOpen}>Tôi đã hiểu</Button>
            </Button>
          </DialogActions>
          :
          <DialogActions>
            <Button color="primary">
              <Link to='/'>Rời khỏi</Link>
            </Button>
            <Button onClick={handleReset} color="primary">
              Tiếp tục
            </Button>
          </DialogActions>
        }
      </Dialog> */}
    </MuiThemeProvider>

  )
}

const Wrapper = styled.section`
.checkout-payments {
  .payment-methods{
    padding-top: 5px;
    .payment-method-item{
      display: flex;
      align-items: center';
      .img img--payment{ 
        width: 40px !important;
        margin: 0 15px;
      }
      .payment-method-item input{
      background: #4a90e2;
      width: 22px;
      height: 22px;
      border: none;
      outline: none;
      }
      .payment-intro{
        margin-left: 15px;

      }
    }
  }
}
`