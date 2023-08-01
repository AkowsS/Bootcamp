import { Menu2 } from "@/components/Menu2"
import BgImg from "@/public/imgs/bg.jpg"
import { Container } from "./login2.styles"

export const Login2 : React.FC = ()=>{
  return (
    <Container>
      <div style={{position:"absolute",zIndex:"999"}}>
        <Menu2/>
      </div>
      <div className="login">
        <img src={BgImg} alt="" />
        <h3>Welcome Back!</h3>
        <h2>AsmrProg</h2>
        <form className="login-form">
          <input type="password" placeholder="Enter yout passcode"/>
          <button type="submit">LOGIN</button>
          <a href="#">Forget your passcode?</a>
        </form>
      </div>
    </Container>
  )
} 