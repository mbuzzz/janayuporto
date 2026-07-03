import SparkleBg from './components/SparkleBg';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Milestones from './components/Milestones';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-pinkHighlight selection:text-navyOutline">
      <SparkleBg />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Gallery />
        <Milestones />
        <Guestbook />
      </main>

      <Footer />
    </div>
  );
}

export default App;