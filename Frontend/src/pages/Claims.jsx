import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Claims = () => {
  const claims = [
    { id: 1, policy: "Health Insurance", date: "2024-02-10", amount: "$5,000", status: "Approved" },
    { id: 2, policy: "Car Insurance", date: "2024-03-01", amount: "$2,500", status: "Pending" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light min-vh-100 p-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h2 className="fw-bold text-primary">Your Claims</h2>
          <div className="d-flex justify-content-end">
            <Link to="/submit-claim" className="btn btn-success mb-3">
              Submit New Claim
            </Link>
          </div>

          {/* Claims Table */}
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Policy Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim, index) => (
                  <tr key={claim.id}>
                    <td>{index + 1}</td>
                    <td>{claim.policy}</td>
                    <td>{claim.date}</td>
                    <td>{claim.amount}</td>
                    <td>
                      <span
                        className={`badge ${
                          claim.status === "Approved"
                            ? "bg-success"
                            : claim.status === "Pending"
                            ? "bg-warning"
                            : "bg-danger"
                        }`}
                      >
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
