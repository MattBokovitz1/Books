import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import NotFoundPage from "./components/NotFoundPage";
import BooksTables from "./components/BooksTables";
import "./App.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={BooksTables} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
