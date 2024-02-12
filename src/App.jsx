import { useSelector } from "react-redux"
import Cards from "./components/card/Cards"
import Head from "./components/header/Head"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Fav from "./components/favori/Fav"


function App() {
  const value = useSelector(store => store.counter.value)
  return (

    <div className="container mx-auto p-1">
      <Router>
        <Head value={value} />
        <Routes>
          <Route path="/" element={<Cards />}/>
        </Routes>
        <Routes>
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
