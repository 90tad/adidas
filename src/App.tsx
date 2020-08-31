import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Category from "./components/category";
import NewsLetter from "./components/news-letter";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Products from './pages/products';
import News from './components/news';
import Poster from "./components/poster";
import HighLightProducts from './components/highlight-products';
import AppContextProvider from "./context/app_context";
import TestFormik from "./test/Formik";
import HighLightProductBottom from "./components/highlight-product-bottom";

function App() {

    return (<AppContextProvider>
        <Router>
            <Header/>
            <Switch>
                <Route path={"/product"} exact component={Products}/>
                <Route path={"/test"} exact component={TestFormik}/>
                <Route>
                    <Poster/>
                    <News/>
                    <Category/>
                    <HighLightProducts/>
                    <HighLightProductBottom/>
                    <NewsLetter/>
                </Route>
            </Switch>
        </Router>
    </AppContextProvider>);
}

export default App;
