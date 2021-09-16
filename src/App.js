import React, { Fragment } from "react";
import "./App.css";
import "./script";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NikeProducts from "./pages/pagesproducts/nikeproducts";
import AdidasProducts from "./pages/pagesproducts/adidasproducts";
import JordanProducts from "./pages/pagesproducts/jordanproducts";
import YeezyProducts from "./pages/pagesproducts/yeezyproducts";
import Stock from "./pages/pagesproducts/stock";
import MonPanier from "./pages/panier";
import FicheProduit from "./pages/ficheproduit";
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";
import Backoffice from "./pages/backoffice";
import Editproduct from "./components/Admin/editproduct";
import MonCompte from "./pages/profil";
import Faq from "./components/Footer/faq";
import Sav from "./components/Footer/sav";
import Recrutement from "./components/Footer/recrutement";
import Confidentialite from "./components/Footer/confidentialite";
import Cgv from "./components/Footer/cgv";
import Cgu from "./components/Footer/cgu";
import Footer from "./components/Footer";
import Header from "./components/Header/navbar";
import Edituser from "./components/Admin/editusers";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/nike" component={NikeProducts} />
          <Route exact path="/adidas" component={AdidasProducts} />
          <Route exact path="/jordan" component={JordanProducts} />
          <Route exact path="/yeezy" component={YeezyProducts} />
          <Route exact path="/stock" component={Stock} />
          <Route exact path="/product/:id" component={FicheProduit} />
          <Route exact path="/panier" component={MonPanier} />
          <Route exact path="/edit/:id" component={Editproduct} />
          <Route exact path="/connexion" component={Connexion} />
          <Route exact path="/inscription" component={Inscription} />
          <Route exact path="/profil" component={MonCompte} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/sav" component={Sav} />
          <Route exact path="/recrutement" component={Recrutement} />
          <Route exact path="/confidentialite" component={Confidentialite} />
          <Route exact path="/cgv" component={Cgv} />
          <Route exact path="/cgu" component={Cgu} />
          <Route exact path="/edit/user/:id" component={Edituser} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
