import {createContext} from "react";
import {
    createDispatchHook,
    createSelectorHook,
    createStoreHook
} from 'react-redux'
import {rootReducer} from "../redux/reducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

type Context = any
const initialContext: Context = null

export const AppContext = createContext(initialContext)
export const useDispatch = createDispatchHook(AppContext)
export const useSelector = createSelectorHook(AppContext)
export const useStore = createStoreHook(AppContext)
export const store = createStore(rootReducer, applyMiddleware(thunk))
