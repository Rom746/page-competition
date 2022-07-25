import Benefit from 'container/Benefit';
import About from 'container/About';
import Header from 'container/Header';
import Hero from 'container/Hero';
import Plan from 'container/Plan';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Benefit />
      <Plan />
    </div>
  );
}

export default App;
