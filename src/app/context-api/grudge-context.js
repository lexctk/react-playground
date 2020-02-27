import React, { useReducer, createContext, useCallback } from "react";
import id from "uuid/v4";
import initialState from "./initial-state";

export const GrudgeContext = createContext();

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

export const GrudgeProvider = ({ children }) => {
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

    return <GrudgeContext.Provider value={{ grudges, addGrudge, toggleForgiveness }}>{children}</GrudgeContext.Provider>;
};
