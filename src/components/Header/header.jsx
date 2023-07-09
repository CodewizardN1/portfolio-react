import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
    <div id="home" className="bg-[#000] sm:flex hidden justify-between items-center">
          <div className="w-[80%] h-[10vh] m-auto flex items-center justify-between font-serif ">
            <div>
              <h1 className="text-[white] text-[30px] sm:text-[36px] sm:font-[700] font-[400]">
                Azizbek
              </h1>
            </div>
            <div className="">
              <div className=" gap-[25px] sm:flex hidden ">
                <a
                  className="hover:text-[#999999] text-[18px] text-[#fff]"
                  href="#home"
                >
                  About me
                </a>
                <a
                  className="hover:text-[#999999] text-[18px] text-[#fff]"
                  href="#about"
                >
                  Skills
                </a>
                <a
                  className="hover:text-[#999999] text-[18px] text-[#fff]"
                  href="#contact"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
          <div>
            <i className="ml-[-60px] text-[#fff] text-[20px] fa-solid fa-bars sm:hidden block"></i>
          </div>
        </div>
    
    <div className='center sm:hidden flex w-[90%]'>
      <Navbar   color="faded" light>
        <div className='flex justify-between w-[90%] gap-[14rem]'>

        <div className='flex items-center'>

        <NavbarBrand  href="/" className="me-auto ">
            Azizbek
        </NavbarBrand>
        </div>
        <div>

        <NavbarToggler  onClick={toggleNavbar}  />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        </div>
      </Navbar>
    </div>
    </>
  );
}

export default Header;



