import React from 'react';

import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

import Layout from './HOC/Layout';
import Notfound from './Components/Notfound';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Category from './Components/Category';
import BlogDetails from './Components/BlogDetails';
import Footer from './Components/Footer';
import About from './Components/About';
import SignUp from './Components/SignUp';
import PrivacyTerms from './Components/PrivacyTerms';
import './App.css';
// <Route exact path='/category/:id' element={<Category />} />
function App() {
  return (
    <div className="App">
      <Router>
      <div className="wrapper">
        <div className="content">
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route exact path='/blog' element={<Blog />} />

                <Route exact path='/category/:id' element={(props) => <Category {...props} />} />
               
                <Route exact path="/blog/:id" element={(props) => <BlogDetails {...props}/>} />

                <Route exact path='/sign up' element={<SignUp/>} />
                <Route exact path='/Privacy Terms' element={<PrivacyTerms/>} />
                <Route element={< Notfound />} />
              </Routes>
            </Layout>
            </div>
            </div>
            <Footer />
      </Router>
     
    </div>
  );
}

export default App;
