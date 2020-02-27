import React, { useCallback, useReducer } from "react";
import id from "uuid/v4";
import Grudges from "./grudges/grudges";
import NewGrudge from "./new-grudge/new-grudge";
import initialState from "./initial-state";

const GRUDGE_ADD = "GRUDGE_ADD";
const GRUDGE_FORGIVE = "GRUDGE_FORGIVE";

const reducer = (state = [], action) => {
    if (action.type === GRUDGE_ADD) {
        return [action.payload, ...state];
    }

    if (action.type === GRUDGE_FORGIVE) {
        return state.map(grudge => {
            if (grudge.id !== action.payload.grudgeId) return grudge;
            return { ...grudge, forgiven: !grudge.forgiven };
        });
    }

    return state;
};

const MemoAndCallback = () => {
    const [grudges, dispatch] = useReducer(reducer, initialState);

    const addGrudge = useCallback(
        ({ person, reason }) => {
            dispatch({
                type: GRUDGE_ADD,
                payload: {
                    id: id(),
                    forgiven: false,
                    person,
                    reason
                }
            });
        },
        [dispatch]
    );

    const toggleForgiveness = useCallback(
        grudgeId => {
            dispatch({
                type: GRUDGE_FORGIVE,
                payload: {
                    grudgeId
                }
            });
        },
        [dispatch]
    );

    return (
        <div>
            <h1>
                Example of a grudge list that uses React.memo and useCallback to avoid re-rendering all elements on add or checkbox change
            </h1>
            <NewGrudge onSubmit={addGrudge} />
            <Grudges grudges={grudges} onForgive={toggleForgiveness} />
        </div>
    );
};

export default MemoAndCallback;
