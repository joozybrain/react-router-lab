import React from "react";
import { Redirect} from "react-router-dom"

const TacoDetails = props => {
    if (props.match.params.id === "42") {
        return <Redirect to="/specialtaco"/>
    }
  else {

      return <h1>this is the detailed page for taco number {props.match.params.id}</h1>
  }
  
};

export default TacoDetails;
