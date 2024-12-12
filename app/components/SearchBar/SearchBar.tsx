"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
} from "@mui/material";
import searchIcon from "../../../assets/search-white.svg";
import FilterListIcon from "@mui/icons-material/FilterList";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "#FFFFFF",
  padding: "1rem",
  borderRadius: "8px",
  marginTop: "1rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0.5rem",
  },
}));

export default function JobSearchFilter({
  onSearch,
}: {
  onSearch: (filters: {
    keyword: string;
    location: string;
    jobType: string;
    category: string;
  }) => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: "",
    category: "",
  });
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    onSearch(filters);
    if (isMobile) {
      setIsFilterDrawerOpen(false);
    }
  };

  const renderSearchInputs = () => (
    <>
      <InputBase
        fullWidth
        placeholder="Job Title, Company, or Keywords"
        value={filters.keyword}
        onChange={(e) => handleFilterChange("keyword", e.target.value)}
        sx={{
          flex: 1,
          padding: "0.5rem",
          borderRadius: "8px",
          boxShadow: "none",
          outline: "none",
          backgroundColor: "transparent",
          marginBottom: isMobile ? "0.5rem" : 0,
          "&::placeholder": {
            color: "#000",
          },
        }}
      />
      <Select
        fullWidth={isMobile}
        value={filters.location}
        onChange={(e) => handleFilterChange("location", e.target.value)}
        displayEmpty
        sx={{
          width: isMobile ? "100%" : "200px",
          backgroundColor: "#fff",
          outline: "none",
          boxShadow: "none",
          marginBottom: isMobile ? "0.5rem" : 0,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="">Select Location</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Pakistan">Pakistan</MenuItem>
      </Select>
      <Select
        fullWidth={isMobile}
        value={filters.jobType}
        onChange={(e) => handleFilterChange("jobType", e.target.value)}
        displayEmpty
        sx={{
          width: isMobile ? "100%" : "200px",
          backgroundColor: "#fff",
          outline: "none",
          boxShadow: "none",
          marginBottom: isMobile ? "0.5rem" : 0,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="">Job Type</MenuItem>
        <MenuItem value="Full-time">Full-time</MenuItem>
        <MenuItem value="Part-time">Part-time</MenuItem>
      </Select>
      <Button
        fullWidth={isMobile}
        startIcon={
          <Image src={searchIcon} alt="Search" width={12} height={12} />
        }
        onClick={handleSearch}
        variant="contained"
        sx={{
          background: "#0154AA",
          color: "#FFFFFF",
          fontWeight: "bold",
          ml: isMobile ? 0 : 3,
          mt: isMobile ? 1 : 0,
          p: 1.5,
          borderRadius: "12px",
          minWidth: isMobile ? "100%" : "160px",

          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        Search
      </Button>
    </>
  );

  // Mobile view with filter drawer
  if (isMobile) {
    return (
      <Box>
        <Box display="flex" alignItems="center" gap={2}>
          <InputBase
            placeholder="Job Title, Company, or Keywords"
            value={filters.keyword}
            onChange={(e) => handleFilterChange("keyword", e.target.value)}
            sx={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "8px",
              backgroundColor: "transparent",
            }}
          />
          <IconButton
            onClick={() => setIsFilterDrawerOpen(true)}
            sx={{
              borderRadius: "8px",
              p: 1,
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor="bottom"
          open={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              padding: 2,
            },
          }}
        >
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            {renderSearchInputs()}
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Box>
      <SearchContainer>{renderSearchInputs()}</SearchContainer>
    </Box>
  );
}
