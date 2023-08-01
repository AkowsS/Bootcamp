import { styled } from "@mui/system";

export const Container = styled("div")({
  margin:0,
  borderRadius:"20px",
  display:"grid",
  placeItems:"center",
  background:"#000",
  height:"100%",
  ".pager":{
    width:"250px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    button:{
      flex:"0 0 42px",
      height:"42px",
      border:0,
      padding:"6px",
      background:"transparent",
      cursor:"pointer",
      transition:"0.4s",
      ":focus":{
        flex:"0 0 80px",
        span:{
          background:"#00c853 !important",
        },
      },
    },
    span:{
      display:"block",
      height:"30px",
      width:"100%",
      borderRadius:"15px",
      background:"#383142",
      transition:"0.4s",
    },
  },
});