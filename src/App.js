import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Container/Pages/Home';
import Contact from './Container/Pages/Contact';
import Services from './Container/Pages/Services';
import About from './Container/Pages/About'
import Footer from './Container/Pages/Footer'
import Navbar from './Container/Components/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
<Switch>
       <Route path='/' component={Home} exact />
       <Route path='/about' component={About} exact />
       <Route path='/contact' component={Contact}  /> 
       <Route path='/services' component={Services}  /> 
       <Route component={Home}/>
</Switch>
<Footer/>
     </div>
  );
}

export default App;
