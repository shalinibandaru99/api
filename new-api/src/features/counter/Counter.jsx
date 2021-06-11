import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';

export function Counter() {
    const count = useSelector(selectCount),
        dispatch = useDispatch()

    return (
        <div>
        <span>Count {count}</span>
        <button
        onClick={() => dispatch(increment())}
        >
            +
        </button>
        <button
        onClick={() => dispatch(decrement())}
        >
            -
        </button>
        </div>
    )
}