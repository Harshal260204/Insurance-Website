import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const SubmitClaim = () => {
  const [formData, setFormData] = useState({
    policy: "",
    date: "",
    amount: "",
    reason: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Claim submitted successfully!");
    navigate("/claims");
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
          <h2 className="fw-bold text-primary">Submit a Claim</h2>
          <div className="card shadow-sm p-4 mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Select Policy</label>
                <select className="form-select" name="policy" onChange={handleChange} required>
                  <option value="">Choose...</option>
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Car Insurance">Car Insurance</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Date of Incident</label>
                <input type="date" className="form-control" name="date" onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Claim Amount ($)</label>
                <input type="number" className="form-control" name="amount" onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Reason</label>
                <textarea className="form-control" name="reason" rows="3" onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit Claim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitClaim;
