import React from 'react'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <div class="ui segment wide horizontal list">
      <div class="item">
        <img class="ui avatar image" src={logo} alt="logo" />
      </div>
      <div class="item">
        <div class="content">O nas</div>
      </div>
      <div class="item">
        <div class="content">Kontakt</div>
      </div>
    </div>
  )
}

export default Header
