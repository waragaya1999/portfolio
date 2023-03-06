import WorksPresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function Works() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  return (
    <WorksPresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
    />
  )
}
