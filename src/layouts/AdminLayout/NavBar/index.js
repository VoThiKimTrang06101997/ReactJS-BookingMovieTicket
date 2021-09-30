import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Hidden, List, Typography, makeStyles } from '@material-ui/core';
import NavItem from './NavItem';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../reducers/constants/User';

// TÊN NGƯỜI DÙNG, ĐẶT TRONG WRAPPER
const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Front-end Developer',
  name: currentUser ? currentUser.hoTen : null
};


const items = [
  {
    href: '/admin/movies',
    icon: MovieIcon,
    title: 'Quản lý phim'
  },
  {
    href: '/admin/users',
    icon: PeopleAltIcon,
    title: 'Quản lý người dùng'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // đây là nội dung cột bên trái
  const content = (

    // cái này là div để dàn thành cột
    <Box height="100%" display="flex" flexDirection="column">
      {/* đây là phần logo avatar user và tên user */}
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} component={RouterLink} src={user.avatar} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>

      <Divider />

      {/* đây là phần menu lựa chọn */}
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}

          <NavItem href='/dangnhap' title='Đăng xuất' icon={ExitToAppIcon} onClick={() => dispatch({ type: LOGOUT })} />
        </List>
      </Box>
    </Box>
  );

  return (
    <>

      {/* đây là giao diện mobile */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile} // đóng mở tùy thuộc vào bạn click
          variant="temporary" // kiểu temporary có một lớp phủ mờ hiện ra cho đến khi bạn chọn xong thì Drawer mới đóng lại
        >
          {content}
        </Drawer>
      </Hidden>

      {/* đây là giao diện desktop */}
      <Hidden mdDown>
        <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;