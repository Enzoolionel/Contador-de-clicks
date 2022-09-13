import React from "react";
import '../hojas-de-estilo/contador.css'

function Contador ({ numClick }) {
    return(
        <div className="contador">
            {numClick}
        </div>
    )
}

export default Contador;