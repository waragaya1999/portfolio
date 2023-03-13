import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About/container"
import Contact from "./components/Contact/container"
import Home from "./components/Home/container"
import Works from "./components/Works/container"
import WorksDetail from "./components/WorksDetail/container"
import "./styles/app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/works"} element={<Works />} />
        <Route path={"/works/:name"} element={<WorksDetail />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
