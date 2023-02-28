import HeaderPresenter from "./presenter"
import HomePresenter from "../Home/presenter"
type Props = Pick<
  React.ComponentProps<typeof HomePresenter>,
  "handleMenuCalled"
>

export default function Header({ handleMenuCalled }: Props) {
  return <HeaderPresenter handleMenuCalled={handleMenuCalled} />
}
