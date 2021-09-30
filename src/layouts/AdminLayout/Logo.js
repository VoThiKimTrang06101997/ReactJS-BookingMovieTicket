import React from 'react';

const Logo = (props) => {
  return (
    <img
      style={{ width: '50px', height: '50px' }}
      alt="Logo"
      src="https://tix.vn/app/assets/img/icons/web-logo.png"
      {...props}
    />
  );
};

export default Logo;
