import { style } from "@vanilla-extract/css"
export const homeStyle = {
  hamburger: style({
    width: "100px",
    backgroundColor: "#fff",
  }),
  home: style({
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
  }),
  h1: style({
    width: "100%",
    height: "fit-content",
    minHeight: "0vw",
    fontFamily: "Futura, 'Century Gothic'",
    fontSize: "clamp(80px, calc(5rem + ((1vw - 7px) * 13.3333)), 200px)",
    fontWeight: "100",
    margin: "5vh 0 0 4vw",
  }),
  logo: style({
    alignSelf: "flex-end",
    margin: "0 auto",
    position: "fixed",
  }),
}
