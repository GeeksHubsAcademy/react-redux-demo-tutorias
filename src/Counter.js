import './Counter.css';
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const ref = useClickOutside(() => {
        increment();
        console.log('clicked outside');
    });
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const color = count < 0 ? 'red' : 'green';

    return (
        <div className="Counter" ref={ref}>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-</button>
            <h1 style={{ color }}>{count}</h1>
        </div>
    );
}

export default Counter;
