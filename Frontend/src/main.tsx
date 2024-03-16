import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from './components/context/AuthContext.tsx'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

//axios.defaults.url='http://localhost:3000/api/v1/';
axios.defaults.withCredentials=true;

const theme = createTheme({
  typography: { fontFamily: "Roboto, serif", allVariants: { color: "white" } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right"/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
