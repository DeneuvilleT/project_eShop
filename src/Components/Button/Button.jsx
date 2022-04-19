import React from "react";
import styles from '../Button/button.module.css';

export function Button (props) {
    
        return (
            <>
                <button id={props.idProducts} className={styles.button} onClick={props.fonction}>{props.valeur}</button>
            </>
        )
}
