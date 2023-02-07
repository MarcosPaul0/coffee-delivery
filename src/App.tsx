import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./themes/defaultTheme";
import { CartContextProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
          <GlobalStyles />
          <ToastContainer />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
