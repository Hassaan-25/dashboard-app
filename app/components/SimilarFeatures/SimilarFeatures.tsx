"use client";

import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const FilterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ selected }) => ({
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  color: selected ? "#FFFFFF" : "#737A91",
  backgroundColor: selected ? "#0154AA" : "transparent",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: selected ? "#0154AA" : "#E5E5E5",
  },
}));

interface SimilarFeaturesProps {
  onFilterChange: (filters: Record<string, string | null>) => void;
}

const SimilarFeatures: React.FC<SimilarFeaturesProps> = ({
  onFilterChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile view

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | null>
  >({
    jobType: null,
    category: null,
  });

  const handleFilterClick = (key: string, value: string | null) => {
    const updatedFilters = {
      ...selectedFilters,
      [key]: selectedFilters[key] === value ? null : value,
    };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={isMobile ? "0.5rem" : "1rem"}
      marginTop="1rem"
      alignItems="center"
    >
      <Typography color="#737A91" alignSelf="center">
        Similar:
      </Typography>
      <Box display="flex" gap={isMobile ? "0.5rem" : "1rem"} flexWrap="wrap">
        <FilterButton
          size={isMobile ? "small" : "medium"}
          selected={selectedFilters.category === "Frontend"}
          onClick={() => handleFilterClick("category", "Frontend")}
        >
          Frontend
        </FilterButton>
        <FilterButton
          size={isMobile ? "small" : "medium"}
          selected={selectedFilters.category === "Backend"}
          onClick={() => handleFilterClick("category", "Backend")}
        >
          Backend
        </FilterButton>
        <FilterButton
          size={isMobile ? "small" : "medium"}
          selected={selectedFilters.category === "Graphic Designer"}
          onClick={() => handleFilterClick("category", "Graphic Designer")}
        >
          Graphic Designer
        </FilterButton>
      </Box>
    </Box>
  );
};

export default SimilarFeatures;
