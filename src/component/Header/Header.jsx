import React from 'react'
import CloudSvg from '../Common/CloudSvg'
import Logo from '../Common/Logo'

function Header() {
  const style={
   
  } 
  return (
    <div className="relative">
      <Logo />
      <CloudSvg styles={style} />
    </div>
  );
}

export default Header
