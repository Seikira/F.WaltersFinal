import React from 'react';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.subtitle}>Our mission to make music discovery easy and fun.</p>
            </section>

            <section className={styles.content}>
                <div className={styles.section}>
                    <h2 className={styles.heading}>Our History</h2>
                    <p className={styles.text}>
                        Music Discovery was born from the idea that finding music should be as easy as clicking a button. We wanted to create a platform that simplified music discovery and helped users explore new sounds effortlessly. From our humble beginnings, our platform has grown, and we're now working with some of the top music streaming services to bring you the best personalized experience.
                    </p>
                    <p className={styles.text}>
                        What started as a small passion project has now blossomed into a global community of music lovers. Our mission has always been simple: to connect people with the music that resonates with them the most, whether it is an obscure indie artist or a chart-topping hit. Our journey has been incredible, and we can't wait to see where it takes us.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Our Passion</h2>
                    <p className={styles.text}>
                        At the heart of everything we do is our love for music. We believe music is a universal language, capable of bringing people together, expressing emotions, and telling stories. Our team is made up of people who are deeply passionate about discovering new sounds and artists, and we aim to share that passion with you.
                    </p>
                    <p className={styles.text}>
                        We are constantly searching for new ways to improve the music discovery process, using technology to enhance your experience. Whether it's curating personalized playlists or introducing you to new genres, we are committed to helping you find the music that speaks to you.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.heading}>Our Goal</h2>
                    <p className={styles.text}>
                        Our ultimate goal is to help music lovers discover new artists, songs, and playlists effortlessly. We believe that the right song can change a moment, and the right playlist can transform your day. Our platform is designed to ensure that everyone can find something new and exciting, no matter their taste or musical preference.
                    </p>
                    <p className={styles.text}>
                        In addition to helping you find new music, we want to empower you to create and share your own musical journey. Whether you are a casual listener or a die-hard fan, Music Discovery is your go-to destination to explore and celebrate the world of music.
                    </p>
                    <p className={styles.text}>
                        As we continue to grow and evolve, our commitment to providing an easy-to-use, intuitive platform remains our priority. We are here to make your music discovery experience as seamless as possible, so you can focus on what really matters, enjoying the music you love.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
