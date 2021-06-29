import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainPage } from "./pages/MainPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from '../src/components/LayoutElements/Header.js'
import { Footer } from '../src/components/LayoutElements/Footer.js'
import '../src/styles/app.scss'



function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <div className="container_app">
              <div className="client">
                <Helmet>
                  <title>GAMER</title>
                </Helmet>
                <Header></Header>
                <MainPage />
                <Footer></Footer>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
