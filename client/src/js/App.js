import React, { useState } from "react";

function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      {!agreed ? (
        <div
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            maxWidth: 400,
            margin: "auto",
            marginTop: 100,
            textAlign: "center",
          }}
        >
          <h2>Terms & Conditions</h2>
          <p>You must agree to continue using this site.</p>
          <button
            onClick={() => setAgreed(true)}
            style={{
              padding: "10px 20px",
              fontSize: 16,
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            I Agree
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <h1>Welcome to StrangerConnect SCA</h1>
          <p>Users online: 1 (dummy count for now)</p>
        </div>
      )}
    </div>
  );
}

export default App;
