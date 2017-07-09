import ReactDOM from 'react-dom';
import React from 'react';
import {
    Router,
    browserHistory
} from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import client from "./client";


import Main from "./Main";

import routes from "./routes";

ReactDOM.render(
    <ApolloProvider client={client}>
        <Main />
    </ApolloProvider>,
    document.getElementById("root")
);