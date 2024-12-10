import {
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Box p={3} bgcolor="#f5f5f5" height="100vh">
      <Box textAlign="center">
        <Avatar
          src="/avatar.jpg"
          alt="Profile Picture"
          sx={{ width: 80, height: 80, margin: "0 auto" }}
        />
        <Typography variant="h6" mt={2}>
          Albert Flores
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Senior Product Designer | UI/UX Designer
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="body1">Profile Visitors</Typography>
        <Typography variant="h6">140</Typography>

        <Typography variant="body1" mt={2}>
          Resume Viewers
        </Typography>
        <Typography variant="h6">20</Typography>

        <Typography variant="body1" mt={2}>
          My Jobs
        </Typography>
        <Typography variant="h6">88</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <List>
        <ListItem component="button">
          <ListItemText primary="Upcoming Interviews" />
        </ListItem>
      </List>
    </Box>
  );
}
