import React from "react";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      {" "}
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button class="delete-btn">x</button>{" "}
      </li>
    </div>
  );
}

export default Transaction;
