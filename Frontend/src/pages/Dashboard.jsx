import { useEffect, useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";
import { getProfile, getAllPolicies, getAllClaims } from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const token = user.token;

        // Fetch User Details
        const profileRes = await getProfile(token);
        setUserData(profileRes.data);

        // Fetch Policies
        const policiesRes = await getAllPolicies(token);
        setPolicies(policiesRes.data);

        // Fetch Claims
        const claimsRes = await getAllClaims(token);
        setClaims(claimsRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="dashboard-container d-flex">
      <Sidebar />
      <div className="content p-4">
        <h2>Welcome, {userData?.name}</h2>
        <p>Manage your policies and claims here.</p>

        <div className="row">
          <div className="col-md-6">
            <div className="card shadow p-3">
              <h4>Active Policies</h4>
              <p>You have {policies.length} active policies.</p>
              <button className="btn btn-primary" onClick={() => navigate("/policies")}>
                View Policies
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow p-3">
              <h4>Claim Requests</h4>
              <p>You have {claims.length} pending claims.</p>
              <button className="btn btn-primary" onClick={() => navigate("/claims")}>
                View Claims
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
