import React from "react";
import PersonsList from "../../containers/persons-list";
import { CardHeader } from "reactstrap";
import "../../assets/styles/master.scss";

const App = () => (
  <div className="container-fluid ">
    <CardHeader className="header">
      <div className="container">
        <span className="header__logo">
          <img src="/img/logo.svg" alt="pipedrive" />
        </span>
      </div>
    </CardHeader>
    <PersonsList />
  </div>
);

export default App;
