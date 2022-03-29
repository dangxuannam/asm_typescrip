import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
  <div>
  <div className="header-top">
    <div className="phone">
      <ul>
        <li> <a href=""><i className="fa-solid fa-phone" />0337608937 </a> <a href=""><i className="fa-solid fa-clock" />All day: 08:00 - 22:00</a> </li> 
       
      </ul></div>
    <div className="menu-top">
      <a href="">Login</a>   <a className='cart' href=""><i className="fa-thin fa-cart-circle-arrow-down"></i></a>
      
    </div>
    
  </div>
  <div className="navmenu">
    <div className="logo">
      <img src="./img/logo_totalchicken (1).png" alt =""/>
    </div>
    
    <div className="menu">
      <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">THỰC ĐƠN</a></li>
        <li><a href="">KHUYẾN MÃI</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
    </div>
    <div className="search">
    
       <input type="text" placeholder='tìm kiếm' />
       <a href=""><i className="fas fa-search"></i></a>
     
    </div>
  </div>
</div>

  )
}
export default Header