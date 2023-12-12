import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from '../../images/footer.svg'; 

export default function Footer(props) {
    return (
        <footer className="navbar navbar-expand-lg navbar-light" 
        style={{ 
            position: 'fixed', // Changed from 'absolute' to 'fixed'
            bottom: 0, // Changed from 'top: 0' to 'bottom: 0'
            left: 0, 
            width: '70%', 
            zIndex: 1000, 
            backgroundColor: 'rgba(255, 255, 255, 0.5)' // Using rgba for transparent background
        }}>
            <div className="container-fluid">
                <img src={Foot} alt="Filipino Adventures" height="100" className="main-logo" />
            </div>
        </footer>
    );
}
