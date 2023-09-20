import Navbar from '../navbar';
import Footer from '../footer';
function Layout({children}) {
  return (
    <div>
     
      <Navbar/>
      {children}
      <Footer/>
      
    
    </div>
  );
}

export default Layout;
