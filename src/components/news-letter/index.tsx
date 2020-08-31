import React from "react";

function NewsLetter() {
    return <div style={{backgroundColor: "#ede734"}} className={"mt-3"}>
        <div className={"container"}>
            <div className={"d-flex flex-row py-4"}>
                <div className={"flex-grow-1"}>
                    <h3 className="display-6">STAY IN THE KNOW WITH </h3>
                    <h3 className="display-6">ADIDAS!</h3>
                </div>
                <button className={"btn btn-dark rounded-0 flex-shrink-1 d-flex align-items-center my-auto"}
                        style={{height: 48}}>
                    SIGN UP
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right-short ml-2"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
}

export default NewsLetter
