import { style } from "@vanilla-extract/css"
export const contactStyle = {
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
    fontSize: "clamp(140px, calc(8.75rem + ((1vw - 7px) * 19.6721)), 380px)",
    fontWeight: "400",
    left: "6%",
    top: "-15%",
  }),
  h2First: style({
    fontSize: "clamp(40px, calc(2.5rem + ((1vw - 7px) * 5.7377)), 110px)",
    fontWeight: "400",
    paddingTop: "15%",
    marginLeft: "2%",
  }),
  h2: style({
    fontSize: "clamp(40px, calc(2.5rem + ((1vw - 7px) * 5.7377)), 110px)",
    fontWeight: "400",
    paddingTop: "5%",
    marginLeft: "2%",
  }),
  h2End: style({
    fontSize: "clamp(40px, calc(2.5rem + ((1vw - 7px) * 5.7377)), 110px)",
    fontWeight: "400",
    paddingTop: "5%",
    paddingBottom: "2%",
    marginLeft: "2%",
  }),
}
