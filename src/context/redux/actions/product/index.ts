import Service from "../../../../service/Service";
import {ON_GET_PRODUCTS_ERROR, ON_GET_PRODUCTS_SUCCESS} from "./types";

function onGetProductsSuccess(products: Array<any>) {
    return ({
        type: ON_GET_PRODUCTS_SUCCESS,
        payload: products,
    })
}

function onGetProductError(error: any) {
    return ({
        type: ON_GET_PRODUCTS_ERROR,
        payload: error
    })
}

export function getAllProducts() {
    return function (dispatch: any) {
        return Service.getInstance().getAllProducts()
            .then(products => dispatch(onGetProductsSuccess(products)))
            .catch((err) => dispatch(onGetProductError(err)))
    }
}
