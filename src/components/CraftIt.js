import React from "react"
import { Route, Redirect } from "react-router-dom"

import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
// import "./CraftIt.css"

import { ApplicationViews } from "./ApplicationViews"
import Header from "./Header"
import Footer from "./Footer"


export const CraftIt= () => (

    <>
      <Route
        render={() => {
          if (localStorage.getItem("craftit_user")) {
            // console.log((localStorage.getItem("craftit_user")))
            return (
              <>
                <Header />
                <h2>craftit.js</h2>
                <ApplicationViews />
                
                <Footer />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </>
  );