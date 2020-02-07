import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompoundComponents from "./compound-components";
import "./app.scss";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CompoundComponents} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
);

export default App;
