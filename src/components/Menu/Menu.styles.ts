import { styled } from "@mui/system";

export const Container = styled("div")({
  background:"#121212",
  button:{
    background:"transparent",
    border:0,
    padding:0,
    cursor:"pointer",
  },
  ".sidebar":{
    position:"fixed",
    overflow:"hidden",
    top:0,
    left:0,
    width:"75px",
    height:"100%",
    background:"#3949ab",
    transition:"all 0.4s",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: 0,
    },
  },
  ".sidebarOpen":{
    width:"240px !important",
    position:"fixed",
    overflow:"hidden",
    top:0,
    left:0,
    height:"100%",
    background:"#3949ab",
    transition:"all 0.4s",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: 0,
    },
  },
  ".sidebar-inner":{
    position:"absolute",
    top:0,
    left:0,
    width:"300px",
  },
  ".sidebar-header":{
    display:"flex",
    alignItems:"center",
    height:"68px",
    padding:"0 1.25rem 0 0",
    background:"#3949ab",
    borderLeft:"3px solid transparent",
    transition:"all 0.4s",
    ":hover":{
      borderLeft:"3px solid #bdbdbd",
    },
  },
  ".sidebar-burger":{
    width:"70px",
    height:"70px",
    display:"grid",
    placeItems:"center",
    i:{
      fontSize:"25px",
      color:"#f9f9f9",
      transition:"all 0.4s",
      ":hover":{
        color:"#bdbdbd",
      }
    },
  },
  ".sidebar-logo":{
    height:"30px",
    opacity:0,
    transition:"all 0.4s",
  },
  ".sidebar-logoOpen":{
    height:"30px",
    opacity:1,
    transition:"all 0.4s",
  },
  ".sidebar-menu":{
    display:"grid",
    button:{
      display:"flex",
      gap:"12px",
      alignItems:"center",
      height:"55px",
      fontFamily:"Ubuntu",
      fontSize:"16px",
      fontWeight:400,
      letterSpacing:"2px",
      lineHeight:1,
      padding:"0 22px",
      borderLeft:"3px solid transparent",
      transition:"all 0.4s",
      ":hover":{
        borderLeft:"3px solid #f9f9f9",
        i:{
          color:"#bdbdbd",
        },
        span:{
          color:"#bdbdbd",
          a:{
            color:"#bdbdbd",
          },
        },
      },
      i:{
        fontSize:"25px",
        color:"#f9f9f9",
        transition:"all 0.4s",
      },
    },
  },
  ".has-border":{
    paddingBottom:"1rem",
    borderBottom:"1px solid rgba(255, 255,255, 0.12) ",
    marginBottom:"1rem",
  },
  ".sidebar-span":{
    span:{
      color:"#f9f9f9",
      opacity:0,
      transition:"all 0.4s",
      a:{
        textDecoration:"none",
        color:"#f9f9f9",
        }
    },
  },
  ".sidebar-spanOpen":{
    span:{
      color:"#f9f9f9",
      opacity:1,
      transition:"all 0.4s",
      a:{
      textDecoration:"none",
      color:"#f9f9f9",
      }
    },
  },
});

