import './App.css'; 
import About from './component/about/about';
import Slide from './component/carousel/carousel';
import Education from './component/education/education';
import Interest from './component/interest/interest';
import Sidebar from './component/sidebar/sidebar';

function App() {
  return (
    <div className="App">
        <div className= "profile">
          <Sidebar />
        </div>
        <div className='main'>
          <Slide />
          <About />
          <Interest />
          <Education />
        </div>
    </div>
  );
}

export default App;
