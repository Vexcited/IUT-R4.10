import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <section className="header">
      {/* <!-- Nav--> */}
      <div className="top">
        <div>
          <a href="#">
            <Logo />
          </a>
        </div>
        <nav>
          <a className="menu-link" href="#">
            La carte
          </a>
          <a className="menu-link" href="#">
            Les recettes
          </a>
          <a className="menu-link" href="#">
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Header;
