import React from "react";
import { menuItems } from '../menuItems';
import MenuItems from './Menuitems';

import './Nav.css';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
    
const Navbar = () => {
  return (
    <>
      <Nav>
       
      
        <NavMenu>
        <img src="./images/nimatooz_smile_logo.png"  alt="" style={{width:"300px",height:"fit-content",paddingRight:"100px"}}/>
          <NavLink to="/index" activeStyle>
            Home
          </NavLink>
          <NavLink>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
            />
          );
        })}
      </ul>
      </NavLink>
          <NavLink to="/product" activeStyle>
            Product
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/career" activeStyle>
            Career
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;