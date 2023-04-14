import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBCard } from "mdb-react-ui-kit";

function App() {
  const [table, setTable] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const GenerateHandler = (e) => {
    e.preventDefault();

    const num = parseInt(table);
    if (isNaN(num) || num === 0 || num === 1) {
      setErrorMessage("Please enter an integer!");
    } else {
      let tableResult = "";
      for (let i = 1; i <= 10; i++) {
        const multiplication = num * i;
        tableResult += `${num} x ${i} = ${multiplication}\n`;
      }
      setResult(tableResult);
      setErrorMessage("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <form onSubmit={GenerateHandler}>
        <MDBContainer style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h1 className="text-primary">GENERATE TABLE</h1>
          <MDBInput
            style={{ marginTop: "10px" }}
            label="Enter table number:"
            type="text"
            onChange={(e) => setTable(e.target.value)}
          />
          <br />
          <MDBBtn block className="btn btn-success" type="submit">
            Generate
          </MDBBtn>
        </MDBContainer>
      </form>
      {errorMessage && (
        <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
      )}
      <MDBCard
        style={{
          maxWidth: "480px",

          margin: "0 auto",
        }}
      >
        <pre>{result}</pre>
      </MDBCard>
    </div>
  );
}

export default App;
