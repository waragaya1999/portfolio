import AboutPresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function About() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  return (
    <AboutPresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
    />
  )
}
