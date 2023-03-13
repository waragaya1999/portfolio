import WorksDetailPresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function WorksDetail() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  return (
    <WorksDetailPresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
    />
  )
}
