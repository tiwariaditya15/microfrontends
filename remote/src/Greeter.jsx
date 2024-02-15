import { useState } from "react";

export default function Greeter() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border-[1px] border-gray-400"
      />
      <p>Hello {name}!</p>
    </div>
  );
}
