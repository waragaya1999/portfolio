import { style } from "@vanilla-extract/css"
export const aboutStyle = {
  wrap: style({
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }),
  h1: style({
    width: "fit-content",
    height: "fit-content",
    minHeight: "0vw",
    position: "absolute",
    fontSize: "clamp(180px, calc(11.25rem + ((1vw - 7px) * 22.9508)), 460px)",
    fontWeight: "400",
    left: "6%",
    top: "-24%",
  }),
  h2: style({
    fontSize: "clamp(40px, calc(2.5rem + ((1vw - 7px) * 5.7377)), 110px)",
    fontWeight: "400",
    paddingTop: "10%",
    marginLeft: "2%",
  }),
  discography: style({
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    minWidth: "700px",
    width: "40%",
    marginTop: "5%",
  }),
  contact: style({
    width: "48%",
    fontSize: "18px",
  }),
  career: style({
    width: "48%",
    fontSize: "24px",
  }),
}
