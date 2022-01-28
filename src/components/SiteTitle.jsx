import React from "react";
import Rainbow from "../HOCs/Rainbow";
const SiteTitle = (props) => <h1 style={{padding:'0 5px'}}>React Router 6 (+react query){props.test}</h1>;

export default Rainbow(SiteTitle);
