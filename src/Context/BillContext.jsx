import { useState, useEffect, createContext } from "react";

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("Monthly");
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("zinoBills")) || []);
  }, [setBills]);

  // useEffect(() => {
  //   console.log(bills);
  // }, [bills]);

  const updateBills = (bill) => {
    const updateBills = sortAlphabeticlly([...bills, bill]);
    localStorage.setItem("zinoBills", JSON.stringify(updateBills));
    setBills(updateBills);
  };

  const sortAlphabeticlly = (bills) => {
    return bills.sort(function (a, b) {
      return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0;
    });
  };

  const editBill = (billToUpdate) => {
    const billsFiltered = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );
    const updateBills = sortAlphabeticlly([...billsFiltered, billToUpdate]);
    localStorage.setItem("zinoBills", JSON.stringify(updateBills));
    setBills(updateBills);
  };

  const deleteBill = (billToDelete) => {
    const updateBills = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );
    localStorage.setItem("zinoBills", JSON.stringify(updateBills));
    setBills(updateBills);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        editBill,
        selectedInterval,
        setSelectedInterval,
        editModeEnabled,
        setEditModeEnabled,
        deleteBill,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
