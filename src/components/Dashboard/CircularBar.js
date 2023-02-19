import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = () => {
  return (
    <div style={{ width: 200, height: 200 }} className="mx-auto">
      <ProgressProvider valueStart={0} valueEnd={80}>
        {(value) => <CircularProgressbar value={value} text={"80%"} />}
      </ProgressProvider>
    </div>
  );
};

export default CircularBar;
