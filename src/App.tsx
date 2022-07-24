import About from 'container/About';
import Header from 'container/Header';
import Hero from 'container/Hero';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
