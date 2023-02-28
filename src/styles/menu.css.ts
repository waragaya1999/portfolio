import { style } from "@vanilla-extract/css"
export const menuStyle = {
  wrap: style({
    width: "90%",
    height: "97%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    overflowX: "hidden",
    margin: "0 auto",
    marginTop: "3%",
  }),
  h1: style({
    width: "fit-content",
    fontSize: "100px",
    fontWeight: "400",
    cursor: "pointer",
  }),
  fixed: style({
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundColor: "#fff",
    zIndex: "100",
  }),
  close: style({
    width: "70px",
    height: "6px",
    position: "fixed",
    backgroundColor: "#000",
    right: "2vw",
    top: "5%",
  }),
  hr: style({
    borderTop: "4px solid #000",
  }),
}
