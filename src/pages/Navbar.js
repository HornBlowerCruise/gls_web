import '../css/Navbar.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <div>
      <header className={visible ? '' : 'hide'}>
  <h1 className='logo'>GLS</h1>
  <span className='blankCenter'></span>
    <div className='board1'>선한지도자학교
    <div className='board1DropDown'>
        <ul>
            <li onClick={() => { navigate('/topmenu01/submenu01');}} className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div>
    </div>
    <div className='board2'>주요업무
    <div className='board2DropDown'>
        <ul>
            <li className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div>
    </div>
    <div className='board3'>업무사례
    <div className='board3DropDown'>
        <ul>
            <li className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div>
    </div>
    <div className='board4'>알림마당
    <div className='board4DropDown'>
        <ul>
            <li className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div>
    </div>
    <div className='board5'>문의하기
    </div>
    <span className='blankRight'></span>
    {/* </span> */}
</header>
    </div>
  )
}

export default Navbar
