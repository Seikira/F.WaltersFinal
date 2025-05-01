import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
            </div>
            <p className={styles.copy}>
                © {new Date().getFullYear()} Music Discovery. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
