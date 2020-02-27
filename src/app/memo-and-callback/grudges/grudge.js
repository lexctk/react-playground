import React from "react";

const Grudge = React.memo(({ grudge, onForgive }) => {
    const { id, person, reason, forgiven } = grudge;

    console.log("Rendering Grudge", id);

    return (
        <article className="Grudge" key={id}>
            <h3>{person}</h3>
            <p>{reason}</p>
            <div className="Grudge-controls">
                <label htmlFor={id} className="Grudge-forgiven">
                    <input id={id} type="checkbox" checked={forgiven} onChange={() => onForgive(id)} />
                    Forgiven
                </label>
            </div>
        </article>
    );
});

export default Grudge;
