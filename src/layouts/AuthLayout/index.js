import React from 'react'

export default function AuthLayout(props) {
  const link = 'https://tix.vn/app/assets/img/icons/bg2.jpg'
  const background = {
    backgroundImage: 'url(' + link + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  }
  const bgColor = {
    height: '1000px',
    minHeight: '100vh',
  }

  return (
    <div style={background}>
      <div style={bgColor}>
        {props.children}
      </div>
    </div>
  )
}
