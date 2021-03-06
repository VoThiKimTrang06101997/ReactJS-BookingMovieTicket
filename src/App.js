import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import MovieDetail from './pages/MovieDetail';
import BookTickets from './pages/Bookticket';
import AdminLayout from './layouts/AdminLayout';
import UsersManagement from './pages/UsersManagement';
import MoviesManagement from './pages/MoviesManagement';

import './normalize.css'
// Guard
import AdminRoute from "./guards/AdminRoute";
import CheckoutRoute from "./guards/CheckoutRoute";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Tix - Trang chủ'
  })
  return (
    <BrowserRouter >
      <Switch>

        {/* component hiển thị bên trong route này luôn có giao diện MainLayout( header và footer) */}
        <Route exact path={["/", "/phim/:movieId", "/datve/:movieId"]}>

          <Switch >
            <CheckoutRoute exact path="/datve/:maLichChieu" component={BookTickets} />
            <MainLayout >
              <Route exact path="/" component={Homepage} />
              <Route exact path="/phim/:movieId" component={MovieDetail} />
            </MainLayout>
          </Switch>

        </Route>

        {/* component trong này chỉ cho phép truy cập khi tài khoản là admin */}
        <Route exact path={["/admin/users", "/admin/movies"]}>
          <AdminLayout >
            <Switch >
              <AdminRoute exact path='/admin/users' component={UsersManagement} />
              <AdminRoute exact path='/admin/movies' component={MoviesManagement} />
            </Switch>
          </AdminLayout>
        </Route>

        {/* component hiển thị bên trong route này luôn có giao diện AuthLayout */}
        <Route exact path={["/dangnhap", "/dangky"]}>
          <AuthLayout >
            <Switch >
              <Route exact path="/dangnhap" component={Login} />
              <Route exact path="/dangky" component={Register} />
            </Switch>
          </AuthLayout>
        </Route>

        {/* khi người dùng nhập sai địa chỉ ví dụ localhost:3002/fdsf thì tự động chuyển sang trang home*/}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
