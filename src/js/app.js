import ReactDOM from 'react-dom';
import React from 'react';
import {
    Router,
    browserHistory
} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
import  {
    Layout
} from "./layout";

import routes from "./routes";

injectTapEventPlugin();
console.log(routes());

ReactDOM.render(
    routes(),
    document.getElementById("root")
);