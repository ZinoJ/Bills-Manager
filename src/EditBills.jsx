import React, { useContext } from 'react'
import { BillContext } from './Context/BillContext'
import './EditBills.css'

function EditBills() {
   const {bills, editBill, setEditModeEnabled, deleteBill} = useContext(BillContext)
  return (
    <div className="editBills">
      <div><button className="edit__btn" onClick={() => setEditModeEnabled(false)}>
         DONE
      </button></div>
      {
         bills.map((bill, billIndex) => (
            <div className='editBill_row' key={billIndex}>
                <div className="editBill__title">
                  {bill.title}
                </div>
                <div className="right">
                <input type="number" value={bill.monthlyCost} onChange={(e) => editBill({
                  title: bill.title,
                  enabled: bill.enabled,
                  monthlyCost: e.target.value
                })}/>
                <h6 onClick={() => deleteBill(bill)} className='delete__button'>DELETE</h6>
                </div>
            </div>
         ))
      }
    </div>
  )
}

export default EditBills