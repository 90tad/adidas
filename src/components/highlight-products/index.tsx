import React from "react";
import "./style.scss"
import Arrow from "../Arrow";

function Button() {
    return <div className={"rounded-0 bg-white product-btn d-flex align-items-center"}>
        <h6 className={"mb-0"}>SHOP NOW</h6>
        <Arrow height={"1.5em"} width={"1.5em"}/>
    </div>
}

function HighLightProducts() {
    return <div className={"row px-5 py-4 highlight-products"}>
        <div className={"col-md-6 h-100 position-relative"}>
            <img
                className={"product-img"}
                src={"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/orig-fw20-lect-3d-jewel-tc-large-FZ2133-d_tcm221-549303.jpg"}
                alt={""}/>
            <Button/>
        </div>
        <div className={"col-md-6 h-100 position-relative"}>
            <img
                className={"product-img"}
                src={"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/football-fw20-FCB-sustain-hp-teaser-large-male-d_tcm221-505590.jpg"}
                alt={""}/>
            <Button/>

        </div>
    </div>
}

export default HighLightProducts
