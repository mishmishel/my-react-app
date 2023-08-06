import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to your digital diary!</h1>

            <section className="instructions">
                <p>
                    To create a new diary entry, click on "New Diary Entry" in the navigation menu. 
                </p>
                <p>
                    To see previous entries, click on "View Diary Entries".
                </p>
            </section>
        </div>
    )
}

export default Home;