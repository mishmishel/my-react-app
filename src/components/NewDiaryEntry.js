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
        ...prevEntry,
        [name]: value
    }));
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:3000/entries", {
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
            // You can reset the form or perform other actions upon successful submission
        })
        .catch(error => {
            console.error("Error creating entry:", error);
            // Handle error (e.g., show a notification to the user)
        });

    }

    return (

        <div className="diary-container">
            <h1>Enter your new diary entry!</h1>; 

            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input 
                    name="date"
                    value={entry.date}
                    onChange={handleInputChange}
                />
                <label>Title:</label>
                <input 
                    name="title"
                    value={entry.title}
                    onChange={handleInputChange}
                />
                <label>Content:</label>
                <textarea
                    name="content"
                    value={entry.content}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit Entry</button>
            </form>

        </div>

    )
}

export default NewDiaryEntry; 