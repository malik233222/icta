import React from 'react'
import logo from '../assets/images/gradient_black.png'
export default function Sidebar() {
  return (
    <>
      <div className='container-custom'>

        <div className='bar-logo-wrapper'>
          <img src={logo} alt="" />
        </div>

        <div className='menu-wrapper'>
          <a href="">
            <span></span>
            <span>Yeni şikayət yarat</span>

          </a>
          <a href="">
            <span></span>
            <span>Şikayətlər</span>
          </a>
          <a href="">
            <span></span>
            <span>İsteklahçı təcrübəsi sorğusu</span>
          </a>
        </div>

        <div className="exit">

        </div>

      </div>
    </>
  )
}
