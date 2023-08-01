import { styled } from "@mui/system";

export const Container = styled("div")(({theme})=>({
  [theme.breakpoints.down(500)]: {
    padding:0,
  },
  marginTop:"64px",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  margin: 0,
  padding: "0 24px",
  backgroundColor: "#da99ff",
  backgroundImage:
    "radial-gradient(at 88% 0%,hsla(327, 67%, 64%, 1) 0px,transparent 50%),radial-gradient(at 63% 46%, hsla(307, 76%, 61%, 1) 0px, transparent 50%), radial-gradient(at 95% 53%, hsla(89, 91%, 67%, 1) 0px, transparent 50%), radial-gradient(at 79% 83%, hsla(170, 86%, 65%, 1) 0px, transparent 50%), radial-gradient(at 74% 93%, hsla(71, 93%, 75%, 1) 0px, transparent 50%), radial-gradient(at 52% 13%, hsla(110, 83%, 72%, 1) 0px, transparent 50%), radial-gradient(at 30% 80%, hsla(263, 79%, 66%, 1) 0px, transparent 50%)",
  color:"#000",
  fontFamily:"Ubuntu",
  ".login":{
    [theme.breakpoints.down(450)]: {
      width:"25%",
    },
    [theme.breakpoints.down(1200)]: {
      width:"380px",
    },
    marginTop:"30px",
    position: "fixed",
    zIndex: 3,
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    width: "90%",
    padding: "70px 30px 44px",
    borderRadius:"1.25rem",
    background: "#fff",
    textAlign: "center",
    img:{
      width:"120px",
      aspectRatio:"1/1",
      objectFit:"cover",
      borderRadius:"50%",
      marginBottom:"20px",
    },
    h2:{
      fontSize:"36px",
      margin:"0 0 25px",
    },
    h3:{
      color:"rgba(0, 0, 0, 0.38)",
      margin:"0 0 6px",
      fontWeight:500,
      fontSize:"1rem",
    },
  },
  ".login-form":{
    display:"grid",
    gap:"30px",
    placeItems:"center",
    width:"100%",
    margin:0,
    
    input:{
      height:"56px",
      outline:"none",
      padding:0,
      fontFamily:"Ubuntu",
      width:"240px",
      background:"transparent",
      border:"2px solid transparent",
      borderBottom:"2px solid rgb(0, 0, 0, 0.5)",
      fontSize:"18px",
      textAlign:"center",
      transition:"all 0.3s",
      ":hover":{
        borderBottom:"2px solid #303f9f",
      },
      ":focus":{
        borderBottom:"2px solid #1976d2",
      }
    },
    button:{
      height:"56px",
      outline:"none",
      padding:0,
      fontFamily:"Ubuntu",
      width:"100%",
      cursor:"pointer",
      background:"#303f9f",
      color:"#f9f9f9",
      fontSize:"1rem",
      fontWeight:600,
      letterSpacing:"2px",
      tranition:"all 0.3s",
      ":hover":{
        backgroundColor:"#1976d2",
      },
    },
    a:{
      color:"#303f9f",
      fontSize:"1rem",
      textAlign:"left",
      textDecoration:"none",
      transition:"all 0.3s",
      ":hover":{
        color:"#1976d2",
      }
    },
  },

}));
