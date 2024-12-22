import React from "react";
import geminiLogo from './resources/gemini-logo.png';
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <h1>Hello, world!</h1>
        <img src={geminiLogo} />
    </div>
)
