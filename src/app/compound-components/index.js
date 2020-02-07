import React, { useState } from "react";
import Toggle from "./toggle/toggle";
import "./index.scss";

const CompoundComponents = () => {
    const [firstButton, setFirstButton] = useState(false);
    const [secondButton, setSecondButton] = useState(true);

    return (
        <div className="compound-components">
            <Toggle onToggle={state => setFirstButton(state)} name="firstButton" value={firstButton}>
                <Toggle.On>The button is on</Toggle.On>
                <Toggle.Off>The button is off</Toggle.Off>
                <Toggle.Button />
            </Toggle>

            <Toggle onToggle={state => setSecondButton(state)} name="secondButton" value={secondButton}>
                <Toggle.On>The button is on</Toggle.On>
                <Toggle.Off>The button is off</Toggle.Off>
                <Toggle.Button />
            </Toggle>
        </div>
    );
};

export default CompoundComponents;
