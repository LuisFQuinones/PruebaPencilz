import logo from './sketchwhite.svg';
import './App.css';
import Footer1 from './footer1';

function App() {


  return (
    <div className="App">
      <img src={logo} className="logo" />
      <div className="welcome">Welcome</div>
      <div className='Building'>Building something different, something new.</div>
      <Footer1/>
    </div>
  );
}

export default App;
