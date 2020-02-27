import React from "react";
import Grudges from "./grudges/grudges";
import NewGrudge from "./new-grudge/new-grudge";

const ContextApi = () => {
    return (
        <div>
            <h1>Example of a grudge list that uses the context API</h1>
            <NewGrudge />
            <Grudges />
        </div>
    );
};

export default ContextApi;
