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
    top: "-20%",
  }),
  h2: style({
    fontSize: "clamp(40px, calc(2.5rem + ((1vw - 7px) * 5.7377)), 110px)",
    fontWeight: "400",
    paddingTop: "15%",
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
  skill: style({
    width: "45%",
    display: "flex",
    flexWrap: "wrap",
    fontSize: "18px",
  }),
  skillSpan: style({
    width: "100%",
    color: "#000",
    marginBottom: "5%",
  }),
  a: style({
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    color: "#000",
    marginBottom: "5%",
    marginRight: "5%",
  }),
  career: style({
    width: "45%",
    fontSize: "18px",
  }),
  p: style({
    marginBottom: "8%",
  }),
  span: style({
    fontSize: "18px",
  }),
  hr: style({
    width: "100%",
    marginTop: "0",
  }),
  svg: style({
    height: "35px",
    maxWidth: "40px",
    paddingRight: "10px",
  }),
  intro: style({
    fontSize: "16px",
    lineHeight: "2",
  }),
}
