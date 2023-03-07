import { BrowserRouter as Router } from "react-router-dom"
import Content from './components/Content'
import Header from "./components/Header"
import Home from "./pages/Home";

import Exercise from "./pages/Exercise"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Workout from "./pages/Workout";

import './App.scss';

function App() {

  const pages = [
    { name: "Kezdőlap", path: '/', menubar: true, element: <Home/> },   
    { name: "Gyakorlatok", path: '/exercise', menubar: true, element: <Exercise/> },
    { name: "Edzésterv", path: '/workout', menubar: true, element: <Workout/> },
    { name: "Kapcsolat", path: '/contact', menubar: true, element: <Contact/> },

  ]


  return (
    <div className="App">
      <Router>
        <Header menu={pages} />
        <Content routes={pages} />
        <Footer />
      </Router>


    </div>
  );
}

export default App;
