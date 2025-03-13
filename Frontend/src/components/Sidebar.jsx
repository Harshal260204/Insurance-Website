import { Link } from "react-router-dom";
// import "../styles/Sidebar.css"; // Add styles separately

const Sidebar = () => {
    return (
        <nav className="sidebar bg-primary text-white vh-100 d-flex flex-column p-3">
            <h4 className="text-center mb-4">User Dashboard</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/dashboard">🏠 Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/policies">📜 Policies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/claims">📋 Claims</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/profile">👤 Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
