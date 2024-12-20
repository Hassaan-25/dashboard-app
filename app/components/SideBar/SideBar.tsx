"use client";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Popover,
} from "@mui/material";
import dropIcon from "../../../assets/drop.svg";
import { useState } from "react";
import Image from "next/image";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import avatar from "../../../assets/Oval.png";
import background from "../../../assets/background.png";

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <>
      <Box
        textAlign="center"
        bgcolor="#FFFFFF"
        borderRadius={"8px"}
        paddingBottom={"16px"}
      >
        <Box
          bgcolor={"#F4F4F4"}
          height={100}
          position="relative"
          overflow="hidden"
          sx={{
            borderRadius: "8px 8px 0px 0px",
          }}
        >
          <Image
            src={background}
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </Box>

        <Avatar
          src={avatar.src}
          alt="Profile Picture"
          sx={{
            width: 80,
            height: 80,
            margin: "-40px auto 10px",
            border: "3px solid white",
          }}
        />
        <Typography
          variant="h6"
          color="#333333"
          className="font-neue-bold"
          mt={2}
        >
          Albert Flores
        </Typography>
        <Typography
          variant="body2"
          color="#333333"
          fontSize={"16px"}
          className="font-neue"
          padding={"0 16px"}
        >
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </Typography>
        <Typography mt={1} color="#585D6E" fontSize={"14px"}>
          Clinton, Maryland
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Box mt={3} bgcolor="#FFFFFF" p={2} borderRadius={"8px"}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color="#333333"
            fontSize="14px"
            fontWeight="600"
            className="font-neue"
            letterSpacing={"0.5px"}
          >
            Profile Visitors
          </Typography>
          <Typography color="#0154AA" fontWeight="600" fontSize="14px">
            140
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color="#333333"
            fontSize="14px"
            fontWeight="600"
            className="font-neue"
          >
            Resume Viewers
          </Typography>
          <Typography color="#0154AA" fontWeight="600" fontSize="14px">
            20
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color="#333333"
            fontSize="14px"
            fontWeight="600"
            className="font-neue"
          >
            My Jobs
          </Typography>
          <Typography color="#0154AA" fontWeight="600" fontSize="14px">
            88
          </Typography>
        </Box>
      </Box>

      <Box mt={3} bgcolor="#FFFFFF" p={2} borderRadius={"8px"}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              color="#333333"
              fontSize="14px"
              fontWeight="600"
              className="font-neue"
            >
              My Calendar
            </Typography>

            <Typography color="#737A91" fontSize="14px" fontWeight="600" mt={1}>
              Upcoming Interviews
            </Typography>
          </Box>

          <IconButton onClick={handleOpen}>
            <Image src={dropIcon} alt="Drop Icon" width={12} height={12} />
          </IconButton>
        </Box>

        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box p={2}>
              <DateCalendar />
            </Box>
          </LocalizationProvider>
        </Popover>
      </Box>
    </>
  );
}
