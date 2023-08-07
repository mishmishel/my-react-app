import React, { useEffect, useState } from "react";
import EntryItem from "./EntryItem";

function ViewDiaryEntries() {

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/entries")
            .then(r => r.json())
            .then(data => setEntries(data))
    }, []);

    const entryItems = entries.map((entry) => (
        <EntryItem
        key={entry.id}
        title={entry.title}
        date={entry.date}
        />
    )); 

    return ( 
        <div id="entries">
            <h1>Look at Diary Entries!</h1> 
            <div>{entryItems}</div>
        </div>
    );
}

export default ViewDiaryEntries; 

