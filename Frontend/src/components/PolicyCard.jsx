import React from "react";

const PolicyCard = ({ title, status }) => {
  return (
    <div className="col-md-6">
      <div className="card shadow-sm p-3 mb-3">
        <h5 className="fw-bold">{title}</h5>
        <p>Status: <span className={`badge ${status === "Active" ? "bg-success" : "bg-warning"}`}>{status}</span></p>
      </div>
    </div>
  );
};

export default PolicyCard;
