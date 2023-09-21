import Navbar from '../navbar';
import Footer from '../footer';
import Product from '../Product';
import Team from '../team';
import Value from '../Values';
import About from '../About';
import Hero from '../landingPage';
function Layout({children}) {
  return (
    <div>
     
      <Navbar/>
      <Hero />
      < About />
      <Value />
      < Product />
      < Team />
      <Footer/>
      
    
    </div>
  );
}

export default Layout;
