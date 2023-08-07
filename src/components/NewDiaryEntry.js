import React, { useState } from "react";
import './NewDiaryEntry.css';

function NewDiaryEntry() {

    const [entry, setEntry] = useState({
        title: "",
        date: "",
        content: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEntry(prevEntry => ({
        ...prevEntry, /* Spread operator creates copy of current entry state object and updates property by name with new value */
        [name]: value
    }));
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:4000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(entry)
        })

        .then(response => response.json())
        .then(data => {
            console.log("Entry created:", data);

            setEntry({
                title: "",
                date: "",
                content: ""
            }); // Resetting input boxes to blank after submission by changing state

        })
        .catch(error => {
            console.error("Error creating entry:", error);
        });

    }

    return (

        <div className="diary-container">
            <h1>Enter your new diary entry!</h1>

            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="labels">Date:</label>
                <input 
                    name="date"
                    value={entry.date}
                    onChange={handleInputChange}
                />
                <label className="labels">Title:</label>
                <input 
                    name="title"
                    value={entry.title}
                    onChange={handleInputChange}
                />
                <label className="labels">Dear Diary...</label>
                <textarea
                    name="content"
                    value={entry.content}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit Entry</button>
            </form>
            </div>

        </div>

    )
}

export default NewDiaryEntry; 