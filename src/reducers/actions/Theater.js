import bookingApi from "../../api/bookingApi";
import theatersApi from '../../api/theatersApi';
import { BOOK_TICKET_FAIL, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, GET_MOVIE_DETAIL_FAIL, GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS, GET_ROOM_TICKET_FAIL, GET_ROOM_TICKET_REQUEST, GET_ROOM_TICKET_SUCCESS, GET_THEATERS_REQUEST, GET_THEATERS_SUCCESS, GET_THEATERS_FAIL, ADD_MOVIE_SHOWTIME_REQUEST, ADD_MOVIE_SHOWTIME_SUCCESS, ADD_MOVIE_SHOWTIME_FAIL } from "../constants/Theater";
import Swal from "sweetalert2";

export const getMovieDetail = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_MOVIE_DETAIL_REQUEST
        })
        theatersApi.getThongTinLichChieuPhim(id)
            .then(result => {
                dispatch({
                    type: GET_MOVIE_DETAIL_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )
            .catch(
                error => {
                    dispatch({
                        type: GET_MOVIE_DETAIL_FAIL,
                        payload: { error: error.response.data, }
                    })
                }
            )
    }
}

export const getTheaters = () => {
    return (dispatch) => {
        dispatch({
            type: GET_THEATERS_REQUEST
        })
        theatersApi.getThongTinLichChieuHeThongRap()
            .then(result => {
                dispatch({
                    type: GET_THEATERS_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )
            .catch(
                error => {
                    dispatch({
                        type: GET_THEATERS_FAIL,
                        payload: { error: error.response.data, }
                    })
                }
            )
    }
}

export const bookTicket = (danhSachVe) => {
    return (dispatch) => {
        dispatch({
            type: BOOK_TICKET_REQUEST
        })
        bookingApi.postDatVe(danhSachVe)
            .then(result => {
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Đặt Vé Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false
                })
                dispatch({
                    type: BOOK_TICKET_SUCCESS,
                    payload: {
                        data: result.data,
                        seatSelected: danhSachVe.danhSachVe,
                    }
                })
            })
            .catch(
                error => {
                    dispatch({
                        type: BOOK_TICKET_FAIL,
                        payload: {
                            error: error.response.data,
                        }
                    })
                }
            )
    }
}

export const getRoomTicketList = (maLichChieu) => {
    return (dispatch) => {
        dispatch({
            type: GET_ROOM_TICKET_REQUEST
        })
        bookingApi.getDanhSachPhongVe(maLichChieu)
            .then(result => {
                dispatch({
                    type: GET_ROOM_TICKET_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )
            .catch(
                error => {
                    dispatch({
                        type: GET_ROOM_TICKET_FAIL,
                        payload: { error: error.response.data, }
                    })
                }
            )
    }
}
export const postAddMovieShowTime = (dataMovieShowTime) => {
    return (dispatch) => {
        dispatch({
            type: ADD_MOVIE_SHOWTIME_REQUEST
        })
        bookingApi.postTaoLichChieu(dataMovieShowTime)
            .then(result => {
                dispatch({
                    type: ADD_MOVIE_SHOWTIME_SUCCESS,
                    payload: { data: result.data }
                })
            }
            )
            .catch(
                error => {
                    dispatch({
                        type: ADD_MOVIE_SHOWTIME_FAIL,
                        payload: { error: error.response.data, }
                    })
                }
            )
    }
}