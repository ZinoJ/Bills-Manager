import { useContext } from "react";
import AddBill from "./AddBill";
import "./App.css";
import BillList from "./BillList";
import BillTotal from "./BillTotal";
import { BillContext } from "./Context/BillContext";
import EditBills from "./EditBills";
import IntervalOptions from "./IntervalOptions";

function App() {
  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className="bills__container">
      <h3>SHEY YOU DE WHINE ME</h3>
      {editModeEnabled ? (
        <EditBills />
      ) : (
        <>
          <IntervalOptions />
          <AddBill />
          <BillTotal />
          <BillList />
        </>
      )}
    </div>
  );
}

export default App;
