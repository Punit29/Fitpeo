import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import WidgetsIcon from "@mui/icons-material/Widgets";

import SearchAppBar from "../base/Search";

function Header(props) {
  const { onDrawerToggle } = props;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
  }, []);

  return (
    <AppBar
      sx={{
        bgcolor: "#eaeff1",
        color: "inherit",
        transition: "all 0.2s ease-out",
      }}
      position="sticky"
      elevation={scrolled === true ? 4 : 0}
    >
      <Toolbar>
        <Grid container spacing={{ lg: 2, xs: 0.5 }} alignItems="center">
          <Grid item sx={{ display: { sm: "none", xs: "block" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography color="inherit" variant="h5" component="h1">
              Hello Shahrukh 👋,
            </Typography>
          </Grid>

          {/* search section */}
          <Grid item>
            <SearchAppBar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
