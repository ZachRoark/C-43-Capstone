import React from "react"
import { Route, Redirect } from "react-router-dom"

import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


import { ApplicationViews } from "./ApplicationViews"
import {Navbar} from "./nav/Navbar"
import Footer from "./Footer"


export const CraftIt= () => (

    <>
      <Route
        render={() => {
          if (localStorage.getItem("craftit_user")) {
            return (
              <>
                <Navbar />
                
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