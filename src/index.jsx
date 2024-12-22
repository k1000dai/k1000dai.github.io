import React from "react";
import { createRoot } from "react-dom/client";
import "/src/style.css"
import { ReactRoot } from "./ReactRoot";
const root = createRoot(document.getElementById("root"));

root.render(
    <ReactRoot />
)
