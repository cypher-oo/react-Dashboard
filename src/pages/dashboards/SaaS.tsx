import { Box, Grid, useTheme } from "@mui/material";
import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyledBlankSection from "../../components/Dashboards/saas/StyledBlankSection";
import TotalSpent from "../../components/Dashboards/saas/TotalSpent";
import SaaSCard from "../../components/Dashboards/saas/Card";
import Analytics from "../../components/Dashboards/saas/Analytics";
import RecentOrders from "../../components/Dashboards/saas/RecentOrders";
import TopSelling from "../../components/Dashboards/saas/TopSelling";

const SaaS: FC = () => {
  const theme = useTheme();

  const cardList = [
    {
      order: 250,
      Icon: ShoppingCartIcon,
      title: "Total Orders",
      color: theme.palette.primary.main,
      sell: "3%",
      sellIcon: ArrowDropUpIcon,
      sellColor: "green",
    },
    {
      order: 150,
      title: "Total Delivered",
      Icon: ShoppingBagIcon,
      color: theme.palette.primary.purple,
      sell: "3%",
      sellIcon: ArrowDropDownIcon,
      sellColor: "red",
    },
    {
      order: 100,
      Icon: CancelScheduleSendIcon,
      title: "Total Canceled",
      color: theme.palette.primary.red,
      sell: "3%",
      sellIcon: ArrowDropUpIcon,
      sellColor: "green",
    },
    {
      order: "$99k",
      Icon: PaidIcon,
      title: "Total Revenue",
      color: theme.palette.primary.yellow,
      sell: "3%",
      sellIcon: ArrowDropDownIcon,
      sellColor: "red",
    },
  ];

  return (
    <Box   pt={7} pb={4}>
      <h2 style={{ color: "white" }}>Dashboard</h2>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item lg={8} md={7} xs={12}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {cardList.map((card, index) => (
              <Grid item lg={3} xs={6} key={index}>
                <SaaSCard card={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <StyledBlankSection />
        </Grid>
      </Grid>

      <Grid container spacing={4} pt={4}>
        <Grid item lg={8} md={7} xs={12}>
          <TotalSpent />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <Analytics />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaaS;
