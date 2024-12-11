"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Logo from "../../../assets/logo.svg";
import avatar from "../../../assets/avatar.svg";
import searchIcon from "../../../assets/searchIcon.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  background: "#F6F9FF",
  borderRadius: "8px",
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
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Find Jobs");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const items = [
    { label: "Find Jobs" },
    { label: "Top Companies" },
    { label: "Job Tracker" },
    { label: "My Calendar" },
    { label: "Documents" },
    { label: "Messages" },
    { label: "Notifications" },
  ];

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#737A91",
          letterSpacing: "0.5px",
          padding: "20px",
        }}
      >
        {/* Logo and Menu */}
        <Box display="flex" alignItems="center">
          <Typography variant="h6" noWrap component="div" sx={{ mr: 3 }}>
            <Image src={Logo} alt="Logo" width={48} height={48} />
          </Typography>
          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {items.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                component="div"
                className={
                  selectedItem === item.label
                    ? "font-neue-bold"
                    : "font-neue-medium"
                }
                onClick={() => handleItemClick(item.label)}
                sx={{
                  color: selectedItem === item.label ? "#0154AA" : "#737A91",
                  fontWeight: "bold",
                  letterSpacing: "0.4px",
                  cursor: "pointer",
                  mr: 3,
                  transition: "color 0.3s ease, text-decoration 0.3s ease",
                  "&:hover": {
                    color: "#0154AA",
                    textDecoration: "underline",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Right Side */}
        <Box display="flex" alignItems="center">
          {/* Search Bar */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Search>
              <SearchIconWrapper>
                <Image src={searchIcon} alt="Search Icon" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Button
            variant="contained"
            className="hide-on-mobile"
            sx={{
              background: "#0154AA",
              color: "#FFF",
              fontWeight: "bold",
              ml: 3,
              px: 4,
              py: 1.5,
              borderRadius: "8px",
            }}
          >
            Resume Builder
          </Button>

          {/* Avatar */}
          <Box ml={2} display="flex" alignItems="center">
            <Image src={avatar} alt="Avatar" width={40} height={40} />
          </Box>
          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, ml: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
            <List>
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  component="button" // Use the 'component' prop to render it as a button
                  onClick={() => {
                    handleItemClick(item.label);
                    toggleDrawer();
                  }}
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 16px",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f4f4f4" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
