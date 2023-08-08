import React from "react";

function EntryItemDetails({ title, date, content }) {
    return (
        <div className="entry-item">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{content}</p>
        </div>
    );
}

export default EntryItemDetails; 
