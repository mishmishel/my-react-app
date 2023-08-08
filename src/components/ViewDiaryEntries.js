import React, { useEffect, useState } from "react";
import ViewDiaryItem from "./ViewDiaryItem";
import "./ViewDiaryEntries.css";

function ViewDiaryEntries() {

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/entries")
            .then(r => r.json())
            .then(data => setEntries(data))
    }, []);

    const entryItems = entries.map((entry) => (
        <ViewDiaryItem
        key={entry.id}
        id={entry.id}
        title={entry.title}
        date={entry.date}
        />
    )); 

    return ( 
        <div className="entry-container">
            <h1>Look at Diary Entries!</h1> 
            <div id="entries">{entryItems}</div>
        </div>
    );
}

export default ViewDiaryEntries; 

