import ContactPresenter from "./presenter"
import { usePortfolio } from "../../hooks/usePortfolio"

export default function Contact() {
  const { menuCalled, handleMenuCalled } = usePortfolio()
  return (
    <ContactPresenter
      menuCalled={menuCalled}
      handleMenuCalled={handleMenuCalled}
    />
  )
}
