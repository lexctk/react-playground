import React, { useEffect, useState } from "react";
import "./counter.scss";

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key);
        if (storage) return JSON.parse(storage).value;
        return initialState;
    };

    const [value, setValue] = useState(get());

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }));
    }, [key, value]);

    return [value, setValue];
};

const Counter = () => {
    const [count, setCount] = useLocalStorage(0, "count");
    return (
        <div className="counter">
            <div className="readme">This counter uses a custom hook instead of useState</div>
            <div>{count}</div>
            <button className="counter__button" type="button" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
};

export default Counter;
