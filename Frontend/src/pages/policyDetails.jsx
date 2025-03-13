import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PolicyDetails = () => {
  const { id } = useParams();

  // Dummy data (later replace with API call)
  const policy = {
    id,
    name: "Health Insurance",
    type: "Health",
    status: "Active",
    coverage: "$50,000",
    premium: "$200/month",
    startDate: "Jan 1, 2024",
    endDate: "Jan 1, 2025",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light min-vh-100 p-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h2 className="fw-bold text-primary">Policy Details</h2>
          <div className="card shadow-sm p-4 mt-4">
            <h4 className="fw-bold">{policy.name}</h4>
            <p><strong>Type:</strong> {policy.type}</p>
            <p><strong>Status:</strong> <span className={`badge ${policy.status === "Active" ? "bg-success" : "bg-warning"}`}>{policy.status}</span></p>
            <p><strong>Coverage:</strong> {policy.coverage}</p>
            <p><strong>Premium:</strong> {policy.premium}</p>
            <p><strong>Start Date:</strong> {policy.startDate}</p>
            <p><strong>End Date:</strong> {policy.endDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
