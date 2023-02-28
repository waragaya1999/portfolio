import { headerStyle } from "../../styles/header.css"
import { ReactComponent as Logo } from "../../images/portfolio.svg"
import { homeStyle } from "../../styles/home.css"

type Props = {
  windowWidth: number
  windowHeight: number
}
export default function HomePresenter({ windowWidth, windowHeight }: Props) {
  return (
    <>
      <header
        className={headerStyle.hamburger}
        onMouseEnter={() => {
          document.getElementById("item1")?.classList.add(headerStyle.scaleX20x)
          document.getElementById("item2")?.classList.add(headerStyle.scaleX17x)
          document.getElementById("item3")?.classList.add(headerStyle.scaleX14x)
        }}
        onMouseLeave={() => {
          document
            .getElementById("item1")
            ?.classList.remove(headerStyle.scaleX20x)
          document
            .getElementById("item2")
            ?.classList.remove(headerStyle.scaleX17x)
          document
            .getElementById("item3")
            ?.classList.remove(headerStyle.scaleX14x)
        }}
      >
        <span className={headerStyle.item1} id="item1"></span>
        <span className={headerStyle.item2} id="item2"></span>
        <span className={headerStyle.item3} id="item3"></span>
      </header>
      <div
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        className={homeStyle.home}
      >
        <div>
          <h1 className={homeStyle.h1}>WARAGAYA</h1>
          <h1 className={homeStyle.h1}>NORITAKA</h1>
        </div>
        <div
          style={{
            width: windowWidth * 0.99,
          }}
          className={homeStyle.logo}
        >
          <Logo />
        </div>
      </div>
    </>
  )
}
