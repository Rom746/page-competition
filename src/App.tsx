import Benefit from 'container/Benefit';
import About from 'container/About';
import Header from 'container/Header';
import Hero from 'container/Hero';
import Plan from 'container/Plan';
import Certificate from 'container/Certificate';
import './style/App.scss';
import Registration from 'container/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Benefit />
      <Plan />
      <Certificate />
      <Registration />
    </div>
  );
}

export default App;
