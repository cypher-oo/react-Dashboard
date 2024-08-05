import { FC } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 77;

const CircleProgress: FC = () => {
  return (
    <div
      style={{
        maxWidth: "120px",
        maxHeight: "120px",
        width: "90px",
        margin: "0 auto",
      }}
      className="my-3"
    >
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={8}
        background
        backgroundPadding={0}
        styles={buildStyles({
          backgroundColor: "transparent",
          textColor: "#fff",
          pathColor: "#0BAAE2",
          trailColor: "#d1d1d1",
          strokeLinecap: "butt",
        })}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
          {`${percentage}%`}
        </div>
        <div style={{ fontSize: "6px", color: "#fff", textAlign:"center" }}>
          <div> Goal</div>
          <div> Completed</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgress;
