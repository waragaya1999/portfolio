import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About/container"
import Home from "./components/Home/container"
import "./styles/app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        {/* <Route path={"/test"} element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
