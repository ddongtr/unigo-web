import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import HeaderAfterLogged from "./components/Header/HeaderAfterLoged";
import routes from "./routes/Routes";
import { Switch, Route, Router } from "react-router-dom";
import history from "./commons/history";
import Home from "./pages/Home";

import Paper from "@material-ui/core/Paper";
import "./utils/style.css";

const App = () => {
  var _session = localStorage.getItem("@SESSION");
  var [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    _session !== null ? setIsLogged(true) : setIsLogged(false);
  }, [_session]);

  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0 && isLogged) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    } else {
      return (result = <Route key={0} path="/" exact component={Home} />);
    }
    return <Switch> {result} </Switch>;
  };

  return (
    <Router history={history}>
      {isLogged ? <HeaderAfterLogged /> : <Header />}
      <div className="main-container">
        <Paper>{showContentMenus(routes)}</Paper>
      </div>
    </Router>
  );
};

export default App;
