import React from "react";
import "./style.scss"

type Category = {
    img: String,
    title: String
}


const src = "https://assets.adidas.com/images/w_600,f_auto,q_auto/69721f2e7c934d909168a80e00818569_9366/Giay_Stan_Smith_Mau_trang_M20324_01_standard.jpg"


const getCategory: Function = (img: String, title: String) => ({img, title})
const categories: Array<Category> = [
    getCategory(src, "SHOP SHOES"),
    getCategory(src, "SHOP TOPS"),
    getCategory(src, "SHOP BOTTOMS"),
    getCategory(src, "SHOP RUNNING SHOES")
]

function Category() {

    const renderCategory = React.useCallback(
        ({img, title}, key) => <div className={"col-md-3"} key={key} role={"button"}>
            <div className={"position-relative"}>
                <img src={img} alt={""} style={{width: "100%", maxHeight: 256, objectFit: "cover"}}/>
                <h6 className={"position-absolute category-title"}>{title}</h6>
            </div>
        </div>, [])

    return <div className={"py-4 px-5 mt-4"}>
        <div className={"row"}>
            {categories.map(renderCategory)}
        </div>
    </div>
}

export default Category
