import { Menu } from "@/components/Menu";
import { FormDiv,Container, MainDiv } from "./Login.styles";
import { Link } from "react-router-dom";

export const Login : React.FC = () =>{
  return(
    <Container>
      <div style={{position:"absolute",zIndex:"999"}}>
        <Menu/>
      </div>
      <MainDiv>
        <div className="divMain">
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <FormDiv>
            <input className="formElements" type="text" placeholder="Username" />
            <input className="formElements" type="password" placeholder="Password" />
            <Link to={"/signup"}>Forgot your password?</Link>
            <button className="formElements" type="submit">LOGIN</button>
          </FormDiv>
        </div>
      </MainDiv>
    </Container>
  );
};