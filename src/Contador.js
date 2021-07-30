import { useState } from "react";

const Contador = ({valor}) => {

    const [conteo, setConteo] = useState(valor);

    const sumar = () => {
        setConteo(conteo +1);
    }

    const restar = () => {
        setConteo(conteo -1);
    }

    const reset = () => {
        setConteo(valor);
    }

    return (
        <>
        <h1>Contador</h1>
        <h2>{conteo}</h2> 
        <button onClick={sumar}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={restar}>-</button>
        </>
    )
        
}

export default Contador