import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const BlogDetails = (props) => {
  //state to handle news content being fetched from backend
  const[news,setNews] = useState([])


  

  useEffect(() => {
    const fetchBackendSlug = () => {
      const slug = props.match.params.id;
      axios.get(`http://127.0.0.1:8000/api/Blogs/${slug}`)
      .then(res => {
        console.log(res.data)
        setNews(res.data);
      })
      .catch(error => 
        error.message
      );
    }
  fetchBackendSlug()
  },[props.match.params.id])

  
  const createNews = () => {
    return { __html: news.content };
  };
  // capitalizing 
  const Capitalize = (w => {
    if (w)
    return w.charAt(0).toUpperCase()+ w.slice(1)
    else
    return ''
  })
  

  return (
    <div className='container mt-3'>
        <h1 className='display-2'>{news.title}</h1>
        <h2 className='text-muted mt-3'>Category: {Capitalize(news.category)}</h2>
        <h4>{news.month} {news.day}</h4>
        <div className='mt-5 mb-5' dangerouslySetInnerHTML={createNews}/>
        <hr />
        <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Go Back</Link></p>
    </div>
  )
}
export default BlogDetails