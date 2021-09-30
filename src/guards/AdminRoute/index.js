import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: UsersManagement, ...routeProps } = props;
  return (
    <Route {...routeProps} render={(props) => {
      if (currentUser) {
        if (currentUser.maLoaiNguoiDung === 'QuanTri') {
          return <UsersManagement {...props} />
        }
        Swal.fire(
          'Oops !!!',
          'Bạn không có quyền truy cập vào hệ thống này !!!',
          'error'
        )
        return <Redirect to='/' />
      }

      return <Redirect to='/login' />
    }} />
  )
}
export default AdminRoute;

