import React, { useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { ReactComponent as Champ } from "/public/champions.svg"
import { ReactComponent as Keisyo } from "/public/keisyo.svg"
import { ReactComponent as Pole } from "/public/telegraphPole.svg"
import { ReactComponent as Cafe } from "/public/cafeDePARIS.svg"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from "../../images/portfolio.svg"
import { worksStyle } from "../../styles/works.css"
import Header from "../Header/container"
import HomePresenter from "../Home/presenter"
import Menu from "../Menu/container"

type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "menuCalled" | "handleMenuCalled"
>
export default function WorksPresenter({
  menuCalled,
  handleMenuCalled,
}: Props) {
  const [worksTopHeight, setWorksTopHeight] = useState<number>(0)
  const [worksBottomHeight, setWorksBottomHeight] = useState<number>(0)
  const [worksBottomChild1Height, setWorksBottomChild1Height] =
    useState<number>(0)
  const [worksBottomChild2Height, setWorksBottomChild2Height] =
    useState<number>(0)
  const [keisyoHeight, setKeisyoHeight] = useState<number>(0)
  const navigate = useNavigate()
  const pole1 = useAnimation()
  const pole2 = useAnimation()
  const champ = useAnimation()
  const cafe = useAnimation()
  const keisyo1 = useAnimation()
  const keisyo2 = useAnimation()
  const logo = useAnimation()

  useEffect(() => {
    const topSquare = document.getElementById("topSquare")
    const worksBottomChild = document.getElementById("worksBottomChild")
    const bottomLeft = document.getElementById("bottomLeft")
    if (topSquare) {
      setWorksTopHeight(topSquare.clientWidth)
    }
    if (worksBottomChild) {
      setWorksBottomChild1Height(worksBottomChild.clientWidth)
      setKeisyoHeight((worksBottomChild.clientWidth * 0.94) / 6)
      if (bottomLeft) {
        setWorksBottomHeight(bottomLeft.clientWidth * 2)
        setWorksBottomChild2Height(
          bottomLeft.clientWidth * 2 - worksBottomChild.clientWidth,
        )
      }
    }
  })
  const [width, setWidth] = useState(0)
  const ref = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((el) => {
        setWidth(el.contentRect.width)
      })
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <div className={worksStyle.wrap} ref={ref}>
        <AnimatePresence>
          {menuCalled && (
            <motion.div exit={{ opacity: 0 }} key="content">
              <Menu handleMenuCalled={handleMenuCalled} />
            </motion.div>
          )}
        </AnimatePresence>
        <Header handleMenuCalled={handleMenuCalled} />
        <h1 className={worksStyle.h1}>WORKS</h1>
        <div className={worksStyle.works}>
          <div
            className={worksStyle.top}
            style={{
              height: worksTopHeight,
            }}
          >
            <div
              id="topSquare"
              className={worksStyle.topSquare}
              onMouseEnter={() => {
                pole1.start({ y: worksTopHeight })
                pole2.start({ y: -worksTopHeight })
              }}
              onMouseLeave={() => {
                pole1.start({ y: 0 })
                pole2.start({ y: 0 })
              }}
            >
              <div
                className={worksStyle.innerRow}
                style={{ backgroundImage: "url(/pole.png)" }}
                onClick={() => navigate("/works/tele")}
              >
                <motion.div
                  style={{
                    width: "58%",
                    display: "flex",
                    flexShrink: "0",
                    backgroundColor: "#fff",
                    marginLeft: "-9%",
                  }}
                  animate={pole1}
                  transition={{ ease: "easeInOut", duration: "1.2" }}
                >
                  <Pole
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{
                    width: "58%",
                    display: "flex",
                    flexShrink: "0",
                    backgroundColor: "#fff",
                  }}
                  animate={pole2}
                  transition={{ ease: "easeInOut", duration: "1.2" }}
                >
                  <Pole
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </motion.div>
              </div>
            </div>
            <div className={worksStyle.topRight}>
              <div
                className={worksStyle.innerRow}
                style={{
                  width: "96.6%",
                  backgroundImage: "url(/champions.png)",
                }}
                onMouseEnter={() => {
                  champ.start({ y: -worksTopHeight })
                }}
                onMouseLeave={() => {
                  champ.start({ y: 0 })
                }}
                onClick={() => navigate("/works/champions")}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                  animate={champ}
                  transition={{ ease: "easeInOut", duration: "1" }}
                >
                  <Champ />
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className={worksStyle.bottom}
            style={{
              height: worksBottomHeight,
            }}
          >
            <div id="bottomLeft" className={worksStyle.bottomLeft}>
              <div
                className={worksStyle.innerRow}
                style={{
                  height: "97%",
                  backgroundImage: "url(/cafe.png)",
                }}
                onMouseEnter={() => {
                  cafe.start({ x: worksBottomChild1Height })
                }}
                onMouseLeave={() => {
                  cafe.start({ x: 0 })
                }}
                onClick={() => navigate("/works/cafeDePARIS")}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                  animate={cafe}
                  transition={{ ease: "easeInOut", duration: "1.2" }}
                >
                  <Cafe />
                </motion.div>
              </div>
            </div>
            <div className={worksStyle.bottomRight}>
              <div
                id="worksBottomChild"
                className={worksStyle.bottomRight1}
                style={{ height: worksBottomChild1Height }}
              >
                <div className={worksStyle.innerColumn}></div>
              </div>
              <div
                className={worksStyle.bottomRight2}
                style={{
                  height: worksBottomChild1Height,
                }}
                onMouseEnter={() => {
                  keisyo1.start({ x: -worksBottomChild1Height * 2.5 })
                  keisyo2.start({ x: worksBottomChild1Height * 2.5 })
                }}
                onMouseLeave={() => {
                  keisyo1.start({ x: 0 })
                  keisyo2.start({ x: 0 })
                }}
              >
                <div
                  className={worksStyle.innerColumn}
                  style={{
                    backgroundImage: "url(/keisyo.png)",
                  }}
                  onClick={() => navigate("/works/keisyo")}
                >
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo1}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo2}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                        marginLeft: "-60%",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo1}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                        marginLeft: "-25%",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo2}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                        marginLeft: "-110%",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo1}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                        marginLeft: "-50%",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      height: keisyoHeight,
                    }}
                    animate={keisyo2}
                    transition={{ ease: "easeInOut", duration: "2.5" }}
                  >
                    <Keisyo
                      style={{
                        height: "100%",
                        flexShrink: "0",
                        marginLeft: "-85%",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              <div
                className={worksStyle.bottomRight3}
                style={{ height: worksBottomChild2Height }}
                onMouseEnter={() => {
                  logo.start({ y: worksBottomChild2Height })
                }}
                onMouseLeave={() => {
                  logo.start({ y: 0 })
                }}
              >
                <div
                  className={worksStyle.innerColumn}
                  style={{
                    width: "98%",
                    backgroundImage: "url(/portfolio.png)",
                  }}
                  onClick={() => navigate("/works/portfolio")}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      textAlign: "center",
                      backgroundColor: "#fff",
                    }}
                    animate={logo}
                    transition={{ ease: "easeInOut", duration: "1" }}
                  >
                    <Logo style={{ height: "100%" }} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
