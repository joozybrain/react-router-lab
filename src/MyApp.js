import React from "react";
import NavLink from "./NavLink";
import { Route } from "react-router-dom";
import Homepage from "./HomePage";
import Tacos from "./Tacos";
import Twitter from "./Twitter";
import TacoDetails from "./TacoDetails";
import SpecialTaco from "./SpecialTaco";

const MyApp = () => {
  return (
    <div>
      <NavLink />
      <Route path="/" exact component={Homepage} />
      <Route path="/tacos" exact component={Tacos} />
      <Route path="/twitter" exact component={Twitter} />
      <Route path="/tacos/:id" render={props => <TacoDetails {...props} />} />
      <Route path="/specialtaco" exact component={SpecialTaco} />
    </div>
  );
};

export default MyApp;
