import { Box, Grid, Typography, TextField, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

      {/* Main Content */}
      <Grid item xs={9}>
        <Box p={4}>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Find your Dream Job, Albert!</Typography>
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </Box>

          {/* Job Filters */}
          <Box my={2}>
            <Chip label="Frontend" color="primary" clickable />
            <Chip label="Backend" clickable sx={{ mx: 1 }} />
            <Chip label="Graphic Designer" clickable />
          </Box>

          {/* Featured Jobs */}
          <Typography variant="h6" mb={2}>
            Featured Jobs
          </Typography>
          {/* <Grid container spacing={2}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <JobCard />
              </Grid>
            ))}
          </Grid> */}

          {/* Recommended Jobs */}
          <Typography variant="h6" mt={4} mb={2}>
            Recommended Jobs
          </Typography>

          <JobBoard />
        </Box>
      </Grid>
    </Grid>
  );
}
