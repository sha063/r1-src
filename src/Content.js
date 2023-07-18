import React from "react";
import Badge from "./Components/Badge";
import Paragraph from "./Components/Paragraph";
import { useState } from "react";

function Content() {
    
const [state, setstate] = useState(
    
)

    return(
        <div className="Content">
            <Badge name="one" notification="00"/>
            <Paragraph text="end"/>
        </div>
    )
}

export default Content;