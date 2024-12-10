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
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "#F5F5F5",
  padding: "1rem",
  borderRadius: "8px",
});

const FilterButton = styled(Button)({
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  color: "#333",
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
      {/* Search Bar */}
      <SearchContainer>
        <InputBase
          placeholder="Job Title, Company, or Keywords"
          value={filters.keyword}
          onChange={(e) => handleFilterChange("keyword", e.target.value)}
          style={{
            flex: 1,
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <Select
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          displayEmpty
          style={{ width: "200px", backgroundColor: "#fff" }}
        >
          <MenuItem value="">Select Location</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </Select>
        <Select
          value={filters.jobType}
          onChange={(e) => handleFilterChange("jobType", e.target.value)}
          displayEmpty
          style={{ width: "200px", backgroundColor: "#fff" }}
        >
          <MenuItem value="">Job Type</MenuItem>
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </SearchContainer>

      {/* Similar Filters */}
      <Box display="flex" gap="1rem" marginTop="1rem">
        <Typography>Similar:</Typography>
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
