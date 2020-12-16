import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css'

const Navigation = () => (
  <>
  <ul className = {styles.navbar}>
  <li className = {styles.navbarItem}>
    <NavLink exact to = "/" className = "Navigation-link" activeClassName = 'Navigation-link-active'>Home</NavLink>
  </li>
  <li  className = {styles.navbarItem}> <NavLink to = "/movies"  className = "Navigation-link" activeClassName = 'Navigation-link-active'>Movies</NavLink></li>
</ul>
</>
);


export default Navigation;
