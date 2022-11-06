import { useState } from "react";
import logo from "../../images/logo.png";
import menu from "../../images/menu.svg";
import Menu from "./Menu";

function Header(): JSX.Element {
  const windowSize = window.innerWidth;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="container-header ">
        <div className="menu-btn">
          <img
            src={menu}
            alt="menu"
            width={25}
            height={25}
            onClick={() => setOpen(true)}
          />
        </div>

        <div className="logo block">
          <div className="border ">
            <img className="logo-space" src={logo} alt="logo" />
          </div>
        </div>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}

export default Header;
