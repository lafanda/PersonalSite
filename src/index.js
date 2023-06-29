import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app"
import { UserContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </BrowserRouter>
);
