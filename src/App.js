import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer"

function App() {
  const name='John Doe '
  const test="About"
  const tab=[
    {
        image:"https://5y8tr.csb.app/images/proj.png",
        titre:"Projet 1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
        link:"Github Link"
    },
    {
        image:"https://5y8tr.csb.app/images/proj.png",
        titre:"Projet 2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
        link:"Github Link"
    },
    {
        image:"https://5y8tr.csb.app/images/proj.png",
        titre:"Projet 3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
        link:"Github Link"
    },
    {
        image:"https://5y8tr.csb.app/images/proj.png",
        titre:"Projet 4",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
        link:"Github Link"
    }
]
  return (
    <div >
      <NavBar test={test}/>
      <Introduction name={name} />
      <Projects  tab={tab}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
