import { useState } from "react"

export const usePortfolio = () => {
  const [menuCalled, setMenuCalled] = useState<boolean>(false)
  const handleMenuCalled = (bool: boolean) => {
    setMenuCalled(bool)
  }
  return {
    menuCalled,
    handleMenuCalled,
  } as const
}
