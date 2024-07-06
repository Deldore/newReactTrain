import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const increment = () => {

        setCount(count + 1)
    }
    const decrement = () => {

        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text"
                   onChange={event => setText(event.target.value)}
                   value={text}
            />
            <h1>{text}</h1>
        </div>
    );
};

export default Counter;