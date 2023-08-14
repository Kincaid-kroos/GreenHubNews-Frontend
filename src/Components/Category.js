import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';



const Category = (props) => {
  //list of news articles fitting the category
    const [newsart,setNewsArt] = useState([]);
    const[currentCategory,setCurrentCategory] = useState('');

    useEffect(() => {
      const category = props.match.params.id;
      const config = {
        headers: {
             'Content-Type':'application/json'
        }
      }
      const fetchDataCategory = () => {
        axios.post('http://127.0.0.1:8000/api/Blogs/category',{category},config)
        .then( res =>{
          console.log(res.data)
          setNewsArt(res.data)
        }
        )
        .catch( err => err.message)
      }
       fetchDataCategory()
    },[props.match.params.id])

    //function that will display the newsArticles
    const getNewsArticles = () => {
      if (Array.isArray(newsart) && newsart.length > 0) {
        return newsart.map((article) => (
          
        <div className="row mb-2"> 
         <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" key={article.id}>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">{Capitalize(article.category)}</strong>
              <h3 className="mb-0">{article.title}</h3>
              <div className="mb-1 text-body-secondary">{article.month} {article.day}</div>
              <p className="card-text mb-auto">{article.describtion}</p>
              <Link to={`/blog/${article.slug}`} className="icon-link gap-1 icon-link-hover stretched-link">
                Continue...
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={article.image} alt="img" height="250px" width="200px" />
            </div>
          </div>
          </div>
          </div>
        ));
      } else {
        // Handle the case when article is not an array or is empty
        return <p>No articles found.</p>;
        }
    }
    const Capitalize = ( w => {
      //if we pass a word in our case w return ....bla blaa
      //w means for each 
      //the slice enables cont... with capitalizing the rest
      if(w)
           return w.charAt(0).toUpperCase() + w.slice(1)
          else;
            return '';
    }) 

  return (
    <div className='container mt-3'>
      <h3 className='display-4'>{currentCategory} News</h3>
      <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav nav-underline justify-content-between">
               <NavLink className="nav-item nav-link link-body-emphasis active" to="/category/world">World</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/technology">Technology</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/culture">Culture</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/business">Business</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/politics">Politics</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/environment">Environment</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/science" >Science</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/health">Health</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/travel">Travel</NavLink>
            </nav>
             </div>
             {getNewsArticles()}
    </div>
  )
}

export default Category