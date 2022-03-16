import React, { useState, useEffect } from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => {
  const [first, setfirst] = useState("name");
  useEffect(() => {
    setfirst(name);
  }, []);
  return <div>Hey {first}, say hello to TypeScript.</div>;
};

export default SayHello;
