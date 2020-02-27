import React, { useContext } from "react";
import { GrudgeContext } from "../grudge-context";

const Grudge = ({ grudge }) => {
    const { toggleForgiveness } = useContext(GrudgeContext);
    const { id, person, reason, forgiven } = grudge;

    return (
        <article className="Grudge" key={id}>
            <h3>{person}</h3>
            <p>{reason}</p>
            <div className="Grudge-controls">
                <label htmlFor={id} className="Grudge-forgiven">
                    <input id={id} type="checkbox" checked={forgiven} onChange={() => toggleForgiveness(id)} />
                    Forgiven
                </label>
            </div>
        </article>
    );
};

export default Grudge;
