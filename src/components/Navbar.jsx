import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Music Discovery</h1>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link to="/trending" className={styles.navLink}>Trending</Link>
                </li>
                <li>
                    <Link to="/artists" className={styles.navLink}>Artists</Link>
                </li>
                <li>
                    <Link to="/About" className={styles.navLink}>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
