import moviesApi from '../../api/moviesApi';
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL, DELETE_MOVIE_REQUEST, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, UPDATE_MOVIE_REQUEST, UPDATE_MOVIE_FAIL, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAIL } from '../constants/Movie';
import { UPDATE_USER_SUCCESS } from '../constants/User';
import Swal from "sweetalert2";

export const getMovieList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_LIST_REQUEST
    })
    moviesApi.getDanhSachPhim()
      .then(result => {
        dispatch({
          type: GET_MOVIE_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_MOVIE_LIST_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const deleteMovie = (movieId) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false
    })
    dispatch({
      type: DELETE_MOVIE_REQUEST
    })
    moviesApi.deleteMovie(movieId)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Xoá Phim Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: DELETE_MOVIE_SUCCESS,
          payload: { data: result.data }
        }, dispatch(getMovieList()))
      })
      .catch(
        error => {
          Swal.fire({
            title: 'Oops !!!',
            text: `${error.response?.data} !!!`,
            icon: 'error',
            allowOutsideClick: false
          })
          dispatch({
            type: DELETE_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        }
      )
  }
}

export const updateMovie = (movie) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false
    })
    dispatch({
      type: UPDATE_MOVIE_REQUEST
    })
    moviesApi.postCapNhatPhim(movie)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Chỉnh Sửa Thông Tin Phim Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data }
        }, dispatch(getMovieList()))
      })
      .catch(
        error => {
          Swal.fire({
            title: 'Oops !!!',
            text: `${error.response?.data} !!!`,
            icon: 'error',
            allowOutsideClick: false
          })
          dispatch({
            type: UPDATE_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        }
      )
  }
}

export const addMovie = (movie) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false
    })
    dispatch({
      type: ADD_MOVIE_REQUEST
    })
    moviesApi.postThemPhim(movie)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Thêm Phim Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: { data: result.data }
        }, dispatch(getMovieList()))
      })
      .catch(
        error => {
          Swal.fire({
            title: 'Oops !!!',
            text: `${error.response?.data} !!!`,
            icon: 'error',
            allowOutsideClick: false
          })
          dispatch({
            type: ADD_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        }
      )
  }
}