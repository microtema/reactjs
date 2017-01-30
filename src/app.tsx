import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";

const counterReducer = (state: any, action: any) => {
    console.log("reducer#state", state);
    console.log("reducer#action", action);

    if (action.type == "INC") {
        return state + 1;
    }

    if (action.type == "DEC") {
        return state - 1;
    }

    return state;
};

let payload = 1;
let store = createStore(counterReducer, payload);

store.subscribe(() => {
    console.log("Store changed", store.getState());
});

store.dispatch({type: "INT", payload: 1});

render(
    <Provider store={store}>
        <App name="Mario"></App>
    </Provider>,
    document.getElementById('root')
);

