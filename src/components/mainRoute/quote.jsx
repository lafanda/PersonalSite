import React from 'react';

function Quote(props) {
    return (
      <div>
        <hr style={{width: "80%", margin: "auto" ,paddingBottom: "15px"}}/>
        <h3 className="quote">{props.text}</h3>
        <hr style={{width: "60%", margin: "auto",marginTop: "15px"}}/>
      </div>
    );
  }

export default Quote


