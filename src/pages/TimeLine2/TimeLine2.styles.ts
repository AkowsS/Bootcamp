import { styled } from "@mui/system";

export const Container = styled("div")({
  margin:0,
  boxSizing:"border-box",
  fontFamily:"Ubuntu",
  backgroundColor:"#78909c",
  padding:"10px",
  height:"100%",
  minHeight:"100vh",
  display:"flex",
  flexDirection:"column",
  h2:{
    margin:"20px 0 8px 30px",
    color:"#212121",
  }, 
  ".container":{
    display:"flex",
    justifyContent:"space-around",
    flexWrap:"wrap",
  },
  ".box-column":{
    marginTop:"15px",
    width:"320px",
  },
  ".box-header":{
    display:"flex",
    justifyContent:"space-between",
    listStyle:"none",
    marginBottom:"10px",
    span:{
      marginLeft:"5px",
      backgroundColor:"#fff",
      color:"#1976d2",
      padding:"3px 6px",
      borderRadius:"3px",
      cursor:"pointer",
    },
    i:{
      marginRight:"5px",
      color:"#fff",
      cursor:"pointer",
    },
  },
  ".box":{
    backgroundColor:"#fff",
    padding:"7px 20px",
    borderRadius:"8px",
    height:"142px",
    margin:"15px 5px",
    transition:"all 0.2s",
    ":hover":{
      transform:"translateY(-3px)",
      boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.23)",
    },
    p:{
      margin:"2px 0 15px",
      fontSize:"14px",
      fontWeight:400,
    },
  },
  ".tag":{
    padding:"5px 8px",
    fontSize:"13px",
    fontWeight:"bold",
    color:"#fff",
    lineHeight:"50px",
    borderRadius:"4px",
  },
  "#red":{
    backgroundColor:"#f44336",
  },
  "#green":{
    backgroundColor:"#4caf50",
  },
  "#yellow":{
    backgroundColor:"#fbc02d",
  },
  ".box-footer":{
    display:"flex",
    listStyle:"none",
    justifyContent:"space-between",
    marginTop:"10px",
    fontSize:"14px",
    color:"#757575",
    i:{
      marginRight:"5px",
    },
  },
  ".comment":{
    display:"flex",
    alignItems:"center",
  },
  ".date":{
    display:"flex",
  },
});