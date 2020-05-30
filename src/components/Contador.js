import React, { useState, useEffect } from 'react';

function Contador() {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("O contador foi alterado e possui o valor: " + contador);
    });

    return (
        <div>
            <h1>Contador</h1>
            <span>{contador}</span>
            <div>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            </div>
        </div>
    );
}

export default Contador;