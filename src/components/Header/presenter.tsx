import { motion, useAnimation } from "framer-motion"
import Header from "./container"
import { headerStyle } from "../../styles/header.css"

type Props = React.ComponentProps<typeof Header>

export default function HeaderPresenter({ handleMenuCalled }: Props) {
  const control1 = useAnimation()
  const control2 = useAnimation()
  const control3 = useAnimation()
  return (
    <>
      <header
        className={headerStyle.hamburger}
        onMouseEnter={() => {
          control1.start({ scaleX: 9 })
          control2.start({ scaleX: 7 })
          control3.start({ scaleX: 5 })
        }}
        onMouseLeave={() => {
          control1.start({ scaleX: 1 })
          control2.start({ scaleX: 1 })
          control3.start({ scaleX: 1 })
        }}
        onClick={() => handleMenuCalled(true)}
      >
        <motion.div
          className={headerStyle.item}
          animate={control1}
          transition={{ ease: "easeInOut", duration: "0" }}
        />
        <motion.div
          className={headerStyle.item}
          animate={control2}
          transition={{ ease: "easeInOut", duration: "0" }}
        />
        <motion.div
          className={headerStyle.item}
          animate={control3}
          transition={{ ease: "easeInOut", duration: "0" }}
        />
      </header>
    </>
  )
}
