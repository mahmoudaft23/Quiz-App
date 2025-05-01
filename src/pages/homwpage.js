import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "12px 24px",
    border: "2px solid white",
    borderRadius: "6px",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  };

  const textStyle = {
    fontSize: "18px",
    maxWidth: "500px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Quiz!</h1>
      <p style={textStyle}>
        Test your knowledge with our fun and interactive quiz. Click "Start" to
        begin answering questions.
      </p>
      <button onClick={() => navigate("/Questions")} style={buttonStyle}>
        Start Exam
      </button>
    </div>
  );
};

export default Homepage;
