import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [typedText, setTypedText] = useState("");
  let i = 0;
  const txt = "Practicing Developer and student at the University Of Windsor.";
  const speed = 44;

  const typeWriter = () => {
    if (i < txt.length) {
      if (i <= 10) {
        setTypedText((prevText) => prevText + txt.charAt(i));
      } else if (i > 10 && i < 20) {
        setTypedText((prevText) => prevText + txt.charAt(i));
      } else if (i >= 20 && i < 39) {
        setTypedText((prevText) => prevText + txt.charAt(i));
      } else if (i >= 39) {
        setTypedText((prevText) => prevText + txt.charAt(i));
      }

      i++;
      setTimeout(typeWriter, speed);
    }
  };

  useEffect(() => {
    typeWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="welcome">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="landing-title"><strong>Hi There </strong><span className="wave" role="img" aria-label="hand">👋🏽</span></h1>
          <h1 className="landing-subtitle "> Nice Too Meet You. <br /> I'm Yazan</h1>
          <br />
          <h5 className="landing-typedText">
            <span id="planeText1">{typedText.slice(0, 10)}</span>
            <span id="blueText">{typedText.slice(10, 20)}</span>
            <span id="planeText2">{typedText.slice(20, 39)}</span>
            <span id="redText">{typedText.slice(39)}</span>
          </h5>
        </div>
        <div className="col-lg-5">
          <img className="portrait" src="images/pfp.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
