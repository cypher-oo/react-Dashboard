import App from "./App";
import "nprogress/nprogress.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "react-image-lightbox/style.css";
import { BrowserRouter } from "react-router-dom";
import "simplebar-react/dist/simplebar.min.css";  

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
