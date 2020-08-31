import React from "react";
import "./style.scss"

function News() {
    return <div className={"d-flex align-items-center news-container"}>
        <div className={"d-flex justify-content-center align-items-center w-100 flex-column p-0"}>
            <h3>SALE</h3>
            <div className={"m-3"}>
                30% off select NMD styles. Use promo code <strong>SNEAKERS</strong>. Save on the everyday, everywhere
                sneaker.
            </div>
            <small>SHOP MEN</small>
        </div>
    </div>
}

export default News
