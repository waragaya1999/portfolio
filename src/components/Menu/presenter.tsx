import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Menu from "./container"
import { menuStyle } from "../../styles/menu.css"
type Props = React.ComponentProps<typeof Menu>

export default function MenuPresenter({ handleMenuCalled }: Props) {
  const [homeWidth, setHomeWidth] = useState<number | undefined>()
  const [aboutWidth, setAboutWidth] = useState<number | undefined>()
  const [worksWidth, setWorksWidth] = useState<number | undefined>()
  const [contactWidth, setContactWidth] = useState<number | undefined>()
  const navigate = useNavigate()
  const hrWidth1 = useAnimation()
  const hrWidth2 = useAnimation()
  const hrWidth3 = useAnimation()
  const hrWidth4 = useAnimation()

  useEffect(() => {
    setHomeWidth(document.getElementById("home")?.clientWidth)
    setAboutWidth(document.getElementById("about")?.clientWidth)
    setWorksWidth(document.getElementById("works")?.clientWidth)
    setContactWidth(document.getElementById("contact")?.clientWidth)
  }, [])

  return (
    <motion.div
      className={menuStyle.fixed}
      animate={{ x: [3000, 0] }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div onClick={() => handleMenuCalled(false)}>
        <motion.div className={menuStyle.close} animate={{ rotate: [45] }} />
        <motion.div className={menuStyle.close} animate={{ rotate: [-45] }} />
      </div>
      <div className={menuStyle.wrap}>
        <div>
          <h1
            id="home"
            className={menuStyle.h1}
            onMouseEnter={() => hrWidth1.start({ scaleX: 10 })}
            onMouseLeave={() => hrWidth1.start({ scaleX: 1 })}
            onClick={() => {
              navigate("/")
              handleMenuCalled(false)
            }}
          >
            HOME
          </h1>
          <motion.div
            className={menuStyle.hr}
            style={{ width: homeWidth }}
            animate={hrWidth1}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div>
          <h1
            id="about"
            className={menuStyle.h1}
            onMouseEnter={() => hrWidth2.start({ scaleX: 10 })}
            onMouseLeave={() => hrWidth2.start({ scaleX: 1 })}
            onClick={() => {
              navigate("/about")
            }}
          >
            ABOUT
          </h1>
          <motion.div
            className={menuStyle.hr}
            style={{ width: aboutWidth }}
            animate={hrWidth2}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div>
          <h1
            id="works"
            className={menuStyle.h1}
            onMouseEnter={() => hrWidth3.start({ scaleX: 10 })}
            onMouseLeave={() => hrWidth3.start({ scaleX: 1 })}
            onClick={() => {
              navigate("/works")
            }}
          >
            WORKS
          </h1>
          <motion.div
            className={menuStyle.hr}
            style={{ width: worksWidth }}
            animate={hrWidth3}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div>
          <h1
            id="contact"
            className={menuStyle.h1}
            onMouseEnter={() => hrWidth4.start({ scaleX: 10 })}
            onMouseLeave={() => hrWidth4.start({ scaleX: 1 })}
            onClick={() => {
              navigate("/contact")
            }}
          >
            CONTACT
          </h1>
          <motion.div
            className={menuStyle.hr}
            style={{ width: contactWidth }}
            animate={hrWidth4}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}
