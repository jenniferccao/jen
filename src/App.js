import Home from './Pages/home.jsx';

import About from './Pages/about.jsx';
import Projects from './Pages/projects.jsx';
import Design from './Pages/design.jsx'
import Footer from './Pages/footer.jsx';
import './App.css';

import NavBar from './navbar.jsx';
import Contact from './contact.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <body>
        <Home />
        <About />
        <Projects />
        <Design />
        <Contact />
      </body>

      <Footer />

    </div>
  );
}

export default App;
