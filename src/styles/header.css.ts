import { style } from "@vanilla-extract/css"
export const headerStyle = {
  hamburger: style({
    width: "50px",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    top: "2%",
    right: "0",
  }),
  item1: style({
    width: "20px",
    height: "8px",
    display: "block",
    backgroundColor: "#000",
    transition: "1s",
    marginBottom: "18px",
  }),
  item2: style({
    width: "20px",
    height: "8px",
    display: "block",
    backgroundColor: "#000",
    transition: ".75s",
    marginBottom: "18px",
  }),
  item3: style({
    width: "20px",
    height: "8px",
    display: "block",
    backgroundColor: "#000",
    transition: ".5s",
  }),
  scaleX20x: style({
    transform: "scaleX(10)",
  }),
  scaleX17x: style({
    transform: "scaleX(8.5)",
  }),
  scaleX14x: style({
    transform: "scaleX(7)",
  }),
}
