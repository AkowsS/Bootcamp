import { Link } from "react-router-dom";
import { Container } from "./Menu.styles";
import Logo from "@/public/icons/logo.png";
import { useState } from "react";

export const Menu: React.FC = () => {
  const [open,setOpen] = useState(false)
  const onclickButtonBar = () =>{
    setOpen(open===false?true:false);
  };
  return (
    <Container>
      <nav className={open===true?"sidebarOpen":"sidebar"}>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className="sidebar-burger"
              onClick={onclickButtonBar}
            >
              <i className="bx bx-menu"></i>
            </button>
            <img src={Logo} alt="" className={open===true?"sidebar-logoOpen":"sidebar-logo"}/>
          </header>
          <nav className="sidebar-menu">
            <div className={open===true?"sidebar-spanOpen":"sidebar-span"}>
              <button type="button">
                <i className="bx bx-home"></i>
                <span> <Link to={"/"}>Home</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-user"></i>
                <span><Link to={"/signup"}>Accounts</Link></span>
              </button>
              <button type="button" className="has-border">
                <i className="bx bx-cog"></i>
                <span><Link to={"/login"}>Settings</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-circle"></i>
                <span><Link to={"/login2"}>Blockchain</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-data"></i>
                <span><Link to={"/timeline"}>Database</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-speaker"></i>
                <span><Link to={"/timeline2"}>AudioVibe</Link></span>
              </button>
              <button type="button" className="has-border">
                <i className="bx bx-music"></i>
                <span><Link to={"/credcard"}>Soundlast</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-folder"></i>
                <span><Link to={"#"}>Folders</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-layer"></i>
                <span><Link to={"#"}>Levels</Link></span>
              </button>
              <button type="button">
                <i className="bx bx-lock"></i>
                <span><Link to={"#"}>Security</Link></span>
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </Container>
  );
};
