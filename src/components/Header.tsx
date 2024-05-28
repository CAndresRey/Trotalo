import { useState } from "react";
import { Logo } from "./Logo";
import { Brand } from "./Brand";
import NavbarLink from "./NavbarLink";

const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <header
      className='fixed top-0 left-0 right-0 z-10 bg-primary shadow-lg transition-all duration-300 items-center'
    >
      <nav className="container mx-auto flex ml-7 h-16">
        <div className="flex items-center gap-2">
          <Logo />
          <Brand />
        </div>
        <ul className="flex ml-6">
          <li onClick={() => setActive("home")}>
            <NavbarLink text="Home" route="/" active={active === "home"} />
          </li>
          <li onClick={() => setActive("employers")}>
            <NavbarLink
              text="Employers"
              route="/employers"
              active={active === "employers"}
            />
          </li>
          <li onClick={() => setActive("help")}>
            <NavbarLink
              text="Help & Resources"
              route="/help"
              active={active === "help"}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
