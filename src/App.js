import './App.css';
import {details} from './data';
import Testimonial from './components/Testimonial';
function App() {
  
  return (
    <div className="main_body">
      <div className="main_data">
      <h1>Our Testimonials</h1>
      <div className="underline"></div>
      <Testimonial details={details}></Testimonial>
      </div>
    </div>
  );
}


export default App;
