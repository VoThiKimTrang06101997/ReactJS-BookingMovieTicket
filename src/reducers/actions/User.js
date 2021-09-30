import usersApi from '../../api/usersApi';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL } from '../constants/User';
import Swal from "sweetalert2";

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    })
    usersApi.postDangNhap(user)
      .then(result => {
        Swal.fire(
          'Yeah !!!',
          'Đăng nhập thành công !!!',
          'success'
        )
        localStorage.setItem("user", JSON.stringify(result.data));

        // let maNguoiDung = result.data.maLoaiNguoiDung;
        // if (maNguoiDung !== "QuanTri") {
        //     Swal.fire(
        //         'Oops !!!',
        //         'Bạn không có quyền truy cập vào hệ thống này !!!',
        //         'error'
        //     )
        //     return;
        // }

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          Swal.fire('Opps !!!', 'Tài khoản hoặc mật khẩu không hợp lệ, hãy thử lại !!!', 'error');


          dispatch({
            type: LOGIN_FAIL,
            payload: { error: error.response.data }
          })
        }
      )
  }
}

export const register = (user) => {
  return (dispatch) => {

    dispatch({
      type: REGISTER_REQUEST
    })
    usersApi.postDangKy(user)
      .then(result => {
        Swal.fire(
          'Yeah !!!',
          'Đăng Kí Tài Khoản thành công !!!',
          'success'
        )
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          Swal.fire('Oops !!!', `${error.response.data}`, 'error')
          dispatch({
            type: REGISTER_FAIL,
            payload: { error: error.response.data }
          })
        }
      )
  }
}

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LIST_REQUEST
    })
    usersApi.getDanhSachNguoiDung()
      .then(result => {
        dispatch({
          type: GET_USER_LIST_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: GET_USER_LIST_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const deleteUser = (taiKhoanUser) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
    })
    dispatch({
      type: DELETE_USER_REQUEST
    })
    usersApi.deleteXoaNguoiDung(taiKhoanUser)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Xóa Người Dùng Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: {
            data: result.data,
            userSelected: taiKhoanUser
          },
        })
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
            type: DELETE_USER_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const putUserUpdate = (user) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false
    })
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    usersApi.editTaiKhoan(user)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Chỉnh Sửa Người Dùng Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: {
            data: result.data,
            userSelected: user
          }
        })
      })
      .catch(
        error => {
          Swal.fire('Oops !!!', `${error.response.data}`, 'error');
          Swal.fire('Oops !!!', 'Có lỗi trong quá trình chỉnh sửa, xin hãy kiểm tra lại !!!', 'error')
          dispatch({
            type: UPDATE_USER_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    Swal.fire({
      title: "Waiting ...",
      text: "Đang xử lý ...",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false
    })
    dispatch({
      type: ADD_USER_REQUEST
    })
    usersApi.postThemNguoiDung(user)
      .then(result => {
        Swal.fire({
          title: 'Yeah !!!',
          text: 'Thêm Người Dùng Thành Công !!!',
          icon: 'success',
          allowOutsideClick: false
        })
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: {
            data: result.data,
            userAdd: user
          }
        })
      })
      .catch(error => {
        Swal.fire({
          title: 'Oops !!!',
          text: `${error.response?.data} !!!`,
          icon: 'error',
          allowOutsideClick: false
        })
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error.response.data }
        })
      })
  }
}