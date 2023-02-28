import HomePresenter from "./presenter"

export default function Home() {
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  return <HomePresenter windowWidth={windowWidth} windowHeight={windowHeight} />
}
