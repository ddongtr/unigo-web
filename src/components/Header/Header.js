import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Login from "./Login";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#015494", padding: 10 }}
    >
      <div className="wrapper">
        <ToolBar>
          <div className="header_logo">
            <div className="header_title">UniGo</div>
          </div>
          <Login />
        </ToolBar>
      </div>
    </AppBar>
  );
};

export default Header;
