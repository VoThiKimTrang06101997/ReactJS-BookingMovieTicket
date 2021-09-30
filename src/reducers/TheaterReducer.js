import { GET_THEATERS_SUCCESS, GET_THEATERS_REQUEST, GET_THEATERS_FAIL, GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAIL, GET_ROOM_TICKET_REQUEST, GET_ROOM_TICKET_SUCCESS, GET_ROOM_TICKET_FAIL, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, ADD_MOVIE_SHOWTIME_REQUEST, ADD_MOVIE_SHOWTIME_FAIL, ADD_MOVIE_SHOWTIME_SUCCESS } from './constants/Theater';

const initialState = {
    loading: false,
    error: null,
    theaterList: [],
    movieDetail: null,
    seatList: [],
    message: '',
}

const theaterReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_DETAIL_REQUEST: {
            return {
                ...state, loading: true, error: null
            }
        }
        case GET_MOVIE_DETAIL_SUCCESS: {
            return {
                ...state,
                movieDetail: action.payload.data,
                loading: false
            }
        }
        case GET_MOVIE_DETAIL_FAIL: {
            return {
                ...state, loading: false, error: action.payload.error
            }
        }

        case GET_ROOM_TICKET_REQUEST: {
            return {
                ...state, loading: true, error: null
            }
        }
        case GET_ROOM_TICKET_SUCCESS: {
            return {
                ...state,
                seatList: action.payload.data,
                loading: false
            }
        }
        case GET_ROOM_TICKET_FAIL: {
            return {
                ...state, loading: false, error: action.payload.error
            }
        }

        case GET_THEATERS_REQUEST: {
            return {
                ...state, loading: true, error: null
            }
        }
        case GET_THEATERS_SUCCESS: {
            return {
                ...state,
                theaterList: action.payload.data,
                loading: false
            }
        }
        case GET_THEATERS_FAIL: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        }

        case BOOK_TICKET_REQUEST: {
            return {
                ...state, loading: true, error: null, message: ''
            }
        }
        case BOOK_TICKET_SUCCESS: {
            const gheDaChon = action.payload.seatSelected
            gheDaChon.map((seat) => {
                const index = state.seatList.danhSachGhe.findIndex(seatCustom => seatCustom.maGhe === seat.maGhe)
                state.seatList.danhSachGhe[index].daDat = true
            })
            return {
                ...state,
                message: action.payload.data,
                loading: false,
            }
        }
        case BOOK_TICKET_FAIL: {
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            }
        }

        case ADD_MOVIE_SHOWTIME_REQUEST: {
            return {
                ...state, loading: true, error: null
            }
        }
        case ADD_MOVIE_SHOWTIME_SUCCESS: {
            return {
                ...state, loading: false, message: action.payload.data
            }
        }
        case ADD_MOVIE_SHOWTIME_FAIL: {
            return {
                ...state, loading: false, error: action.payload.error
            }
        }

        default:
            return state;
    }
}
export default theaterReducer;