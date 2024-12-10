import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { JobCardProps } from "@/app/Types/types";

export default function JobCard({
  title,
  company,
  location,
  posted,
  applicants,
}: JobCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {company}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {posted} | {applicants} applicants
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
