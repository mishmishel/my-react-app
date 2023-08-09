import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import EntryItemDetails from "./EntryItemDetails";

function EntryDetails() {
    const [entry, setEntry] = useState(null);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:4000/entries/${params.id}`)
            .then(r => r.json())
            .then(data => setEntry(data))
    }, [params.id])

    if(!entry) return <h2 id="loading">Loading...</h2>

    return (
       
        <div className="details-container">
                <EntryItemDetails 
                key={entry.id}
                title={entry.title}
                date={entry.date}
                content={entry.content}
            />
            <button id="back-button" onClick={() => history.push("/viewdiaryentries")}>All Entries</button>
        </div>
       
    );
}

export default EntryDetails; 