import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
<Navbar />
      <Routes>
        <Route path="" element ={<Home />} />
        <Route path="About" element= {<About />} />
        <Route path="Products/*" element= {<Products />} >
          <Route path=":id" element= {<Product />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;

// / is not mandatory
// for nested info we need 3 changes
// 1.Parent route should accept all info from url using *.
// 2. Wrap Child with parent and remove duplicate path info
// 3. Use Outlet tag on where we want to show child info 