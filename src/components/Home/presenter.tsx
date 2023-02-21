import { headerStyle } from "../../styles/header.css"

type Props = {
  height: number
}
export default function HomePresenter({ height }: Props) {
  return (
    <>
      <div className={headerStyle.hamburger} style={{ height: "100px" }}>
        <span className={headerStyle.item}></span>
        <span className={headerStyle.item}></span>
        <span className={headerStyle.item}></span>
      </div>
    </>
  )
}
