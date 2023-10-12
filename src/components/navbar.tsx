'use client';
import '../app/carbon.css';

export default function NavBar() {
    return(
        <div className="container">
    
        <nav className="navbar fixed-top navbar-expand-sm navbar-light">
            <a className="navbar-brand"></a>
    
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavMenu" aria-controls="myNavMenu" aria-expanded="false" aria-label="Toggle Navigation On.">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="myNavMenu">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="carbon footprint calculator.html">Home</a>
                    </li>
    
                    <li className="nav-item">
                        <a className="nav-link" href="a">Calculator</a>
                    </li>
    
                    <li className="nav-item">
                        <a className="nav-link" href="a">Tips</a>
                    </li>
    
                    <li className="nav-item">
                        <a className="nav-link" href="a">About</a>
                    </li>
                 </ul>
            </div>
        </nav>
        </div>
    )
}