import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './logo.png';

const Home = () => {
const [subscribe, setSubscribe] = useState(false)

const handleSubscribeBtn = (e) => {
  e.preventDefault()
  setSubscribe(!subscribe)
    setTimeout(() => {
    setSubscribe(false);
  }, 1500);
};


  return (
    <div className='Home'>
      <div className='searchbar'>
        <form > 
         <input className='inputsearch' type='text' placeholder='search article'/>
        </form>
        </div>

        <div class="container">
          <div className="jumbotron mt-5">
            <h1 className="display-4 ">Welcome To GreenHubNews <img src={logo} alt='' style={{ width: '50px', height: '35px' }} /></h1>
            <p className="lead">Get the latest Trends and News from across the Globe</p>
            <hr className="my-4" />
            <p className="lead mb-0">
            <Link to='/blog' className="btn btn-success btn-lg">Checkout the latest news</Link>
           </p>
          </div>
        </div>
        
        <div className='container'>
          <h1>Trending</h1>
        </div>
   
  
        
        <section className="containerr full-width">
          <form className="centered-form">
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
             <div className="form-group">
             <label className="form-label">Email address</label>
            <input type="email" placeholder="krooskincaid314@gmail.com" className="form-input" />
          </div>
          <button  className="submit-button" onClick={handleSubscribeBtn}>Subscribe</button>
          </form>
          <div  className='popupp'>
          {subscribe && (<div className='popup'>
         <p className='styling-popup'>Thanks for Subscribing!</p>
     </div>)}
     </div>
         </section>
        

      
   
    </div>  
  )
}

export default Home