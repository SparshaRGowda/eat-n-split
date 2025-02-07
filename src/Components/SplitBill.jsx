/* eslint-disable react/prop-types */
import { useState } from "react";

export function SplitBill({
  splitWith,
  palBal,
  handleEditBalance,
  setOpenSplit,
}) {
  const [billVal, setBillVal] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [who, setWho] = useState("You");

  function handleSplit(e) {
    e.preventDefault();
    const newBal =
      who === "You" ? palBal + (billVal - yourExpense) : palBal - yourExpense;
    handleEditBalance(newBal);
  }

  return (
    <div className="bg-red-300 w-[400px] h-[400px] flex flex-col items-center">
      <h2 className="m-10">Split a bill with {splitWith}</h2>
      <form onSubmit={handleSplit}>
        <div className="mb-5">
          <label className="mr-5">Bill Value</label>
          <input
            type="text"
            value={billVal}
            onChange={(e) => setBillVal(Number(e.target.value))}
          />
        </div>
        <div className="mb-5">
          <label className="mr-5">Your expense</label>
          <input
            type="text"
            value={yourExpense}
            onChange={(e) => setYourExpense(Number(e.target.value))}
          />
        </div>
        <div className="mb-5">
          <label className="mr-5">{`${splitWith}'s expense`}</label>
          <input type="text" value={billVal - yourExpense} disabled />
        </div>
        <div className="mb-5">
          <label className="mr-5">Who is paying the bill?</label>
          <select value={who} onChange={(e) => setWho(e.target.value)}>
            <option>You</option>
            <option>{splitWith}</option>
          </select>
        </div>
        <button className="bg-orange-200 h-8 w-20 rounded-md m-2">
          Split bill
        </button>
        <button
          className="bg-orange-200 h-8 w-20 rounded-md m-2"
          onClick={() => setOpenSplit(false)}
        >
          Close
        </button>
      </form>
    </div>
  );
}
