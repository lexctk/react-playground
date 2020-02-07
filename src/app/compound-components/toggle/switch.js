import React from "react";
import "./switch.scss";

const noop = () => {};

const Switch = props => {
    const { on, className = "", "aria-label": ariaLabel, onClick, name } = props;

    const btnClassName = [className, "toggle-btn", on ? "toggle-btn-on" : "toggle-btn-off"].filter(Boolean).join(" ");
    return (
        <label htmlFor={name} aria-label={ariaLabel || "Toggle"} style={{ display: "block" }}>
            <input
                id={name}
                className="toggle-input"
                type="checkbox"
                checked={on}
                onChange={noop}
                onClick={onClick}
                data-testid="toggle-input"
            />
            <span className={btnClassName} />
        </label>
    );
};

export default Switch;
