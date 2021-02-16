import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./app/components/DashBoard";
import AllUsers from "./features/user/AllUsers";
import AddEditUser from "./features/user/AddEditUser";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/Users" component={AllUsers} />
          <Route exact path="/Add" component={AddEditUser} />
          <Route exact path="/Edit/:id" component={AddEditUser} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
