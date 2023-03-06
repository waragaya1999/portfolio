import { AnimatePresence, motion } from "framer-motion"
import { aboutStyle } from "../../styles/about.css"
import Header from "../Header/container"
import HomePresenter from "../Home/presenter"
import Menu from "../Menu/container"
type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "menuCalled" | "handleMenuCalled"
>

export default function AboutPresenter({
  menuCalled,
  handleMenuCalled,
}: Props) {
  return (
    <div className={aboutStyle.wrap}>
      <AnimatePresence>
        {menuCalled && (
          <motion.div exit={{ opacity: 0 }} key="content">
            <Menu handleMenuCalled={handleMenuCalled} />
          </motion.div>
        )}
      </AnimatePresence>
      <Header handleMenuCalled={handleMenuCalled} />
      <h1 className={aboutStyle.h1}>ABOUT</h1>
      <h2 className={aboutStyle.h2}>WARAGAYA&nbsp;&nbsp;NORITAKA</h2>
      <div className={aboutStyle.discography}>
        <div className={aboutStyle.contact}>
          <p className={aboutStyle.a}>Email:waragaya.n@gmail.com</p>
          <p className={aboutStyle.a}>Instagram:waragaya_noritaka</p>
          <p className={aboutStyle.a}>Twitter:waragaya_noritaka</p>
        </div>
        <div className={aboutStyle.career}>
          <p className={aboutStyle.p}>
            <span className={aboutStyle.span}>生年月日</span>
            &nbsp;&nbsp;1999年2月8日
          </p>
          <p className={aboutStyle.p}>
            <span className={aboutStyle.span}>出身地</span>&nbsp;&nbsp;横浜市
          </p>
          <p className={aboutStyle.p}>
            <span className={aboutStyle.span}>趣味</span>&nbsp;&nbsp;カメラ,
            オーディオ
          </p>
        </div>
      </div>
      {/* <hr />
      <p className={aboutStyle.p}>skill&nbsp;&nbsp;html</p> */}
    </div>
  )
}
