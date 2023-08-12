import React, { useState } from 'react'
import { CounterContext } from './counterContext'

export default function CounterProvider( props ) {
    const [ count, setCount ] = useState( 0 );
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {props.children}
        </CounterContext.Provider>
    )
}


