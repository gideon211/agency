import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Blog from './components/Blog.jsx'
import Newsletter from './components/Newsletter.jsx'
import Myfooter from './components/Myfooter.jsx'
import './index.css';

function App() {

  return (
    <div>
        <Navbar  />
          <div id='home'><Home /></div>
        <div id='service'><Services /></div>
        <div id='about'><About /></div>
        <div id='product'><Products /></div>
        <div id='blog'><Blog /> </div>'
        <div id='Newsletter'><Newsletter /> </div>
        <Myfooter />
       
        
    </div>
  );
}

export default App;
