import './App.css';
import Contact from './components/Contact';
import Fireflies from './components/Fireflies';
import IconLinks from './components/IconLinks';
import NavBar from './components/NavBar';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PersonalInfo />
      <IconLinks />
      <Projects />
      <Fireflies />
      <Contact />
    </div>
  );
}

export default App;
