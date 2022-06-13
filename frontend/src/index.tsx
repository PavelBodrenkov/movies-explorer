import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import 'antd/dist/antd.css'
import AuthStore from './store/AuthStore';
import AccountStore from './store/AccountStore';
import MoviesStore from './store/MoviesStore';
import ShowMovieStore from "./store/ShowMovieStore";
import CommentsStore from "./store/CommentsStore";

const Global = createGlobalStyle`
    @font-face{
        font-family: "Inter";
        src:url(./assets/fonts/Inter-Regular.ttf) format('truetype');
        font-style:normal;
        font-weight:400;
    }; 
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"Inter", sans-serif;
        font-weight:400;
    }
    a {
      text-decoration:none;
      color:black;
    }
`
export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const authStore = new AuthStore()
const moviesStore = new MoviesStore(authStore)
const accountStore = new AccountStore(authStore)
const showMovieStore = new ShowMovieStore(authStore)
const commentsStore = new CommentsStore()

const stores = {
    authStore: authStore,
    moviesStore: moviesStore,
    accountStore:accountStore,
    showMovieStore:showMovieStore,
    commentsStore:commentsStore
};

root.render(
    //@ts-ignore
    <Context.Provider
    value={stores}
    >
        <React.StrictMode>
            <BrowserRouter>
                <Global/>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Context.Provider>
);

reportWebVitals();
