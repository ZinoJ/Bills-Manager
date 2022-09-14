import { useContext, useState } from "react";
import "./AddBill.css";
import { BillContext } from "./Context/BillContext";

function AddBill() {
  const [billTitle, setBillTitle] = useState("");
  const [billCost, setBillCost] = useState("");

  const billValidation = () => {
    const costValid = billCost && Number.parseFloat(billCost);
    const titleValid =
      billTitle && billTitle.split("").find((char) => char !== " ");
    return titleValid && costValid;
  };

  const clearFields = () => {
    setBillCost("");
    setBillTitle("");
  };

  const {updateBills} = useContext(BillContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(billValidation()){
      updateBills({
        title: billTitle,
        monthlyCost: billCost,
        enabled: true
      })
      clearFields()
    }
  };

  return (
    <div className="addBill">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your bill"
          value={billTitle}
          onChange={(e) => setBillTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter bill monthly cost"
          value={billCost}
          onChange={(e) => setBillCost(e.target.value)}
        />
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
}

export default AddBill;
