import React from 'react';
import { Title } from './Title';
import styles from '../Header/header.module.css'


export function Header() {

    return (
        <>
            <header className={styles.header}>
                <Title heading="h1" title="Baka Store" />
                <Title heading="h2" title="Le paradis des bakas !" />
            </header>
        </>
    );
};