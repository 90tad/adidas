import {RootState} from "../context/redux/reducers";
import isEqual from 'react-fast-compare';
import {TypedUseSelectorHook} from "react-redux";
import {
    useSelector as useReduxSelector,
} from 'react-redux';

const customSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

function useSelector<T>(
    selector: (state: RootState) => T,
    equalityFn = isEqual,
): T {
    const state = customSelector(x => x, equalityFn);
    return selector(state);
}

export default useSelector
