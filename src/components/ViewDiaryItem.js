import React from "react";
import { Link } from "react-router-dom";

function ViewDiaryItem({id, title, date }) {
    return (
        <div className="entry-item">
            <h2>{title}</h2>
            <p>{date}</p>
            <Link to={`/viewdiaryentries/${id}`}>See more</Link>
        </div>
    );
}

export default ViewDiaryItem; 

