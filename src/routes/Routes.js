import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ReposPage from "../components/ReposPage/ReposPage";
import DetailPage from "../components/DetailPage/DetailPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={ReposPage}/>
        <Route exact path={"/:owner/:repo"} component={DetailPage}/>
        <Route>
          <Redirect to={"/"}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
