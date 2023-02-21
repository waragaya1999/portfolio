import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home/container"
import Portfolio from "./components/Portfolio/container"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/test"} element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
