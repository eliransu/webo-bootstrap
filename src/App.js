import React from 'react';
import { Route } from "react-router";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ConfigProvider } from 'antd';
import Main from './containers/Main/Main';
import { AppWrapper } from './App.styled';
import createStore from './data/store';

const routes = [
  { path: "/", component: Main, isExact: true },
  // { path: "/template", component: <div>template</div>, isExact: true }
];

function App() {
  return (
    <Provider store={createStore()}>
      <ConfigProvider direction="rtl">
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
      </ConfigProvider>
    </Provider>
  );
}

export default App;
