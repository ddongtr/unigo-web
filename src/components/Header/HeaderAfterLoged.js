import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#015494", padding: 10 }}
    >
      <ToolBar>
        <div className="header_logo">
          <div className="header_title">UniGo</div>
        </div>
        <Button size="large" color="inherit" component={Link} to="/">
          <div style={{ color: "#FFF" }}>Thông Báo</div>
        </Button>
        <Button size="large" color="inherit" component={Link} to="/schedule">
          <div style={{ color: "#FFF" }}>Xem Lịch Học</div>
        </Button>
        <Button
          size="large"
          color="inherit"
          component={Link}
          to="/exam-schedule"
        >
          <div style={{ color: "#FFF" }}>Xem Lịch Thi</div>
        </Button>
        <div style={{ color: "#FFF", fontSize: 25, marginBottom: 10 }}>|</div>
        <UserMenu />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
