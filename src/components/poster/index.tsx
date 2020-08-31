import React from "react";
import "./style.scss"

function Poster() {
    return (
        <div className="jumbotron rounded-0 mb-0 p-0">
            <div className={"p-4 poster-bg d-flex align-items-center"}>
                <div className={"px-5"}>
                    <h1 className="display-5 text-white">MAKE YOUR MARK</h1>
                    <p className="lead text-white">Complete your look with our most popular backpacks.</p>
                    <button className={"btn bg-white rounded-0 btn-lg"}>
                        SHOP NOW
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right-short"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default Poster
