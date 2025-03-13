import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import PolicyDetails from "./pages/PolicyDetails";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SubmitClaim from "./pages/SubmitClaim";
import Claims from "./pages/Claims";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/policies" element={<Policies />} />
          <Route path="/dashboard/policy/:id" element={<PolicyDetails />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/submit-claim" element={<SubmitClaim />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
