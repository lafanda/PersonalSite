import React from 'react';


function About() {
    return  (
<section id="aboutMe">
  <div className="row">
    <h1 className="heading">About Me</h1>
  </div>
  <div className="row" style={{ margin: "10px 25px 10px 25px" }}>
    <div id="about-text">
      <img src="images/face.png" alt="" style={{ width: "250px", paddingRight: "25px", float: "left" }} />
      <br />
      Hi, My name is Yazan.
      I'm a practicing developer from Southern Ontario, Canada. I'm passionate about learning and growing in the field of technology, and I am constantly seeking new opportunities to do so. While I may not be an expert, I believe that the journey of learning is just as valuable as the destination.
      On this website, a blog that I've been working on, where you can find updates on my life and thoughts on various topic. If you're interested in following my journey, I'd love to have you along for the ride.
    </div>
  </div>
</section>

  );
}

export default About;
