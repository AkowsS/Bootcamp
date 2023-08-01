import { styled } from "@mui/system";

export const Container = styled("div")({
  boxSizing:"border-box",
  padding:0,
  fontFamily:"sans-serif",
  letterSpacing:"1px",
  display: "flex",
  backgroundColor:"#1e1e2f",
".container":{
    backgroundColor:"#1e1e2f",
    maxWidth:"650px",
    margin:"50px auto",
  },
  h4:{
    margin:"0",
    padding:"0",
  },
  p:{
    margin:"0",
    padding:"0",
    fontWeight:300,
    lineHeight:"1.5",
    fontSize:"14px",
    opacity:"0.9",
  },
  ".timeline":{
    position:"relative",
    paddingLeft:"4rem",
    margin:"0 0 0 30px",
    color:"#fff",
    marginBottom:"2.5rem",
    "::before":{
      content:'""',
      width:"4px",
      height:"99%",
      position:"absolute",
      backgroundColor:"#27293d",
      left:0,
      top:"15px",
    },
  },
  ".timeline-box":{
    position:"relative",
    marginBottom:"2.5rem",
  },
  ".icon":{
    position:"absolute",
    left:'-88px',
    top:"4px",
    width:"48px",
    height:"48px",
    backgroundColor:"#4f537b",
    borderRadius:"50%",
    fontSize:"3rem",
    textAlign:"center",
    i:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    },
  },
  ".timeline-body":{
    backgroundColor:"#27293d",
    borderRadius:"6px",
    padding:"20px 18px 15px 20px",
    boxShadow:"1px 3px 9px rgba(0, 0, 0, 0.1)",
    cursor:"pointer",
    transition:"all 0.5s ease",
    ":hover":{
      boxShadow:"1px 3px 20px rgba(0, 0, 0, 0.6)",
    },
    "::before":{
      content:'""',
      backgroundColor:"inherit",
      width:"20px",
      height:"20px",
      display: "block",
      position:"absolute",
      left:"-10px",
      transform:"rotate(45deg)",
      borderRadius:"0 0 0 3px",
    },
  },
  ".header":{
    marginBottom:"1.2rem",
  },
  ".badge":{
    backgroundColor:"#4f537b",
    padding:"4px 8px",
    fontSize:"12px",
    borderRadius:"4px",
    fontWeight:"bold",
  },
  ".time":{
    fontWeight:300,
    fontStyle:"italic",
    opacity:"0.4",
    marginTop:"16px",
    fontSize: "11px",
  },
  "#primary":{
    ".icon":{
      backgroundColor:"#42a5f5",
    },
    ".badge":{
      backgroundColor:"#42a5f5",
    },
  },
  "#success":{
    ".icon":{
      backgroundColor:"#66bb6a",
    },
    ".badge":{      
      backgroundColor:"#66bb6a",
    },
  },
  "#danger":{
    ".icon":{
      backgroundColor:"#ec40fa",
    },
    ".badge":{
      backgroundColor:"#ec40fa",
    },
  },
  "#warning":{
    ".icon":{
      backgroundColor:"#ffa726",
    },
    ".badge":{
      backgroundColor:"#ffa726",
    },
  },
  "#info":{
    ".icon":{
      backgroundColor:"#29b6f6",
    },
    ".badge":{
      backgroundColor:"#29b6f6",
    },
  },
}); 