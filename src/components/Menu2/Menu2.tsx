import { useState } from "react";
import { Container } from "./Menu2.styles";
import { Link } from "react-router-dom";


export const Menu2 : React.FC =()=>{
  const [open, setOpen] = useState(false)

  const onOpenMenu =()=>{
    setOpen(open?false:true)
  }

  return (
    <Container>
      <nav className="navbar">
        <div className={open?"navbar-overlayOpen":"navbar-overlay"} onClick={onOpenMenu}></div>
        <button className="navbar-burger" type="button" onClick={onOpenMenu}>
          <span className="material-icons">Menu</span>
        </button>
        <h1 className="navbar-title">
          AsmrProg
        </h1>
        <nav className={open?"navbar-menuOpen":"navbar-menu"}>
          <button className="active" type="button"><Link to="/">Youtube</Link></button>
          <button className="active" type="button">Archive</button>
          <button type="button">Projects</button>
        </nav>
      </nav>
    </Container>
  );
};