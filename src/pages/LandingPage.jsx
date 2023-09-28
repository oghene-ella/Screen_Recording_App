import Navbar from "../components/navbar/Navbar.jsx"
import Header from "../components/LandingPage/Header.jsx"
import Line from "../components/LandingPage/Line.jsx"
import Features from "../components/LandingPage/Features"
import Works from "../components/LandingPage/Works.jsx"
import Footer from "../components/footer/Footer.jsx"

const LandingPage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Line />
      <Features />
      <Line />
      <Works />
      <Footer />

    </section>
  )
}

export default LandingPage