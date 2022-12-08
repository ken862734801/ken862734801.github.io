import React from "react";
import "./404.css";

function NotFound (){
    return(
        <main className="lost-page" id="lost-page">
            <div class="lost-container">
                <p className="error-text">The page you are looking for was moved, removed, renamed, or might have never existed!</p>
            </div>
        </main>
    )
}

export default NotFound;