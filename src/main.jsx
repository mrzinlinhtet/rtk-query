import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { blogApi } from "./services/blogApi.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={blogApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
