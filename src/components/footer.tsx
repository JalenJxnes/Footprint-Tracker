'use client';
import '../app/global.css';

export default function Footer() {
    return(
        <div className="main-footer">
          
        <footer className="footer">

          <div className="container">
          
            <div className="row">

              <div className="col-md-4 col-sm-12">
              <h2 className=" mb-4 font-weight-bold">Company Name</h2>
              <p>
                Your company's mission and a brief description can go here.
              </p>
            </div>

              <div className="col-md-4 col-sm-12">
              <h2 className=" mb-4 font-weight-bold">Upper link</h2>
                <ul className="list-unstyled">
            <li className="menu__item">
              <a className="menu__link" href="#">Home</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Calculator</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Tips</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">About us</a>
            </li>
          
          </ul>
            </div>
              
          <div className="col-md-4 col-sm-12">
              <h2 className=" mb-4 font-weight-bold">Navigator</h2>
            <p>If you want to donate to charity that defande the carbon reduction</p>
              <ul className="list-unstyled">
              
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </div>
          
            
               
               
          </div>
             
            </div>
            
         
          <p >&copy;2023 Nadine Coelho | All Rights Reserved</p>
        </footer>
              
          </div>  
    )
}