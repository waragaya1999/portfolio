import HomePresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function Home() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  return (
    <HomePresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
      windowWidth={windowWidth}
      windowHeight={windowHeight}
    />
  )
}
