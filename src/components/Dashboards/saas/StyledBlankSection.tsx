import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, styled } from "@mui/material";
import { FC } from "react";
import CircleProgress from "./CircleProgress";

const BlankSection = styled(Box)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  height: "100%",
  backgroundColor: "#1E293B",
  color: "white",
  border: 0,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },
}));

const LeftColumn = styled(Box)({
  flex: "1",
  display: "flex",
  flexDirection: "column",
});

const RightColumn = styled(Box)({
  flex: "1",
  display: "flex",
  flexDirection: "column",
});

const TopRow = styled(Box)({
  flex: "4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BottomRow = styled(Box)({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "6px",
});

const Row = styled(Box)({
  flex: "1",
  display: "flex",
  alignItems: "center",
  color: "white",
  textAlign: "left",
});

const StyledBlankSection: FC = () => {
  return (
    <BlankSection>
      <LeftColumn>
        <Row>Net Profit</Row>
        <Row>
          <h1>$6000.25</h1>
        </Row>
        <Row sx={{ color: "green" }}>
          <ArrowDropUpIcon />
          3%
        </Row>
      </LeftColumn>
      <RightColumn>
        <TopRow>
          <CircleProgress />
        </TopRow>
        <BottomRow>*The values here have been rounded off.</BottomRow>
      </RightColumn>
    </BlankSection>
  );
};

export default StyledBlankSection;
