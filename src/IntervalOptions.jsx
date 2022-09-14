import React, { useContext } from "react";
import { BillContext } from "./Context/BillContext";
import "./IntervalOptions.css";

function IntervalOptions() {
  const { setSelectedInterval, selectedInterval } = useContext(BillContext);

  return (
    <div className="intervalOptions">
      <div
        onClick={(e) => setSelectedInterval(e.target.innerText)}
        className={
          selectedInterval === "Daily" ? "selectedInterval" : "interval"
        }
      >
        Daily
      </div>
      <div
        onClick={(e) => setSelectedInterval(e.target.innerText)}
        className={
          selectedInterval === "Monthly" ? "selectedInterval" : "interval"
        }
      >
        Monthly
      </div>
      <div
        onClick={(e) => setSelectedInterval(e.target.innerText)}
        className={
          selectedInterval === "Yearly" ? "selectedInterval" : "interval"
        }
      >
        Yearly
      </div>
    </div>
  );
}

export default IntervalOptions;
