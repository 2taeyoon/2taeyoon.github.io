import React from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/pretendard.css";
import "./styles/reset.css";
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <RouteApp />
  </Router>
);



// const rootElement = document.getElementById("root");

// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <RouteApp />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
