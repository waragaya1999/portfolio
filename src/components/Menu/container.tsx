import MenuPresenter from "./presenter"
import HomePresenter from "../Home/presenter"
type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "handleMenuCalled"
>

export default function Menu({ handleMenuCalled }: Props) {
  return <MenuPresenter handleMenuCalled={handleMenuCalled} />
}
