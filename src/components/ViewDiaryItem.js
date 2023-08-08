import React from "react";
import { NavLink } from "react-router-dom";

function ViewDiaryItem({id, title, date }) {
    return (
        <div className="entry-item">
            <h2>{title}</h2>
            <p>{date}</p>
            <NavLink id="see-more" to={`/viewdiaryentries/${id}`}>See more</NavLink>
        </div>
    );
}

export default ViewDiaryItem; 

