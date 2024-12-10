"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#333",
        }}
      >
        {/* Left Side */}
        <Box display="flex" alignItems="center">
          <Typography variant="h6" noWrap component="div" sx={{ mr: 3 }}>
            <img
              src="/logo-placeholder.png"
              alt="Logo"
              style={{ height: "32px", width: "auto" }}
            />
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Find Jobs
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Top Companies
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Job Tracker
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            My Calendar
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Documents
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Messages
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              mr: 3,
            }}
          >
            Notifications
          </Typography>
        </Box>

        {/* Right Side */}
        <Box display="flex" alignItems="center">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="contained"
            sx={{
              background: "#1E85FF",
              color: "#FFF",
              fontWeight: "bold",
              ml: 3,
              px: 4,
            }}
          >
            Resume Builder
          </Button>
          <IconButton sx={{ ml: 3 }}>
            <img
              src="/profile-placeholder.png"
              alt="Profile"
              style={{ height: "32px", width: "32px", borderRadius: "50%" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
