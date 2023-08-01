import { styled } from "@mui/system";

export const DivExt = styled("div")(({theme})=>({
  height: "100vh",
  h2: {
    fontFamily: "Ubuntu",
    fontSize: "22px",
    fontWeight: 400,
    margin: "0 0 30px",
    color: "#2a3444",
  },
  ".footer": {
    color:"#7c7c7c",
    div:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    },
    a:{
      marginLeft:"0.5ch",
      color:"#216ce7",
      transition:"all 0.375s",
      ":hover":{
        color:"#143d81",
      },
    },
  },
  [theme.breakpoints.up(500)]: {
    padding:0,
  },
}));

export const Container = styled("div")({
  div: {
    boxSizing: "border-box",
  },
  height: "100%",
  display: "grid",
  placeItems: "center",
  margin: 0,
  padding: "0 32px",
  background: "#f5f5f5",
  fontFamily: "Ubuntu",
  animation: "rotate 6s infinite alternate linear",
});

export const DivSignup = styled("div")(({theme})=>({
  [theme.breakpoints.up(500)]: {
    margin:0,
    width:"360px",
  },
  zIndex: "3",
  position: "relative",
  overflow: "hidden",
  margin: "0 20px",
  padding: "160px 30px 38px",
  borderRadius: "1.25rem",
  background: "#ffffff",
  textAlign: "center",
  boxShadow: "0 100px 100px rgb(0 0 0 / 10%)",
  width: "100%",
  ".card": {
    content: '""',
    position: "absolute",
    background: "#216ce7",
    top: "-880px",
    left: "50%",
    width: "1000px",
    height: "1000px",
    borderRadius: "50%",
    translate: "-50% 0",

  },
  ".logo": {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    height: "64px",
    width: "64px",
    top: "30px",
    left: "50%",
    translate: "-50% 0",
    i: {
      fontSize: "50px",
      color: "#216ce7",
      fontWeight: 500,
    },
  },
}));

export const FormDiv = styled("form")({
  margin: "0 0 30px",
  display: "grid",
  gap: "18px",
  ".inputEbutton": {
    height: "50px",
    borderRadius: "28px",
  },
  input: {
    border: "2px solid #e0e0e0",
    fontSize: "16px",
    padding: "0 24px",
    color: "#11274c",
    transition: "all 0.375s",
    ":hover": {
      border: "2px solid #000",
    },
    "::placeholder": {
      color: "#cac8c8",
    },
  },
  button: {
    cursor: "pointer",
    padding: "0 16px",
    background: "#216ce7",
    color: "#f9f9f9",
    border: 0,
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "2px",
    transition: "all 0.375s",
    ":hover": {
      color: "#fff",
      background: "#143d81",
    },
  },
});

export const CircleBefore = styled("div")({
  position: "fixed",
  zIndex: "1",
  top: "-50vmin",
  left: "-50vmin",
  width: "100vmin",
  height: "100vmin",
  borderRadius: "47% 53% 61% 39% / 45% 51% 49% 55%",
  background: "#65c8ff",
});

export const CircleAfter = styled("div")({
  position: "fixed",
  marginTop: "50px",
  zIndex: "1",
  bottom: "-50vmin",
  right: "-50vmin",
  width: "100vmin",
  height: "100vmin",
  borderRadius: "47% 53% 61% 39% / 45% 51% 49% 55%",
  background: "#143d81",
});
