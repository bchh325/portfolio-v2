import './App.css';
import Contact from './components/Contact';
import IconLinks from './components/IconLinks';
import NavBar from './components/NavBar';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <NavBar />
      <IconLinks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
