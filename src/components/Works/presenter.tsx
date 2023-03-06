import { useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { ReactComponent as Champ } from "/public/champions.svg"
import { ReactComponent as Keisyo } from "/public/keisyo.svg"
import { ReactComponent as Pole } from "/public/telegraphPole.svg"
import { ReactComponent as Cafe } from "/public/cafeDePARIS.svg"
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
  const [worksTopHeight, setWorksTopHeight] = useState<number | undefined>()
  const [worksBottomHeight, setWorksBottomHeight] = useState<
    number | undefined
  >()
  const [worksBottomChild1Height, setWorksBottomChild1Height] = useState<
    number | undefined
  >()
  const [worksBottomChild2Height, setWorksBottomChild2Height] = useState<
    number | undefined
  >()
  const [keisyoHeight, setKeisyoHeight] = useState<number | undefined>()
  const pole1 = useAnimation()
  const pole2 = useAnimation()
  const champ = useAnimation()
  const cafe = useAnimation()
  const keisyo1 = useAnimation()
  const keisyo2 = useAnimation()

  useEffect(() => {
    setWorksTopHeight(document.getElementById("topSquare")?.clientWidth)
    setWorksBottomChild1Height(
      document.getElementById("worksBottomChild")?.clientWidth,
    )
    const target0 = document.getElementById("worksBottomChild")
    if (target0 != null) {
      if (target0.clientWidth != undefined) {
        setKeisyoHeight((target0.clientWidth * 0.94) / 6)
      }
    }
    const target1 = document.getElementById("bottomLeft")
    const target2 = document.getElementById("bottomLeft")
    if (target1 != null) {
      if (target1.clientWidth != undefined) {
        setWorksBottomHeight(target1.clientWidth * 2)
        if (target2 != null) {
          if (target2.clientWidth != undefined) {
            setWorksBottomChild2Height(
              target1.clientWidth * 2 - target2.clientWidth,
            )
          }
        }
      }
    }
  })
  return (
    <>
      <div className={worksStyle.wrap}>
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
                pole1.start({ y: 500 })
                pole2.start({ y: -500 })
              }}
              onMouseLeave={() => {
                pole1.start({ y: 0 })
                pole2.start({ y: 0 })
              }}
            >
              <div
                className={worksStyle.innerRow}
                style={{ backgroundImage: "url(/pole.png)" }}
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
                  transition={{ ease: "easeInOut", duration: "1.5" }}
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
                  transition={{ ease: "easeInOut", duration: "1.5" }}
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
                style={{ backgroundImage: "url(/champions.png)" }}
                onMouseEnter={() => {
                  champ.start({ y: -500 })
                }}
                onMouseLeave={() => {
                  champ.start({ y: 0 })
                }}
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
                  backgroundImage: "url(/cafe.png)",
                }}
                onMouseEnter={() => {
                  cafe.start({ x: 500 })
                }}
                onMouseLeave={() => {
                  cafe.start({ x: 0 })
                }}
                onClick={() => {
                  alert()
                }}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                  animate={cafe}
                  transition={{ ease: "easeInOut", duration: "1.5" }}
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
                  keisyo1.start({ x: -1500 })
                  keisyo2.start({ x: 1500 })
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
              >
                <div className={worksStyle.innerColumn}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
