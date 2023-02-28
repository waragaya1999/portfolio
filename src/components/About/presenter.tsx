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
      {menuCalled && <Menu handleMenuCalled={handleMenuCalled} />}
      <Header handleMenuCalled={handleMenuCalled} />
      <h1 className={aboutStyle.h1}>ABOUT</h1>
      <h2 className={aboutStyle.h2}>WARAGAYA&nbsp;&nbsp;NORITAKA</h2>
      <div className={aboutStyle.discography}>
        <div className={aboutStyle.contact}>
          <a href="">Email:waragaya.n@gmail.com</a>
        </div>
        <div className={aboutStyle.career}>
          <p>1999年2月8日生まれ</p>
        </div>
      </div>
    </div>
  )
}
