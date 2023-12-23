import React, { useState } from 'react';

import './consol.css'


var currentDirectValue = 0;

function Console() {
  const [redirect, setRedirect] = useState(false)
  const [currentDirect, setCurrentDirect] = useState('Desktop');
  const [folderImages, setFolderImages] = useState([
    { src: 'images/folder.png', title: 'School', onClick: () => handleClick(1) },
    { src: 'images/folder.png', title: 'Personal', onClick: () => handleClick(2) },
  
  ]);

  function downloadZipFile(url, filename) {
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

  const backClick = (currentDirectValue) => {
    if (currentDirectValue === 1 || currentDirectValue === 2 ) {
      handleClick(0)
    }
    else {
      handleClick(Math.floor(currentDirectValue));
    }
  }

  const handleClick = async (i) => {
    switch (i) {
      case 0:
        currentDirectValue = 0;
        setCurrentDirect('Desktop');
        setFolderImages([
          { src: 'images/folder.png', title: 'School', onClick: () => handleClick(1) },
          { src: 'images/folder.png', title: 'Personal', onClick: () => handleClick(2) },
         
        ]);
        break;

      case 1:
        currentDirectValue = 1;
        setCurrentDirect('Desktop/Hobbies');
        setFolderImages([
          { src: 'images/file.png', title: 'Trials.zip', onClick: () => downloadZipFile("Yazan's Casino.zip", 'yazansCasino.zip') },
          { src: 'images/file.png', title: 'Casino.zip', onClick: () => downloadZipFile('test', 'test') },
          { src: 'images/file.png', title: 'Tron.zip', onClick: () => downloadZipFile('test', 'test') },
        ]);

        break;
      case 2:
        currentDirectValue = 2;
        setCurrentDirect('Personal Projects');
        setFolderImages([
          { src: 'images/file.png', title: 'McBot', onClick: () =>downloadZipFile('https://discord.com/api/oauth2/authorize?client_id=1121215065241157644&permissions=8&scope=bot%20applications.commands', 'discordbot') },
          { src: 'images/file.png', title: 'My Blog', onClick: () =>downloadZipFile('https://discord.com/api/oauth2/authorize?client_id=1121215065241157644&permissions=8&scope=bot%20applications.commands', 'discordbot') },
          { src: 'images/file.png', title: 'To-Do List App', onClick: () =>downloadZipFile('https://discord.com/api/oauth2/authorize?client_id=1121215065241157644&permissions=8&scope=bot%20applications.commands', 'discordbot') },
        ]);
        break;

    
      default:
        console.log("error");
        break;
    }
  };


  return (
    <section id="consoleBox">
      <div className="consoleContainer">
        <div className="consoleDots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <p className='consoleDirectory' style={{ textAlign: "center" }}>{currentDirect}</p>
        <p className='consoleBack' style={{ textAlign: "right" }} onClick={() => backClick(currentDirectValue)}><i class="fa-solid fa-circle-chevron-left"></i></p>
        <div className='consoleContent'>
        </div>
        <div className="consoleFlexbox">
          {folderImages.map((image, index) => (
            <div className='folderDiv'>
              <img
                key={index}
                className="folder"
                src={image.src}
                alt=""
                onClick={image.onClick}
              />
              <p className='folderTitle'
                key={index}>
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Console;
