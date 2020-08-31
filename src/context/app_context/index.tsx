import React from "react";
import {Provider} from "react-redux";
import {AppContext, store} from "./AppContext";

type ContextProvider = {
    children: any
}

function AppContextProvider({children}: ContextProvider) {

    return <Provider store={store} context={AppContext}>
        {children}
    </Provider>
}

export default AppContextProvider
