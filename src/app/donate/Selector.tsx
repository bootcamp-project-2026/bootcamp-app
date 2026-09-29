/*
 Multiple choice selector for choosing amounts to donate
*/

import styles from "./donate.module.css";
import { useState } from "react";

const amounts = ["$10", "$25", "$50", "$100", "Other"]; // the options for donation

export default function Selector() {
  const [selected, setSelected] = useState<string | null>(null); // holds the selected value

  return (
    <div>
      {amounts.map((amount) => (
        // adds amounts to dropdown
        <label key={amount} className={styles.entry}>
          <input
            type="radio" // jsx radio button
            name="choice"
            checked={selected === amount}
            onChange={() => setSelected(amount)}
          />
          {amount}
        </label>
      ))}
    </div>
  );
}
