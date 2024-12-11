"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
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
        <Box display="flex" alignItems="center">
          <Typography variant="h6" noWrap component="div" sx={{ mr: 3 }}>
            <Image src={Logo} alt="Logo" width={48} height={48} />
          </Typography>
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

        {/* Right Side */}
        <Box display="flex" alignItems="center">
          <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
              <Image src={searchIcon} alt="Search" width={24} height={24} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="contained"
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
          <IconButton sx={{ ml: 3 }}>
            <Image
              src={avatar}
              alt="Profile"
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
