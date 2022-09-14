import React, { useContext } from "react";
import "./BillTotal.css";
import { BillContext } from "./Context/BillContext";

function BillTotal() {
  const { bills, selectedInterval } = useContext(BillContext);
  const moneyIntervalTransform = (cost) => {
    const monthlyCost = Number.parseFloat(cost);
    switch (selectedInterval) {
      case "Monthly":
        return monthlyCost;
      case "Yearly":
        return monthlyCost * 12;
      case "Weekly":
        return (monthlyCost * 12) / 52;
      case "Daily":
        return monthlyCost / 365;

      default:
        return 0;
    }
  };
  return (
    <div className="container">
      <div className="billTotal">
        {selectedInterval} Bill cost :
        <span className="total__cost">
          {"$" +
            bills
              .reduce((acc, val) => {
                return val.enabled
                  ? moneyIntervalTransform(val.monthlyCost) + acc
                  : acc;
              }, 0)
              .toFixed(2)}
        </span>
      </div>
      <div className="billSaved">
        {selectedInterval} Bill Saved :
        <span className="total__cost">
          {"$" +
            bills
              .reduce((acc, val) => {
                return !val.enabled
                  ? moneyIntervalTransform(val.monthlyCost) + acc
                  : acc;
              }, 0)
              .toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default BillTotal;
