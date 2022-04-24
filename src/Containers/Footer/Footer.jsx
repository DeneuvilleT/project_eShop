import React from 'react';
import styles from '../Footer/footer.module.css'

export function Footer() {

    return (

        <>
            <footer className={styles.footer} >
                <ul>

                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>News</li></a>
                    <a href="#"><li>A propos</li></a>
                    <a href="#"><li>Auteur</li></a>
                    <li>&copy; copyright</li>

                </ul>
            </footer>
        </>

    );
};