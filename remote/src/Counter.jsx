import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);
  return (
    <div className="flex flex-col">
      <p>{state}</p>
      <button onClick={() => setState((state) => state + 1)}>inc</button>
    </div>
  );
}
