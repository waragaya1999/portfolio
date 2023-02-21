import HomePresenter from "./presenter"

export default function Home() {
  const height = window.innerHeight
  return <HomePresenter height={height} />
}
