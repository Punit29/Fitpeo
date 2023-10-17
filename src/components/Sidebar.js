import "./styles.css";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = (props) => {
  const { ...other } = props;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <Box
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" p={1} gutterBottom>
          <TokenOutlinedIcon /> Dashboard
        </Typography>
        <List style={{ width: "80%" }}>
          <ListItemButton
            selected
            onClick={handleClick}
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <ViewInArIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
            <KeyboardArrowRightIcon />
          </ListItemButton>
          <ListItemButton
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <AccountBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            <KeyboardArrowRightIcon />
          </ListItemButton>
          <ListItemButton
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Income" />
            <KeyboardArrowRightIcon />
          </ListItemButton>
          <ListItemButton
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <PercentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Promote" />
            <KeyboardArrowRightIcon />
          </ListItemButton>
          <ListItemButton
            sx={{ color: "#fff", borderRadius: "8px", marginBottom: "8px" }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <LiveHelpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
            <KeyboardArrowRightIcon />
          </ListItemButton>
        </List>
      </Box>
      <ListItemButton
      selected
        sx={{ color: "#fff", borderRadius: "4px", margin: "8px", paddingTop: "0px", paddingBottom: '0px' }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          <AccountCircleIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Evano"
          secondary={<div style={{ color: "#fff" }}>Project Manager</div>}
        />
        <KeyboardArrowDownIcon />
      </ListItemButton>
    </Drawer>
  );
};

export default Sidebar;
