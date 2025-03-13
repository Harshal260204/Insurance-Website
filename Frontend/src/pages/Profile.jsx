import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    dob: user?.dob || "",
    nationality: user?.nationality || "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
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
          <h2 className="fw-bold text-primary">User Profile</h2>
          
          <div className="card shadow-sm p-4 mt-4">
            <h4 className="fw-bold text-secondary">Update Profile</h4>
            <form onSubmit={handleUpdateProfile}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={formData.email} disabled />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Nationality</label>
                  <input type="text" className="form-control" name="nationality" value={formData.nationality} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
          </div>

          {/* Change Password Section */}
          <div className="card shadow-sm p-4 mt-4">
            <h4 className="fw-bold text-danger">Change Password</h4>
            <form onSubmit={handleChangePassword}>
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input type="password" className="form-control" name="oldPassword" onChange={handlePasswordChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" name="newPassword" onChange={handlePasswordChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input type="password" className="form-control" name="confirmPassword" onChange={handlePasswordChange} required />
              </div>
              <button type="submit" className="btn btn-danger">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
