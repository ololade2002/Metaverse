
import './App.css';
import About from './Component/About/About';
import Explore from './Component/Explore/Explore';
import Footer from './Component/Footer/Footer';
import Founder from './Component/Founder/Founder';
import Hero from './Component/Hero/Hero';
import Insight from './Component/Insight/Insight';
import Navbar from './Component/Navbar/Navbar';
import New from './Component/New/New';
import Work from './Component/Work/Work';
import World from './Component/World/World';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();


  return (
    <div className="App ">
   
     <Navbar/>
     <Hero/>
     <About/>
     <Explore/>
     <Work/>
     <New/>
     <World/>
     <Insight/>
     <Founder/>
     <Footer/>
    </div>
  );
}

export default App;
