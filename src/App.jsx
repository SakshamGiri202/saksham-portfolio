import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"




function App() {
  return (
    <>
      <div className="bg-zinc-900">
        <Navbar />
        <Home />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
