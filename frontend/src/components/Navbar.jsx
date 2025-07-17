import React, { useState } from "react";
import api from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const data = api.data[0];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">LUNAYA</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data.navbarLinks.map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </Link>
          ))}
        </div>

       
        <button
          className="menuBtn"
          onClick={() => {
            const section = document.getElementById("menu");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          OUR MENU
        </button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
