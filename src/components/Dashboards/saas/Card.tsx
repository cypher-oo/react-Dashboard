import { alpha, Box, Card, styled } from "@mui/material";
import { FC } from "react";
import { H3, H6 } from "../../Typography";

interface SaaSCardProps {
  card: any;
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "1rem 1rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiBox-root": {
      marginRight: 0,
      textAlign: "center",
    },
  },
}));

const SaaSCard: FC<SaaSCardProps> = ({ card }) => {
  const {
    Icon,
    title,
    color,
    order,
    sell,
    sellIcon: SellIcon,
    sellColor,
  } = card;

  return (
    <StyledCard sx={{ backgroundColor: "#1E293B", color: "white", border: 0 }}>
      <Box
        sx={{
          width: 60,
          height: 60,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha(color, 0.2),
          marginBottom: ".6rem",
        }}
      >
        <Icon sx={{ color }} />
      </Box>
      <Box mt={{ xs: "1rem", sm: 0 }} sx={{ marginBottom: ".5rem" }}>
        <H6 color="text.disabled" sx={{ marginBottom: ".5rem" }}>
          {title}
        </H6>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <H3 >{order}</H3>
          {sell && (
            <Box
              sx={{ color: sellColor, display: "flex", alignItems: "center" }}
            >
              {sell}
              {SellIcon && (
                <SellIcon sx={{ color: sellColor }} />
              )}
            </Box>
          )}
        </Box>
      </Box>
    </StyledCard>
  );
};

export default SaaSCard;
