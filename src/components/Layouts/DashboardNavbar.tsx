import {
  AppBar,
  Box,
  FormControl,
  TextField,
  styled,
  Toolbar,
  useMediaQuery,
  Theme,
  InputAdornment,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { H2 } from "../Typography";

interface DashboardNavBarProps {
  setShowMobileSideBar: () => void;
}

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 2,
  boxShadow: "none",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backdropFilter: "blur(6px)",
  backgroundColor: "#1E293B",
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  paddingLeft: "1rem",
  paddingRight: "1rem",

  [theme.breakpoints.up("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "14rem",
    paddingRight: "10rem",
  },
  "@media (max-width: 1480px)": {
   paddingLeft: "13rem",
  },
   "@media (max-width: 1420px)": {
   paddingLeft: "11rem",
  },
      "@media (max-width: 1360px)": {
   paddingLeft: "10rem",
  },
      "@media (max-width: 1320px)": {
   paddingLeft: "8rem",
  },
      "@media (max-width: 1280px)": {
   paddingLeft: "6.5rem",
  },
}));

const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: "5px",
  borderRadius: "19px",
  transition: "width 0.3s",
  backgroundColor: theme.palette.primary.main,
}));

const DashboardNavbar: FC<DashboardNavBarProps> = ({
  setShowMobileSideBar,
}) => {
  const isSmallScreen = useMediaQuery('(max-width: 959px)');

  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          {/* Hamburger menu for small screens */}
          {isSmallScreen && (
            <Box sx={{ cursor: "pointer", marginLeft:'-4.7rem' }} onClick={setShowMobileSideBar}>
              <ToggleIcon />
              <ToggleIcon />
              <ToggleIcon />
            </Box>
          )}

          {/* Search box */}
          {!isSmallScreen && (
            <Box display="flex" alignItems="center" flexGrow={1} ml={2}>
              <FormControl fullWidth>
                <TextField
                  placeholder="Search"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ marginRight: "1rem" }}>
                        <SearchIcon sx={{ color: "gray" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: 250,
                    borderRadius: "70px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray",
                      },
                      "&:hover fieldset": {
                        borderColor: "gray",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "gray",
                      },
                      "& input": {
                        color: "white",
                      },
                    },
                  }}
                />
              </FormControl>
            </Box>
          )}
        </Box>

        {/* Title and icons */}
        <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        ></H2>

        <Box flexGrow={1} ml={1} />

        {/* Icons */}
        <Box display="flex" alignItems="center">
          <ChatBubbleIcon sx={{ fontSize: "28px", marginRight: "1rem" }} />
          <SettingsIcon sx={{ fontSize: "28px", marginRight: "1rem" }} />
          <NotificationsNoneIcon
            sx={{ fontSize: "28px", marginRight: "1rem" }}
          />
        </Box>

        <Avatar
          alt="Profile Picture"
          src="https://xsgames.co/randomusers/assets/avatars/male/7.jpg"
          sx={{ width: 30, height: 30 }}
        />
      </StyledToolBar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
