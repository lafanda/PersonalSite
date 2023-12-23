import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { format } from 'date-fns'

function ReadPost() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch post");
        }
      })
      .then((postInfo) => {
        setPostInfo(postInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="outerBody">
     
    <div className='read-post-body'>
      
      {postInfo && (
        <div>
          <div className='row'>
            <div className="col-sm-6 test">
              <img className='read-post-cover' src={`http://localhost:4000/${postInfo.image}`} alt="" />
            </div>
            <div className="col-sm-6">
              <h1>{postInfo.title}</h1>
              <h3 className='summary'><span className="summary-span">summary:</span><br />{postInfo.summary}</h3>
              <h3 className="date">published: {format(new Date(postInfo.createdAt), 'MMM d, yyyy')}</h3>
            </div>
          </div>
          <div className='read-post-container row'>
            <div className='read-post-content' dangerouslySetInnerHTML={{ __html: postInfo.content }} />
          </div>
        </div>
      )}

    </div>
    <Link to = '/blog' className="backBtn"><i class="fa fa-chevron-circle-left"> </i>Back To The Blog</Link>
    </div>
  );
}

export default ReadPost;
