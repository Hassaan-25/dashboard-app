"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/SideBar/SideBar";
import JobBoard from "../components/JobBoard/JobBoard";

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ flexDirection: "column" }}>
        <Box sx={{ p: 2 }}>
          <Sidebar />
        </Box>

        <Box sx={{ p: 2 }}>
          {/* Header */}
          <Box sx={{ mb: 2 }}>
            <Typography
              color="#333"
              variant="h5"
              letterSpacing={"0.5px"}
              className="font-neue-bold"
            >
              Find your Dream Job,
              <span
                style={{
                  color: "#0154AA",
                }}
              >
                {" "}
                Albert!
              </span>
            </Typography>

            <Typography
              color="#585D6E"
              variant="body1"
              letterSpacing={"0.5px"}
              fontWeight={"600"}
              sx={{ mt: 1 }}
            >
              Explore the latest job openings and apply for the best
              opportunities available today!
            </Typography>
          </Box>

          {/* Job Board */}
          <JobBoard />
        </Box>
      </Box>
    );
  }

  // Desktop Layout (Original Grid Layout)
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={3} p={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={9}>
        <Box p={4}>
          <Box>
            <Typography
              color="#333"
              variant="h5"
              letterSpacing={"0.5px"}
              className="font-neue-bold"
            >
              Find your Dream Job,
              <span
                style={{
                  color: "#0154AA",
                }}
              >
                {" "}
                Albert!
              </span>
            </Typography>

            <Typography
              color="#585D6E"
              variant="body1"
              letterSpacing={"0.5px"}
              fontWeight={"600"}
            >
              Explore the latest job openings and apply for the best
              opportunities available today!
            </Typography>
          </Box>

          <JobBoard />
        </Box>
      </Grid>
    </Grid>
  );
}
