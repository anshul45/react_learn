import React from "react";
import ReactDOM  from "react-dom/client";
       
        const react_heading = React.createElement("h1",{},"My First Heading");
        const react_root = ReactDOM.createRoot(document.getElementById("root"));

        react_root.render(react_heading);    
