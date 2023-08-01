import { styled } from "@mui/system";
import BackgroundPage from "@/public/imgs/low-poly-grid-haikei.svg"

export const Container = styled("div")({
  height:"100vh",
});

export const MainDiv = styled("div")(({theme})=>({
  "@keyframes rotate":{
    "100%":{
      backgroundPosition:"15% 50%",
    },
  },
  display:"grid",
  placeItems:"center",
  height:"100%",
  margin:0,
  padding: "0 24px",
  backgroundImage:`url(${BackgroundPage})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  color:"#000",
  animation:"rotate 6s infinite alternate linear",
  ".divMain":{
    position:"relative",
    zIndex:"3",
    width:"100%",
    margin:"0 20px",
    padding:"70px 30px 44px",
    borderRadius:"1.25rem",
    background:"#fff",
    textAlign:"center",
    h2:{
      fontSize:"36px",
      fontWeight:600,
      margin:"0 0 12px",
    },
    h3:{
      color:"rgba(0, 0, 0, 0.38)",
      margin:"0 0 30px",
      fontWeight:500,
      fontSize:"1rem",
    },
    [theme.breakpoints.up(500)]: {
      width:"400px",
      margin:0,
    }
  },
  [theme.breakpoints.up(500)]: {
    padding:0,
  }
}));

export const FormDiv = styled("form")({
  // width:"100%",
  margin:0,
  display:"grid",
  gap:"16px",
  ".formElements":{
    height:"50px",
  },
  input:{
    border:"2px solid #ebebeb",
    fontFamily:"Ubuntu",
    fontSize:"15px",
    padding:"0 16px",
    borderRadius:"1.25rem",
    transition:"all 0.375s",
    ":hover":{
      border:"2px solid #10449a",
    },
  },
  button:{
    cursor:"pointer",
    padding:"0 16px",
    borderRadius:"1.25rem",
    background:"#216ce7",
    color:"#f9f9f9",
    border:0,
    fontFamily:"Ubuntu",
    fontSize:"1rem",
    fontWeight:600,
    textAlign:"center",
    letterSpacing:"2px",
    // transition:"all 0.375s",
    transition: "all 1s ease-out",
    ":hover":{
      background:"#10449a",
    },
  },
  a:{
    color:"#216ce7",
    width:"150px",
    fontSize:"0.9rem",
    textAlign:"left",
    textDecoration:"none",
    marginBottom:"6px",
    transition:`all 0.375s`,
    ":hover":{
      color:"#10449a",
    },
  },
});