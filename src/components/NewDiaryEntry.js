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

    // Not allowing users to submit if they don't enter anything

    const inputBoxes = document.querySelectorAll(".input-box");
    let disableButton = false;

    inputBoxes.forEach(entry => {
        if (entry.value.trim() === "") {
            disableButton = true;
        }
    });

    return (

        <div className="diary-container">
            <h1>Enter your new diary entry!</h1>

            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="labels">Date:</label>
                <input className="input-box"
                    name="date"
                    value={entry.date}
                    onChange={handleInputChange}
                />
                <label className="labels">Title:</label>
                <input className="input-box"
                    name="title"
                    value={entry.title}
                    onChange={handleInputChange}
                />
                <label className="labels">Dear Diary...</label>
                <textarea className="input-box"
                    name="content"
                    value={entry.content}
                    onChange={handleInputChange}
                />
                <button id="submit-button" disabled={disableButton} type="submit">Submit Entry</button>
            </form>
            </div>

        </div>

    )
}

export default NewDiaryEntry; 