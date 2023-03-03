import About from "./components/about"
// import Contact from "./components/contact"
import './App.css';
import Navbar from "./components/navbar";
import ProjectGallery from "./components/projectGallery";


function App() {
  return (
    <main className="App">
      <Navbar></Navbar>
      <About></About>
      <ProjectGallery></ProjectGallery>
    </main>
  );
}

export default App;
