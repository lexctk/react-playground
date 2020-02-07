import React, { createContext, useContext, useEffect, useState } from "react";
import Switch from "./switch";

const ToggleContext = createContext();

const Toggle = props => {
    const { children, onToggle, value = false, name } = props;

    const [on, setOn] = useState(value);

    const toggle = () => {
        setOn(!on);
    };

    useEffect(() => {
        return onToggle(on);
    }, [on, onToggle]);

    return <ToggleContext.Provider value={{ on, toggle, name }}>{children}</ToggleContext.Provider>;
};

const On = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

const Off = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
};

const Button = () => {
    const { on, toggle, name } = useContext(ToggleContext);
    return <Switch on={on} onClick={toggle} name={name} />;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;
