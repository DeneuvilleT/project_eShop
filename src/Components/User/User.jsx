import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Button } from "../Button/Button";
import { Bin } from "../Bin/Bin";
import styles from "../User/user.module.css";

export function Users() {

    const { name } = useContext(GlobalContext);
    const { lastName } = useContext(GlobalContext);
    const [isConnected, setConnect] = useState(true);


    const buttonDisabled = () => {
        if (isConnected === false) {
            document.querySelectorAll('main button').forEach((btn) => {
                btn.disabled = true;
            });
        } else {
            document.querySelectorAll('main button').forEach((btn) => {
                btn.disabled = false;
            });
        };
    };

    useEffect(() => {
        buttonDisabled();
    }, [isConnected]);

    
    return (
        <div className={styles.user}>
            <h3>{name}</h3>
            <h3>{lastName}</h3>
            <span>
                {
                    isConnected && <p style={{ color: "green" }}>Connecté</p>
                }
                {
                    !isConnected && <p style={{ color: "red" }}>Déconnecté</p>
                }
            </span>

            <Bin />
            <Button valeur={!isConnected ? "Connexion" : "Deconnexion"} fonction={(e) => setConnect(!isConnected ? true : false)} />
        </div>
    );
};