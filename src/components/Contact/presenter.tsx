import { AnimatePresence, motion } from "framer-motion"
import { contactStyle } from "../../styles/contact.css"
import Header from "../Header/container"
import HomePresenter from "../Home/presenter"
import Menu from "../Menu/container"
type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "menuCalled" | "handleMenuCalled"
>

export default function ContactPresenter({
  menuCalled,
  handleMenuCalled,
}: Props) {
  return (
    <div className={contactStyle.wrap}>
      <AnimatePresence>
        {menuCalled && (
          <motion.div exit={{ opacity: 0 }} key="content">
            <Menu handleMenuCalled={handleMenuCalled} />
          </motion.div>
        )}
      </AnimatePresence>
      <Header handleMenuCalled={handleMenuCalled} />
      <h1 className={contactStyle.h1}>CONTACT</h1>
      <h2 className={contactStyle.h2First}>Email:waragaya.n@gmail.com</h2>
      <h2 className={contactStyle.h2}>Instagram:waragaya_noritaka</h2>
      <h2 className={contactStyle.h2End}>Twitter:waragaya_noritaka</h2>
    </div>
  )
}
