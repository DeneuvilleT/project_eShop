import React from "react";

export function Button (props) {
    
        return (
            <>
                <button id={props.idProducts} className={props.classname} style={{borderRadius : '20px', padding : '8px'}} onClick={props.fonction}>{props.valeur}</button>
            </>
        )
}
