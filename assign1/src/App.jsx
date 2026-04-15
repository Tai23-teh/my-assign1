import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleMessage}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>Hello, Tāítē!</p>}
    </div>
  );
}

export default App;