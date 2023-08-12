import React, { useContext, useState } from 'react'
import { CounterContext } from '../context/counterContext';

export default function Counter() {

    const { count, setCount } = useContext( CounterContext );

    return (
        <div className='alert alert-secondary text-center'>
            <h1>Counter Component</h1>
            <p>{count}</p>

            <button onClick={() => setCount( count + 1 )} className='btn btn-success mx-2'>+</button>
            <button onClick={() => setCount( count - 1 )} className='btn btn-danger mx-2'>-</button>
        </div>
    )
}
