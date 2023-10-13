'use client';
import '../app/global.css';
import 'tailwindcss/tailwind.css';

export default function Footer() {
    return(<div className="main-footer">
    <footer className="footer">

      <div className="colums-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">

          <div className="col-span-1">
            <h2 className="mb-4 font-bold">Upper link</h2>
            <ul className="list-inside list-none">
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

          <div className="col-span-1">
            <h2 className="mb-4 font-bold">Navigator</h2>
            <p>If you want to donate to a charity that defends carbon reduction</p>
            <ul className="list-inside list-none">
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

      <p className="text-center">&copy; 2023 Nadine Coelho | All Rights Reserved</p>
    </footer>
  </div>
    )
}