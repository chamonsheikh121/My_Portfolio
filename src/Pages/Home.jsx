import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Project";
import Skills from "../Components/Skills";
import Testimonials from "../Components/Testimonials";
// import Contact from './../Components/Contact';

const Home = () => {

    return <div>
        <Header />

        <div className="">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>

    </div>
}


export default Home;