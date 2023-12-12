import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavigation.css'; // Import your CSS file here
import Logo from '../../images/logo.svg'; 


export default function MainNavigation(props) {
  return (
    <header className="navbar navbar-expand-lg navbar-light" 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                zIndex: 1000, 
                backgroundColor: 'transparent !important' // Using !important to override any other styles
            }}>
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img src={Logo} alt="Filipino Adventures" height="100" className="main-logo" />

        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home Page</Link>
            </li>
            {/* Uncomment and update these links as per your routing needs
            <li className="nav-item">
              <Link className="nav-link" to="/addnewbook">Add New Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservedbooks">ReservedBooks</Link>
            </li>
            */}
          </ul>
        </div>
      </div>
    </header>
  );
}
