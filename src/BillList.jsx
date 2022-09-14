import React, { useContext } from "react";
import "./BillList.css";
import { BillContext } from "./Context/BillContext";

function BillList() {
  const { bills, editBill, setEditModeEnabled} = useContext(BillContext);
  return (
    <div className="billList">
      <div className="editMode" onClick={() => setEditModeEnabled(true)}>Edit Bills</div>
      {bills.map((bill, index) => (
        <div className="billListRow" key={index}>
          <input
            type="checkbox"
            checked={bill.enabled}
            readOnly
            onChange={() =>
              editBill({
                title: bill.title,
                monthlyCost: bill.monthlyCost,
                enabled: !bill.enabled,
              })
            }
          />
          <div className="billListRow__content">
            {bill.title} 
            <div>- ${bill.monthlyCost}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BillList;
