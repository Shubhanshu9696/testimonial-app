import { useEffect } from 'react';
import './App.css';
import { Testimonials } from './components/Testimonials.jsx';
import reviews from './data.jsx'
import axios from 'axios';
function App() {


  // const fetchData = async () => {
  //   const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ae487dfb363744189c21694c574538c6');
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <div className='h-screen flex items-center justify-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='heading'>Our Testimonials</h1>
        <div className='underline mx-auto mb-10'></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
