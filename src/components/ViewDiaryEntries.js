import React, { useEffect, useState } from "react";
import ViewDiaryItem from "./ViewDiaryItem";
import "./ViewDiaryEntries.css";

function ViewDiaryEntries() {

    const [entries, setEntries] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/entries")
            .then(r => r.json())
            .then(data => setEntries(data))
    }, []);

    const filteredEntries = entries.filter((entry) => {
        if (!startDate || !endDate) {
          return true; // If no date range is selected, show all entries
        }
        const entryDate = new Date(entry.date);
        return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
      });

      const entryItems = filteredEntries.map((entry) => (
        <ViewDiaryItem key={entry.id} id={entry.id} title={entry.title} date={entry.date} />
      ));

    return ( 
        <div className="entry-container">
            <h1>Look at Diary Entries!</h1> 
            <div className="date-filter">
                <label className="date-text">Start Date:</label>
                <input className="date-box" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <label className="date-text">End Date:</label>
                <input className="date-box" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div id="entries">{entryItems}</div>
        </div>
    );
}

export default ViewDiaryEntries; 


