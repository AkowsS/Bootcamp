import { styled } from "@mui/system";

export const Container = styled("div")({
  height:"100vh",
  margin:0,
  display:"grid",
  placeItems:"center",
  fontFamily:"Ubuntu",
  background:"#37353b",
  button:{
    fontFamily:"Ubuntu",
    cursor:"pointer",
    background:"#1a1a1a",
    color:"#f9f9f9",
    border:0,
    borderRadius:"8px",
    padding:"20px 36px",
    fontSize:"16px",
  },
  ".modal-background":{
    position:"fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    display:"grid",
    placeITems:"center",
    opacity:0,
    visibility:"hidden",
    transform:"scale(1,1)",
    background:"rgba(0, 0, 0, 0.5)",
    transition:"0.5s",
  },
  ".modal-backgroundOpen":{
    position:"fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    display:"grid",
    placeITems:"center",
    opacity:1,
    visibility:"visible",
    transform:"scale(1,1)",
    background:"rgba(0, 0, 0, 0.5)",
    transition:"0.5s",
    animation:"background-in 1s both",
  },
  ".modal":{
    position:"fixed",
    top:"50%",
    left:"50%",
    background:"#37353b",
    color:"#f9f9f9",
    padding:"48px 40px",
    borderRadius:"12px",
    width:"300px",
    translate:"-50% -50%",
    opacity:0,
    visibility:"hidden",
    transition:"0.3s",
  },
  ".modalOpen":{
    position:"fixed",
    top:"50%",
    left:"50%",
    background:"#37353b",
    color:"#f9f9f9",
    padding:"48px 40px",
    borderRadius:"12px",
    width:"300px",
    translate:"-50% -50%",
    opacity:1,
    visibility:"visible",
    transition:"0.3s",
    animation:"modal-in 1s"
  },
  h2:{
    margin:"0 0 8px",
    fontWeight: 400,
    fontSize:"21px",
  },
  p:{
    margin:0,
    color:"rgba(255, 255, 255, 0.5)",
  },
  "@keyframes background-in":{
    "0%":{
      scale:"0 0.005",
    },
    "33%":{
      scale:"1 0.005",
    },
    "66%":{
      scale:"1 1",
    },
    "100%":{
      scale:"1 1",
    },
  },
  "@keyframes modal-in":{
    "0%":{
      opaticy:0,
      visibility:"hidden",
      translate:"-50% -30%",
    },
    "60%":{
      opaticy:0,
      visibility:"hidden",
      translate:"-50% -30%",
    },
    "100%":{
      opaticy:1,
      visibility:"visible",
    },
  },
});