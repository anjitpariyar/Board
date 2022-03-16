import React, { useState, useEffect } from "react";
const SayHello = ({ name }) => {
    const [first, setfirst] = useState("name");
    useEffect(() => {
        setfirst(name);
    }, []);
    return React.createElement("div", null,
        "Hey ",
        first,
        ", say hello to TypeScript.");
};
export default SayHello;
