import { Box, Card, useTheme, Typography } from "@mui/material";
import { FC } from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

const iconStyle = {
  fontSize: 55,
  color: "#fff",
  borderRadius: "50%",
  padding: "10px",
};

const data = [
  {
    id: 1,
    name: "Goals",
    leftIcon: (
      <GpsFixedIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "#3f51b5",
          [theme.breakpoints.down(425)]: {
            fontSize: 40,
            padding: "5px",
          },
        })}
      />
    ),
    rightIcon: (
      <ChevronRightIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "gray",
          padding: "3px",
          fontSize: 30,
          [theme.breakpoints.down(425)]: {
            fontSize: 20,
            padding: "2px",
          },
        })}
      />
    ),
  },
  {
    id: 2,
    name: "Popular Dishes",
    leftIcon: (
      <LunchDiningIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "#4caf50",
          [theme.breakpoints.down(425)]: {
            fontSize: 40,
            padding: "5px",
          },
        })}
      />
    ),
    rightIcon: (
      <ChevronRightIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "gray",
          padding: "3px",
          fontSize: 30,
          [theme.breakpoints.down(425)]: {
            fontSize: 20,
            padding: "2px",
          },
        })}
      />
    ),
  },
  {
    id: 3,
    name: "Menus",
    leftIcon: (
      <DinnerDiningIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "#9c27b0",
          [theme.breakpoints.down(425)]: {
            fontSize: 40,
            padding: "5px",
          },
        })}
      />
    ),
    rightIcon: (
      <ChevronRightIcon
        sx={(theme) => ({
          ...iconStyle,
          backgroundColor: "gray",
          padding: "3px",
          fontSize: 30,
          [theme.breakpoints.down(425)]: {
            fontSize: 20,
            padding: "2px",
          },
        })}
      />
    ),
  },
];

const IconWithText: FC<{ icon: JSX.Element; text: string }> = ({
  icon,
  text,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
      }}
    >
      {icon}
      <Typography
        ml="1rem"
        variant="body1"
        sx={{
          fontSize: "16px",
          [theme.breakpoints.down(425)]: {
            fontSize: "12px",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const Analytics: FC = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        padding: "2rem 2rem .5rem 2rem",
        backgroundColor: "#1E293B",
        border: 0,
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        [theme.breakpoints.down(425)]: { padding: "1.5rem" },
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            [theme.breakpoints.down(425)]: {
              flexDirection: "row",
              alignItems: "center",
            },
          }}
        >
          <IconWithText icon={item.leftIcon} text={item.name} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down(425)]: {
                justifyContent: "flex-end",
                width: "100%",
              },
            }}
          >
            {item.rightIcon}
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default Analytics;
