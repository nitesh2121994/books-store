import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">

        <div className={styles.headerWrapper}>
          <div className={styles.appName}>
            Book app
          </div>
          <nav >
            <ul className={styles.menus}>
              <li>
                <NavLink to="/home" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
              </li>
              <li>
                <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ""}>Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;