import "./App.css";
import Team from "./Components/team";
import Product from "./Components/Product";
import Layout from "./Components/layout";
import About from "./Components/About";
import Value from "./Components/Values";

function App() {
  return (
    <div>
      <Layout>
        <About/>
        <Value/>
        <Product/>
        <Team />
      </Layout>
    </div>
  );
}

export default App;
