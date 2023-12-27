import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context';

function Blog() {
    const { userInfo } = useContext(UserContext);
    const email = userInfo?.email;
    const navigate = useNavigate();

    function redirect() {
        if (!email) {
            navigate('/login');
        } else {
            navigate('/blog');

        }
    }

    return (
        <section id="blog">
            <h1 className="heading">Join My Blog</h1>
            <div className="container-fluid">
            <div className="row">
                    <h3>Content Overview</h3>
                    <div className="col-lg-6">
                        <p>
                            Are you interested in gaining insight into the mind of a young developer
                            who is determined to find their place in the world?
                            With this blog, you'll have the opportunity to
                            read updates from yours truely. But my blog serves a
                            higher purpose than just providing updates on my life. I am using
                            this platform to hold myself accountable to my goals. Recently, I've
                            taken on several side projects, learning opportunities, and personal
                            goals.
                        </p>
                    </div>
                    <div className="col-lg-6 p2">
                        <p>
                            To ensure that I stay consistent with these goals, I've found
                            that journaling and tracking my progress is crucial. I 
                            tried to create a TikTok account for this purpose, but
                            found that the time required to produce content that I was proud of
                            took too much valuable time out of my day. So that led me to this!
                        </p>
                    </div>
                </div>
            </div>
            <div className="btnDiv">
                <button onClick={redirect} id="join" type="button" className="btn btn-secondary join">Show Blog Posts</button>
            </div>
        </section>
    );
}

export default Blog;
