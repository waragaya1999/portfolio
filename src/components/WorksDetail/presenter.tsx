import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { worksStyle } from "../../styles/works.css"
import Header from "../Header/container"
import HomePresenter from "../Home/presenter"
import Menu from "../Menu/container"
type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "menuCalled" | "handleMenuCalled"
>

export default function WorksDetailPresenter({
  menuCalled,
  handleMenuCalled,
}: Props) {
  const location = useLocation()
  console.log(location.pathname)

  return (
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
      <div
        className={worksStyle.innerColumn}
        style={{
          width: "98%",
          backgroundImage: "url(/portfolio.png)",
        }}
      ></div>
    </div>
  )
}
