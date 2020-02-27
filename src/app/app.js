import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompoundComponents from "./compound-components";
import Counter from "./custom-hooks/counter/counter";
import Header from "./header/header";
import { GrudgeProvider } from "./context-api/grudge-context";
import ContextApi from "./context-api";
import MemoAndCallback from "./memo-and-callback";
import "./app.scss";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/compound-components" component={CompoundComponents} />
                <Route exact path="/custom-hooks" component={Counter} />
                <Route exact path="/memo-callback" component={MemoAndCallback} />
                <GrudgeProvider>
                    <Route exact path="/context-api" component={ContextApi} />
                </GrudgeProvider>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
);

export default App;
