import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from './components/context/AuthContext.tsx'
import axios from 'axios';

axios.defaults.url='http://http://localhost:5173/api/v1';
axios.defaults.withCredentials=true;
const theme = createTheme({
  typography: { fontFamily: "Roboto, serif", allVariants: { color: "white" } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
