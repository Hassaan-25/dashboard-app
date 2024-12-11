"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import searchIcon from "../../../assets/search-white.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "#FFFFFF",
  padding: "1rem",
  borderRadius: "8px",
  marginTop: "1rem",
});

const FilterButton = styled(Button)({
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  color: "#737A91",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#E5E5E5",
  },
});

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
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: "",
    category: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Box>
      <SearchContainer>
        <InputBase
          placeholder="Job Title, Company, or Keywords"
          value={filters.keyword}
          onChange={(e) => handleFilterChange("keyword", e.target.value)}
          sx={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            boxShadow: "none",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            "&::placeholder": {
              color: "#000",
            },
          }}
        />
        <Select
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          displayEmpty
          sx={{
            width: "200px",
            backgroundColor: "#fff",
            border: "none",
            outline: "none",
            boxShadow: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="">Select Location</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </Select>
        <Select
          value={filters.jobType}
          onChange={(e) => handleFilterChange("jobType", e.target.value)}
          displayEmpty
          sx={{
            width: "200px",
            backgroundColor: "#fff",
            border: "none",
            outline: "none",
            boxShadow: "none",
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
          startIcon={
            <Image src={searchIcon} alt="Search" width={12} height={12} />
          }
          onClick={handleSearch}
          variant="contained"
          sx={{
            background: "#0154AA",
            color: "#FFFFFF",
            fontWeight: "bold",
            ml: 3,
            p: 1.5,
            borderRadius: "12px",
            minWidth: "160px",
          }}
        >
          Search
        </Button>
      </SearchContainer>

      {/* Similar Filters */}
      <Box display="flex" gap="1rem" marginTop="1rem">
        <Typography alignSelf={"center"} color="#737A91">
          Similar:
        </Typography>
        <FilterButton
          onClick={() => handleFilterChange("category", "Frontend")}
        >
          Frontend
        </FilterButton>
        <FilterButton onClick={() => handleFilterChange("category", "Backend")}>
          Backend
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange("category", "Graphic Designer")}
        >
          Graphic Designer
        </FilterButton>
      </Box>
    </Box>
  );
}
