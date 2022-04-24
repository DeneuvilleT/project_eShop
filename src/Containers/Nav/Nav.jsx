import React from 'react';
import styles from '../Nav/nav.module.css'
import { Link } from 'react-router-dom';

export function Nav() {

    return (

        <>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to={'/'}><i style={{paddingRight : '10px'}} className="fa-solid fa-house"></i>Accueil</Link></li>
                    <li><Link to={'/products'}><i style={{ paddingRight: '10px' }} className="fa-solid fa-book-open"></i>Produits</Link></li>
                    <li><Link to={'/binDisplay'}><i style={{ paddingRight: '10px' }} className="fa-solid fa-bag-shopping"></i>Panier</Link></li>
                </ul>
            </nav>
        </>

    );
};

