/*
 Multiple choice selector for choosing amounts to donate
*/

import styles from "../app/donate/donate.module.css";
import { useState } from "react";

const amounts = ["$10.00", "$25.00", "$50.00", "$100.00"]; // the options for donation

export default function Selector() {
  const [selected, setSelected] = useState<string | null>(null); // holds the selected value
  const [other, setOther] = useState(""); // holds the typed custom amount

  const donation = selected === "Other" ? other : selected; // actual amount

  return (
    <div>
      {amounts.map((amount) => (
        <label key={amount} className={styles.entry}>
          <input
            type="radio"
            name="choice"
            checked={selected === amount}
            onChange={() => setSelected(amount)}
          />
          {amount}
        </label>
      ))}

      <label className={styles.entry}>
        <input
          type="radio"
          name="choice"
          checked={selected === "Other"}
          onChange={() => setSelected("Other")}
        />
        <span className={styles.otherWrap}>
          $
          <input
            type="number"
            min="1"
            placeholder="Other"
            className={styles.other}
            value={other}
            onFocus={() => setSelected("Other")}
            onChange={(e) => setOther(e.target.value)}
          />
        </span>
      </label>
    </div>
  );
}
