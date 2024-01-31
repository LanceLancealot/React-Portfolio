import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Nav = ({handleTabChange}) => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <nav>
{navLinks.map((link) => (
    <Link 
      key={link.to} 
      to={link.to}
      onClick={() => handleTabChange(link.label)}
    >
      {link.label}
    </Link>
))}
    </nav>
  );
};

export default Nav;
