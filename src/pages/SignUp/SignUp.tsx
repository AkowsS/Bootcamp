import { Menu } from "@/components/Menu";
import { Link } from "react-router-dom";
import {FormDiv, DivExt, CircleBefore, Container, DivSignup, CircleAfter } from "./SignUp.styles";

export const SignUp : React.FC = ()=>{
  return (
      <DivExt>
        <div style={{position:"absolute",zIndex:"99"}}>
          <Menu/>
        </div>
        <CircleBefore/>
        <Container>
          <DivSignup>
            <div className="card"/>
            <div className="logo">
              <i className="bx bx-bitcoin"></i>
            </div>
            
            <h2>Create Account</h2>
            <FormDiv>
              <input className="inputEbutton" type="text" placeholder="Name"/>
              <input className="inputEbutton" type="email" placeholder="Email" />
              <input className="inputEbutton" type="password" placeholder="Password" />
              <button className="inputEbutton" type="submit">SIGN UP</button>
            </FormDiv> 
            <footer className="footer">
              <div>
                <p>Existing users, sign in</p>
                
                <Link to={"/login"}><p>Here</p></Link>
              </div>
            </footer>
          </DivSignup>
        <CircleAfter/>
      </Container>
    </DivExt>
  );
};