import { style } from "@vanilla-extract/css"
export const menuStyle = {
  h1: style({
    width: "fit-content",
    fontSize: "100px",
  }),
  wrap: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  }),
}
