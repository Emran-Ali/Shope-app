import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../component/SearchBar";
import SideDrawer from "../component/SideDrawer";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import DataFetchContext from "../context/DataFetchContext";

export default function MenuAppBar() {
  const { auth, handleLogout } = React.useContext(AuthContext);
  const { handleSearch } = React.useContext(DataFetchContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [searce, setSearce] = React.useState("");

  const { cartItems } = React.useContext(CartContext);

  const addNumber = cartItems ? cartItems.length : 0;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = <SideDrawer />;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearce(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Shop App
            </Link>
          </Typography>

          <SearchBar />

          {/* <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Product"
              inputProps={{ "aria-label": "search " }}
              name="search"
            />
            <IconButton
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("searce");
              }}
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper> */}

          {auth && (
            <div>
              <Button onClick={toggleDrawer(true)}>
                <Badge badgeContent={addNumber} color="error" sx={{ mx: 2 }}>
                  <AddShoppingCartIcon color="action" />
                </Badge>
              </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                <MenuItem onClick={toggleDrawer(true)}>View Card</MenuItem>
              </Menu>
            </div>
          )}
          {!auth && (
            <div>
              <Link to={"/login"}>
                <IconButton
                  size="large"
                  aria-label="Log In"
                  aria-haspopup="true"
                  sx={{ color: "#ffffff", ":hover": { bgcolor: "#D6589F" } }}
                >
                  <LoginIcon />
                </IconButton>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
