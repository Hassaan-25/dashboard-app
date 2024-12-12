"use client";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobSearchFilter from "../SearchBar/SearchBar";
import JobCard from "../JobCards/JobCard";
import SimilarFeatures from "../SimilarFeatures/SimilarFeatures";
import { Filters } from "@/app/Types/types";
import { jobCards, recommendedJobs } from "./StaticData";

export default function JobBoard() {
  const [filteredJobs, setFilteredJobs] = useState([
    ...jobCards,
    ...recommendedJobs,
  ]);

  const handleSearch = (filters: Filters) => {
    const allJobs = [...jobCards, ...recommendedJobs];
    const filtered = allJobs.filter((job) => {
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

  const handleFilterChange = (filters: Record<string, string | null>) => {
    const newFilters: Filters = {
      keyword: "",
      location: "",
      jobType: filters.jobType || undefined,
      category: filters.category || undefined,
    };
    handleSearch(newFilters);
  };
  return (
    <div>
      <JobSearchFilter onSearch={handleSearch} />
      <SimilarFeatures onFilterChange={handleFilterChange} />

      <Box display="flex" alignItems="center" mt={3} mb={2}>
        <Typography
          color="#333333"
          variant="h6"
          fontWeight={"600"}
          letterSpacing={"0.5px"}
          fontSize={[16, 18]}
        >
          Featured Jobs
        </Typography>

        <Typography
          color="#0154AA"
          variant="h6"
          ml={2}
          className="font-neue"
          letterSpacing={"0.5px"}
          fontSize={[16, 18]}
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          See Featured Jobs
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {filteredJobs
          .filter((job) => !recommendedJobs.some((rJob) => rJob.id === job.id))
          .map((job) => (
            <Grid item xs={12} sm={6} md={3} key={job.id}>
              <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                posted={job.posted}
                applicants={job.applicants}
                logo={job.logo}
                promoted={job.promoted}
                site={job.site}
              />
            </Grid>
          ))}
      </Grid>

      {/* Recommended Jobs  */}

      <Box display="flex" alignItems="center" mt={3} mb={2}>
        <Typography
          color="#333333"
          variant="h6"
          fontWeight={"600"}
          letterSpacing={"0.5px"}
          fontSize={[16, 18]}
        >
          Recommended Jobs
        </Typography>

        <Typography
          color="#0154AA"
          variant="h6"
          ml={2}
          className="font-neue"
          letterSpacing={"0.5px"}
          fontSize={[16, 18]}
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          See Recommended Jobs
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {filteredJobs
          .filter((job) => recommendedJobs.some((rJob) => rJob.id === job.id))
          .map((job) => (
            <Grid item xs={12} sm={6} md={3} key={job.id}>
              <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                posted={job.posted}
                applicants={job.applicants}
                logo={job.logo}
                promoted={job.promoted}
                site={job.site}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
