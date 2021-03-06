import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from './screens';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './styles'
export default class App extends Component {

  render() {
    return (
        <BrowserRouter basename={"https://ganeshsinghpapola.github.io/react-test-task"}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
    );
  }
}
