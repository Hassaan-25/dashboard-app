import { Box, Grid, Typography } from "@mui/material";
import Sidebar from "../components/SideBar/SideBar";
// import JobCard from "../components/JobCards/JobCard";
import JobBoard from "../components/JobBoard/JobBoard";

export default function Dashboard() {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={3}>
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
