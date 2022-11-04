import React ,{useState} from "react";
import { menuItems } from '../menuItems';
import MenuItems from './Menuitems';

import './Nav.css';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
    
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <Nav>
       
      <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
        <NavMenu>
          <div className="nav">
          <img src="./images/nimatooz_smile_logo.png"  alt=""  className="imgsrc"/>
          <div className={isNavExpanded ? "navigation-menu expanded" : "menu"}>
          <text className="ul">
          <li><NavLink to="/index" activeStyle>
            Home
          </NavLink></li>
          <li><NavLink>
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
      </NavLink></li>
          <li><NavLink to="/product" activeStyle>
            Product
          </NavLink></li>
          <li><NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink></li>
          <li><NavLink to="/blog" activeStyle>
            Blog
          </NavLink></li>
          <li><NavLink to="/about" activeStyle>
            About
          </NavLink></li>
          <li><NavLink to="/career" activeStyle>
            Career
          </NavLink></li>
          <li><NavLink to="/contact" activeStyle>
            Contact
          </NavLink></li></text></div>



            </div>
            


        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;