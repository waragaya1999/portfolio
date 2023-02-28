import { style } from "@vanilla-extract/css"
export const homeStyle = {
  home: style({
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
  }),
  name: style({
    lineHeight: "1.1",
    margin: "2vh 0 0 4vw",
  }),
  h1: style({
    width: "100%",
    height: "fit-content",
    minHeight: "0vw",
    fontSize: "clamp(80px, calc(6rem + ((1vw - 7px) * 13.3333)), 200px)",
    fontWeight: "400",
  }),
  logo: style({
    width: "99%",
    alignSelf: "flex-end",
    margin: "0 auto",
    position: "fixed",
  }),
}
