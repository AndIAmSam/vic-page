import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Promise from './components/Promise';
import Statement from './components/Statement';
import Approach from './components/Approach';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Promise />
      <Statement />
      <Approach />
      <Trust />
      <CTA />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
