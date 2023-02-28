import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/container"
import Menu from "./components/Menu/container"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/m"} element={<Menu />} />
        {/* <Route path={"/test"} element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
