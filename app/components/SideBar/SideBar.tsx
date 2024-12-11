import { Box, Avatar, Typography } from "@mui/material";
import avatar from "../../../assets/Oval.png";

export default function Sidebar() {
  return (
    <Box p={3} bgcolor="#F4F4F4" height="100vh">
      <Box
        textAlign="center"
        bgcolor={"#FFFFFF"}
        padding={"24px"}
        borderRadius={"8px"}
      >
        <Avatar
          src={avatar.src}
          alt="Profile Picture"
          sx={{ width: 80, height: 80, margin: "0 auto" }}
        />
        <Typography
          variant="h6"
          mt={2}
          color="#333333"
          className="font-neue-bold"
        >
          Albert Flores
        </Typography>
        <Typography
          variant="body2"
          color="#333333"
          fontSize={"16px"}
          fontWeight={"bold"}
        >
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </Typography>

        <Typography mt={2} color="#585D6E" fontSize={"14px"} fontWeight={"600"}>
          Clinton, Maryland{" "}
        </Typography>
      </Box>
    </Box>
  );
}
