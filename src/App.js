import React from 'react';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Main from './containers/Main/Main';
import { AppWrapper } from './App.styled';

const routes = [
  { path: "/", component: Main, isExact: true },
  // { path: "/template", component: <div>template</div>, isExact: true }
];

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        {routes.map(route => (
          <Route
            exact={route.isExact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))
        }
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
