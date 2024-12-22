import React from "react";
import geminiLogo from './resources/gemini-logo.png';
import { createRoot } from "react-dom/client";
import "/src/style.css"

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <h1>Hello, world!</h1>
        <img className="test" src={geminiLogo} alt="logo" />
    </div>
)
