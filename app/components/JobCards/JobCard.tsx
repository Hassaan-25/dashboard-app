import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { JobCardProps } from "@/app/Types/types";
import locationIcon from "../../../assets/location.svg";
import timeIcon from "../../../assets/time.svg";
import Grid from "@mui/material/Grid";

export default function JobCard({
  title,
  company,
  posted,
  applicants,
  promoted,
  logo,
  site,
}: JobCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        backgroundColor: "#fff",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        {promoted && (
          <Typography
            variant="body2"
            color="#333333"
            className="font-neue-bold"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            Promoted
          </Typography>
        )}

        <Grid container spacing={2} py={1}>
          <Grid item xs={4} p={1}>
            <Box
              p={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"#F5F6FA"}
              borderRadius={"8px"}
            >
              <Image src={logo} alt="logo" width={30} height={30} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography
              fontSize={"16px"}
              sx={{ fontWeight: "bold" }}
              className="font-neue"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="#585D6E"
              fontWeight={"600"}
              sx={{ marginBottom: "0.5rem", letterSpacing: "0.5px" }}
            >
              {company}
            </Typography>
          </Grid>
        </Grid>

        <Box
          display="flex"
          alignItems="center"
          gap="0.5rem"
          sx={{ marginBottom: "0.5rem" }}
        >
          <Image
            src={locationIcon}
            alt="location icon"
            width={12}
            height={12}
          />
          <Typography variant="body2" color="#585D6E">
            {site}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="0.5rem">
          <Image src={timeIcon} alt="time icon" width={12} height={12} />
          <Typography variant="body2" color="#585D6E">
            {posted} | {applicants} applicants
          </Typography>
        </Box>
        <Box mt={2} display={"flex"} justifyContent={"space-between"}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              borderRadius: "8px",
              backgroundColor: "#0154AA",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Apply Now
          </Button>
          <IconButton
            sx={{
              color: "#AAAAAA",
              fontSize: 100,
            }}
          >
            <BookmarkBorderIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
