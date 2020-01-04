import React, { Component, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';

import {SideBar, Body} from '../screens';

export const Home = props => {
    return (
      <div style={{flexDirection:"row" }}>
        <SideBar />
        <Body />
      </div>
    );
}


