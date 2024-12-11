"use client";

import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobSearchFilter from "../SearchBar/SearchBar";
import JobCard from "../JobCards/JobCard";
import { Filters } from "@/app/Types/types";

const jobCards = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "USA",
    type: "Full-time",
    category: "Frontend",
    company: "TechCorp",
    applicants: 15,
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Part-time",
    category: "Backend",
    company: "DevWorks",
    applicants: 20,
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Graphic Designer",
    location: "USA",
    type: "Full-time",
    category: "Graphic Designer",
    company: "DesignPro",
    applicants: 25,
    posted: "1 day ago",
  },
  // Add more mock data as needed
];

export default function JobBoard() {
  const [filteredJobs, setFilteredJobs] = useState(jobCards);

  const handleSearch = (filters: Filters) => {
    const filtered = jobCards.filter((job) => {
      const matchesKeyword = filters.keyword
        ? job.title.toLowerCase().includes(filters.keyword.toLowerCase())
        : true;
      const matchesLocation = filters.location
        ? job.location === filters.location
        : true;
      const matchesType = filters.jobType ? job.type === filters.jobType : true;
      const matchesCategory = filters.category
        ? job.category === filters.category
        : true;

      return (
        matchesKeyword && matchesLocation && matchesType && matchesCategory
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div>
      <JobSearchFilter onSearch={handleSearch} />

      <Box display="flex" alignItems="center" mt={3} mb={2}>
        <Typography
          color="#333333"
          variant="h6"
          fontWeight={"600"}
          letterSpacing={"0.5px"}
        >
          Recommended Jobs
        </Typography>

        <Typography
          color="#0154AA"
          variant="h6"
          ml={2}
          className="font-neue"
          letterSpacing={"0.5px"}
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          See Featured Jobs
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <JobCard
              title={job.title}
              company={job.company}
              location={job.location}
              posted={job.posted}
              applicants={job.applicants}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}