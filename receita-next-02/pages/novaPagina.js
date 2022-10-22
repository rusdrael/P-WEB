import {Q1eQ2eQ3} from './receita/Q1eQ2eQ3.js';

export default function Principal(){
    return ( 
        <div>
            <h1>Nova Página</h1>
            <MariaPrea/>
            <Q1eQ2eQ3/>
        </div>
    )
}

export function MariaPrea(){
    return (
        <h2>Morreu Maria Preá...</h2>
    )
}