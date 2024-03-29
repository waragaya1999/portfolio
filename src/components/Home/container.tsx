import HomePresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function Home() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  return (
    <HomePresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
    />
  )
}
