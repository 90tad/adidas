import {ON_GET_PRODUCTS_ERROR, ON_GET_PRODUCTS_SUCCESS} from "../actions/product/types";

function productReducer(state: any = null, action: any) {
    switch (action.type) {
        case ON_GET_PRODUCTS_SUCCESS:
            return {...state, products: action.payload}
        case ON_GET_PRODUCTS_ERROR:
            return state
        default:
            return state
    }
}

export default productReducer
