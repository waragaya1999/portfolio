import { style } from "@vanilla-extract/css"
export const headerStyle = {
  hamburger: style({
    width: "50px",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    top: "2%",
    right: "0",
    cursor: "pointer",
    zIndex: "99",
  }),
  item: style({
    width: "20px",
    height: "8px",
    display: "block",
    backgroundColor: "#000",
    transition: "1s",
    marginBottom: "18px",
  }),
}
