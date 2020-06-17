import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader";

// import ResponseCheck from "./ResponseCheck";
import ResponseCheck from "./ResponseCheckHooks";

const Hot = hot(ResponseCheck);

ReactDom.render(<Hot />, document.querySelector("#root"));
