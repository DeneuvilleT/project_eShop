import React from 'react';
import styles from '../Nav/nav.module.css'
import { Link } from 'react-router-dom';

export function Nav() {

    return (

        <>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to={'/'}>Acceuil</Link></li>
                    <li><Link to={'/products'}>Produits</Link></li>
                    <li><Link to={'/binDisplay'}>Panier</Link></li>
                    {/* <li><Link to={'/'}>A propos</Link></li>
                    <li><Link to={'/'}>Compte</Link></li> */}
                </ul>
            </nav>
        </>

    );
};

