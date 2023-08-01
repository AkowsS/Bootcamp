import React, { useState } from "react"
import { Container } from "./Popup.styles"

export const Popup : React.FC = ()=>{
  const [open, setOpen] = useState(false);

  const OnPopupOpen = ()=>{
    setOpen(open?false:true);
  };
  
  return(
    <Container>
      <button type="button" onClick={OnPopupOpen}>Open Modal</button>
      <div className={open?"modal-backgroundOpen":"modal-background"} onClick={OnPopupOpen}></div>
        <div className={open?"modalOpen":"modal"}>
          <h2>Modal Window</h2>
          <p>
            You gave opened the modal, they are grat for dusplaying
            critical informations or confiming actions!
          </p>
      </div>
    </Container>
  )
}