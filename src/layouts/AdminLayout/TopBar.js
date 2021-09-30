import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Box, Hidden, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../reducers/constants/User';

const img = '/static/images/avatars/avata_1.png'
const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (

    // đây là phần thanh ngang nằm trên cùng
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        {/* cái logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* 1 thẻ div chiếm hết khoảng trống còn lại dể dồn các icon về 2 bên */}
        <Box flexGrow={1} />

        {/* cái icon đăng xuất */}
        <Hidden mdDown>
          <Link to='/dangnhap' color="inherit">
            <InputIcon style={{ color: 'white' }} onClick={() => dispatch({ type: LOGOUT })}></InputIcon>
          </Link>
        </Hidden>

        {/* cái icon menu */}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

// báo lỗi nếu kiểu dữ liệu truyền vào props không đúng với yều cầu bên dưới
TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
