import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/examples/Home";
import Contact from "./components/examples/Contact";
import About from "./components/examples/About"
import Layout from "./components/examples/Layout"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
