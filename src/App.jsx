import Header from "./components/Header/header";
import Home from "./components/Homepage/home";
import About from "./components/Aboutpage/about";
import Cards from "./components/Cards/cards";
import Skills from "./components/Skills/skill";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Home />

      </div>


      <div>

        <About />
      </div>



      <div>
        <Cards />

      </div>




      <div>

        <Skills />
      </div>





     <div>
        <Contact />

     </div>



      <footer>
        <Footer />
      </footer>
    </div>
  )
}