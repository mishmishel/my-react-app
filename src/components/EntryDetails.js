import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import EntryItemDetails from "./EntryItemDetails";

function EntryDetails() {
    const [entry, setEntry] = useState(null);
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/entries/${params.id}`)
            .then(r => r.json())
            .then(data => setEntry(data))
    }, [params.id])

    if(!entry) return <h2 id="loading">Loading...</h2>

    return (
        <section>
            <div className="details-container">
                <EntryItemDetails 
                key={entry.id}
                title={entry.title}
                date={entry.date}
                content={entry.content}
            />
            </div>
        </section>
    );
}

export default EntryDetails; 