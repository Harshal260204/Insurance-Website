import React from "react";

const ClaimStatus = ({ claimId, status }) => {
  return (
    <div className="card shadow-sm p-3 mb-3">
      <p className="mb-1">Claim ID: <strong>{claimId}</strong></p>
      <p>Status: <span className={`badge ${status === "Approved" ? "bg-success" : "bg-warning"}`}>{status}</span></p>
    </div>
  );
};

export default ClaimStatus;

