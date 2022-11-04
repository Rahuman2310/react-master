import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #293131;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  top: 0;
  @media screen and (max-width: 768px) {
   
   
   
  } 
`;
  
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffff00;
  }
  @media screen and (max-width: 768px) {
   
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color:  #ffff00;
  @media screen and (max-width: 768px) {
    
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
   
  }
`;