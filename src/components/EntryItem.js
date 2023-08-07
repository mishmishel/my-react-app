import React from "react";

function EntryItem({ title, date }) {
    return (
        <div className="entry-item">
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    );
}

export default EntryItem; 