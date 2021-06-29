import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainPage } from "./pages/MainPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';



function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="container_app">
          <Switch>
            <Route path={'/'} exact>
              <Helmet>
                <title>GAMER</title>
              </Helmet>
              <MainPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
