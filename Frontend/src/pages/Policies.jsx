import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Policies = () => {
  const policies = [
    { id: 1, name: "Health Insurance", type: "Health", status: "Active" },
    { id: 2, name: "Car Insurance", type: "Vehicle", status: "Pending" },
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
          <h2 className="fw-bold text-primary">Your Policies</h2>

          {/* Policies Table */}
          <div className="table-responsive mt-4">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Policy Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((policy, index) => (
                  <tr key={policy.id}>
                    <td>{index + 1}</td>
                    <td>{policy.name}</td>
                    <td>{policy.type}</td>
                    <td>
                      <span className={`badge ${policy.status === "Active" ? "bg-success" : "bg-warning"}`}>
                        {policy.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/policy/${policy.id}`} className="btn btn-primary btn-sm">
                        View Details
                      </Link>
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

export default Policies;
