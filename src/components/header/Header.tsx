import React, {useCallback, useEffect} from "react";
import "./style.scss"
import {homeNavs, homeSecondaryNavs} from "../../constant/navs/home_nav";

type HeaderProps = {
    onClick?: any;
}

const defaultProps = {
    name: "TEST"
}

function Header({onClick}: HeaderProps) {

    const initScrollListener = useCallback(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;
            const navbarElem = document.getElementById('navbar') as HTMLElement;
            if (prevScrollpos > currentScrollPos) {
                navbarElem.style.top = "0";
            } else {
                navbarElem.style.top = "-82px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, [])

    useEffect(() => {
        initScrollListener()
    }, [initScrollListener])

    const renderNavItems = useCallback(({label, href}, key) => <li className="nav-item" key={key}>
        <div className="nav-link" role={"button"}>
            <a href={href} className={"text-decoration-none text-dark"}>{label}</a>
        </div>
    </li>, [])

    return (<>
            <div className={"secondary-navs"}>
                <div className={"d-flex flex-row container justify-content-between"}>
                    {homeSecondaryNavs.map(({label, href}, index) =>
                        <a href={href} key={index} className={"text-dark"}>
                            {label}
                        </a>)}
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom" id={"navbar"}>
                <div className={"container"}>
                    <nav className="navbar navbar-light bg-white ">
                        <div className="navbar-brand">
                            <a href={"/"}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                                     width="56"
                                     height="56"
                                     className="d-inline-block align-top" alt=""/>
                            </a>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {homeNavs.map(renderNavItems)}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className={"input-group"}>
                                <input className="mr-sm-2 pr-5"
                                       placeholder="Search"
                                       aria-label="Search"/>
                                <span className={"position-absolute d-flex align-items-center search-ic h-100"}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fillRule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
                </span>
                            </div>
                            <div onClick={onClick}>
                                <svg width="1.5em"
                                     height="1.5em"
                                     role="button"
                                     viewBox="0 0 16 16"
                                     className="bi bi-cart ml-2 cart-ic"
                                     fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                            </div>
                            <div onClick={onClick}>
                                <svg width="1.5em"
                                     height="1.5em"
                                     role="button"
                                     viewBox="0 0 16 16"
                                     className="bi bi-person ml-2"
                                     fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.defaultProps = defaultProps
export default Header
