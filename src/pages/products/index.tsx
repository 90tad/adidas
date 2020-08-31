import React, {memo, useCallback, useEffect} from "react";
import "./style.scss";
import Arrow from "../../components/Arrow";
import {useDispatch, useSelector} from "../../context/app_context/AppContext";
import {getAllProducts} from "../../context/redux/actions/product";
import {createSelector} from "reselect";
import {RootState} from "../../context/redux/reducers";
import isEqual from "react-fast-compare";

function BSIc() {
    return <svg width="1.5em" height="1.5em" viewBox="0 0 16 16"
                className="bi bi-bootstrap-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
    </svg>
}

const selectProducts = createSelector((state: RootState) => state.productReducer, (reducer) => reducer?.products)

function Products() {

    const dispatch = useDispatch()
    const products = useSelector(selectProducts, isEqual)

    const fetch = useCallback(() => dispatch(getAllProducts()), [dispatch])

    useEffect(() => {
        console.table(products)
    }, [products])

    return <div className={"container"}>
        <div className={"row my-4"}>
            <div className="col-md-5">
                <h1>LOGIN</h1>
                <p>Forgot password?</p>
                <form
                    className={"w-100"}
                    action={"http://localhost:5000/user/add"}
                    method={"POST"}>
                    <div className={"form-group"}>
                        <label htmlFor={"username"} className={"sr-only"}>Product name</label>
                        <input required
                               placeholder={"Username"}
                               className={"rounded-0"}
                               name={"username"}
                               id={"username"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"password"} className={"sr-only"}>Price</label>
                        <input required
                               placeholder={"Password"}
                               name={"password"}
                               id={"password"}/>
                    </div>
                    <button className="btn btn-lg btn-dark rounded-0"
                            type="submit">SIGN IN <Arrow width={"1.5em"}
                                                         height={"1.5em"}/>
                    </button>
                    <div className={"mt-3"}>
                        By clicking 'Log In' you agree to our website Creators Club Terms & Conditions, adidas Privacy
                        Notice and Terms & Conditions.
                    </div>
                    <h6 className={"mt-2"}>
                        OR
                    </h6>
                    <div className={"mt-3"}>
                        <div
                            onClick={fetch}
                            className={"border border-dark mt-2 p-3 w-50 d-flex justify-content-between align-items-center"}
                            role={"button"}>
                            <h6 className={"mb-0"}>
                                FACEBOOK
                            </h6>
                            <BSIc/>
                        </div>
                        <div
                            className={"border border-dark mt-2 p-3 w-50 d-flex justify-content-between align-items-center"}
                            role={"button"}>
                            <h6 className={"mb-0"}>
                                GOOGLE
                            </h6>
                            <BSIc/>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"col-md-6 offset-md-1"}>
                <h1 className={"mb-0"}>JOIN THE CLUB.</h1>
                <h1>GET REWARDED.</h1>
            </div>
        </div>
    </div>
}

export default memo(Products)
