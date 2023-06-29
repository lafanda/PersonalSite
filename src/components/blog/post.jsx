import React from "react";
import {format} from 'date-fns'
import { Link } from "react-router-dom";

function Post({_id, title, summary, content, image, createdAt}){

    return(<div className="blog-post">
               
    <Link className="post-details" to = {`/post/${_id}`}>
                  
      <div className='row'>
            <div className="col-sm-6 test2">
              <img className='read-post-cover' src={'http://localhost:4000/' + image} alt="" />
            </div>
            <div className="col-sm-6">
              <h1>{title}</h1>
              <h3 className='summary'>{summary}</h3>
              <h3 className="date">{format(new Date(createdAt), 'MMM d, yyyy')}</h3>
            </div>
          </div>
    </Link>
    
  </div>
  )
}

export default Post