import { AnimatePresence, motion } from "framer-motion"
import { aboutStyle } from "../../styles/about.css"
import Header from "../Header/container"
import HomePresenter from "../Home/presenter"
import Menu from "../Menu/container"
import { ReactComponent as CSS } from "/public/CSS3.svg"
import { ReactComponent as HTML } from "/public/HTML5.svg"
import { ReactComponent as Illustrator } from "/public/Illustrator.svg"
import { ReactComponent as JavaScript } from "/public/JavaScript.svg"
import { ReactComponent as NodeJs } from "/public/NodeJs.svg"
import { ReactComponent as Photoshop } from "/public/Photoshop.svg"
import { ReactComponent as PHP } from "/public/PHP.svg"
import { ReactComponent as React } from "/public/React.svg"
import { ReactComponent as Sass } from "/public/Sass.svg"
import { ReactComponent as TypeScript } from "/public/TypeScript.svg"
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
        <div className={aboutStyle.skill}>
          <p className={aboutStyle.skillSpan}>Skills:</p>
          <hr className={aboutStyle.hr} />
          <p className={aboutStyle.a}>
            <HTML className={aboutStyle.svg} />
            HTML
          </p>
          <p className={aboutStyle.a}>
            <CSS className={aboutStyle.svg} />
            CSS
          </p>
          <p className={aboutStyle.a}>
            <Sass className={aboutStyle.svg} />
            Sass
          </p>
          <p className={aboutStyle.a}>
            <JavaScript className={aboutStyle.svg} />
            JavaScript
          </p>
          <p className={aboutStyle.a}>
            <TypeScript className={aboutStyle.svg} />
            TypeScript
          </p>
          <p className={aboutStyle.a}>
            <React className={aboutStyle.svg} />
            React
          </p>
          <p className={aboutStyle.a}>
            <NodeJs className={aboutStyle.svg} />
            Node.js
          </p>
          <p className={aboutStyle.a}>
            <PHP className={aboutStyle.svg} />
            PHP
          </p>
          <p className={aboutStyle.a}>
            <Illustrator className={aboutStyle.svg} />
            Illustrator
          </p>
          <p className={aboutStyle.a}>
            <Photoshop className={aboutStyle.svg} />
            Photoshop
          </p>
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
            <span className={aboutStyle.span}>趣味</span>&nbsp;&nbsp; オーディオ
          </p>
          <hr className={aboutStyle.hr} />
          <p className={aboutStyle.intro}>
            幅広い知識を持つエンジニアになりたいと考えています。
            新しい技術やフレームワークに触れ、技術力を高められるよう勉強していきたいです。
          </p>
        </div>
      </div>
    </div>
  )
}
