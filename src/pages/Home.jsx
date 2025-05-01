import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Music Discovery</h1>
                    <p className={styles.heroSubtitle}>Music finding made easy</p>
                    <p className={styles.heroDescription}>
                        Here at Music Discovery we like to set the bar when it comes to finding the music you love!
                    </p>
                    <Link to="/trending" className={styles.ctaButton}>
                        Explore Trending Songs
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
