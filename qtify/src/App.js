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
        <Section title="Top Albums" apiEndpoint={`https://qtify-backend-labs.crio.do/albums/top`} />
        <Section title="New Albums" apiEndpoint={` https://qtify-backend-labs.crio.do/albums/new`} />
        <Section title="Songs" apiEndpoint={` https://qtify-backend-labs.crio.do/songs`} isSongSection ={true} showCollapseButton = {false}/>
      
    </div>
  );
}

export default App;
