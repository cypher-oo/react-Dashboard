import { Box, Card, Button, Menu, MenuItem, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { FC, useState } from "react";
import Chart from "react-apexcharts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const data = {
  series: [
    {
      name: "Activity",
      data: [
        2200, 8000, 3600, 5000, 6000, 6000, 9000, 2600, 7500, 1000, 5500, 6500,
        12000, 15000, 13000, 9500, 4000, 2000, 3000, 6000, 5000, 7000, 8000,
        4000,
      ],
    },
  ],
  categories: [5, 9, 11, 13, 15, 16, 17, 18, 19, 21, 23, 25, 27],
};

const TotalSpent: FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: { show: false },
    },
    colors: ["#08c1ff"],
    fill: {
      colors: ["#08c1ff"],
    },
    dataLabels: { enabled: false },
    grid: {
      show: true,
      borderColor: theme.palette.divider,
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    states: {
      active: {
        filter: { type: "none" },
      },
      hover: {
        filter: { type: "none" },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      categories: data.categories,
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      min: 0,
      max: 15000,
      labels: {
        formatter: (value) => {
          if (value === 0) return "0";
          return `${value / 1000}k`;
        },
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "60%",
        rangeBarOverlap: false,
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
    responsive: [
      {
        breakpoint: 550,
        options: {
          chart: {
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            labels: { show: true },
          },
          yaxis: {
            show: true,
            labels: {
              style: {
                colors: theme.palette.text.disabled,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 500,
              },
            },
          },
        },
      },
    ],
  };

  const chartSeries = data.series;

  return (
    <Card
      sx={{
        paddingX: 4,
        height: "100%",
        paddingBottom: "1.5rem",
        paddingTop: "calc(1.5rem + 15px)",
        backgroundColor: "#1E293B",
        border: 0,
        [theme.breakpoints.down(425)]: { padding: "1.5rem" },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2 style={{ color: "white", flexGrow: 1 }}>Activity</h2>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            borderRadius: "8px",
            backgroundColor: "#0F172A",
            color: "white",
          }}
        >
          Weekly
          <ArrowDropDownIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Daily</MenuItem>
          <MenuItem onClick={handleClose}>Monthly</MenuItem>
        </Menu>
      </Box>

      <Box
        sx={{
          "& .apexcharts-tooltip *": {
            fontFamily: theme.typography.fontFamily,
            fontWeight: 500,
          },
          "& .apexcharts-tooltip": {
            boxShadow: 0,
            borderRadius: 4,
            alignItems: "center",
            "& .apexcharts-tooltip-text-y-value": { color: "primary.main" },
            "& .apexcharts-tooltip.apexcharts-theme-light": {
              border: `1px solid ${theme.palette.divider}`,
            },
            "& .apexcharts-tooltip-series-group:last-child": {
              paddingBottom: 0,
            },
          },
        }}
      >
        <Chart
          height={150}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </Box>
    </Card>
  );
};

export default TotalSpent;
