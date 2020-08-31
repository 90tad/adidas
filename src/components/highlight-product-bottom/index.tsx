import React from "react";

const src = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/xcat-ss20-signal-pink-mh-small-FV8340-d_tcm221-551911.jpg"

function HighLightProductBottom() {
    return <div className={"p-4 d-flex align-items-center"} style={{
        backgroundImage: `url(${src})`,
        height: "100%",
        backgroundPosition: "right",
        backgroundSize: "cover",
        minHeight: 820,
    }}>

        <div className={"px-5"}>
            <h1>BE SEEN</h1>
            <p className={"mb-0"}>The best don’t blend in. An exclusive collection for athletes who rise </p>
            <p> above the rest.</p>
        </div>

    </div>

}

export default HighLightProductBottom
