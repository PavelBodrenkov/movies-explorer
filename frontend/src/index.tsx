import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import 'antd/dist/antd.css'
import AuthStore from './store/AuthStore';
import AccountStore from './store/AccountStore';
import MoviesStore from './store/MoviesStore';

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
export const Context = createContext(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //@ts-ignore
  <Context.Provider value={{
    authStore: new AuthStore,
    accountStore: new AccountStore,
    moviesStore: new MoviesStore
  }}>
    <React.StrictMode>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
