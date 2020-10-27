import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./CraftIt.css"
import Header from "./Header"
import Footer from "./Footer"


export const CraftIt= () => (

    <>
      <Route
        render={() => {
          if (localStorage.getItem("craftit_user")) {
            return (
              <>
                <Header />

                <h2>Craft Tracker Logo Stuff</h2>

                <div>SubTitle stuff, something dumb/corny probs</div>
                <div>This'll be the homepage for each user, showing current and past projects</div>
                
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