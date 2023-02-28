import { ReactComponent as Logo } from "../../images/portfolio.svg"
import { homeStyle } from "../../styles/home.css"
import Header from "../Header/container"
import Menu from "../Menu/container"

type Props = {
  menuCalled: boolean
  handleMenuCalled: (bool: boolean) => void
  windowWidth: number
  windowHeight: number
}

export default function HomePresenter({
  menuCalled,
  handleMenuCalled,
  windowHeight,
}: Props) {
  return (
    <>
      {menuCalled && <Menu handleMenuCalled={handleMenuCalled} />}
      <Header handleMenuCalled={handleMenuCalled} />
      <div
        style={{
          height: windowHeight,
        }}
        className={homeStyle.home}
      >
        <div className={homeStyle.name}>
          <h1 className={homeStyle.h1}>WARAGAYA</h1>
          <h1 className={homeStyle.h1}>NORITAKA</h1>
        </div>
        <div className={homeStyle.logo}>
          <Logo />
        </div>
      </div>
    </>
  )
}
