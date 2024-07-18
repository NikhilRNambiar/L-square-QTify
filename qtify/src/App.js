import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './Section/Section';

function App() {
  return (
    <div className="App ">
      
        <Navbar/>
        <Hero/>
        <Section title="Top Albums" />
      
    </div>
  );
}

export default App;
