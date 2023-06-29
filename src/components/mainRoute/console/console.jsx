import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Book from './book';
import './consol.css'


var currentDirectValue = 0;

function Console() {
  const [currentDirect, setCurrentDirect] = useState('Desktop');
  const [folderImages, setFolderImages] = useState([
    { src: 'images/folder.png', title: 'Hobbies', onClick: () => handleClick(1) },
    { src: 'images/folder.png', title: 'Projects', onClick: () => handleClick(2) },
    { src: 'images/folder.png', title: 'Experiences', onClick: () => handleClick(3) },
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
    if (currentDirectValue === 1 || currentDirectValue === 2 || currentDirectValue === 3) {
      handleClick(0)
    }
    else if (currentDirectValue > 1.3 && currentDirectValue < 2) {
      handleClick(1.3);
    }
    else {
      handleClick(Math.floor(currentDirectValue));
    }
  }
  const handleClick = async (i) => {
    const root = createRoot(document.getElementsByClassName("test")[0]);
    switch (i) {

      case 0:
        currentDirectValue = 0;
        setCurrentDirect('Desktop');
        setFolderImages([
          { src: 'images/folder.png', title: 'Hobbies', onClick: () => handleClick(1) },
          { src: 'images/folder.png', title: 'Projects', onClick: () => handleClick(2) },
          { src: 'images/folder.png', title: 'Experiences', onClick: () => handleClick(3) },
        ]);
        break;

      case 1:
        document.getElementsByClassName("consoleTitle")[0].innerText = '';
        document.getElementsByClassName("consoleText")[0].innerText = '';
        currentDirectValue = 1;
        setCurrentDirect('Desktop/Hobbies');
        setFolderImages([
          { src: 'images/file.png', title: 'Lifting', onClick: () => handleClick(1.1) },
          { src: 'images/file.png', title: "Programing", onClick: () => handleClick(1.2) },
          { src: 'images/folder.png', title: "Reading", onClick: () => handleClick(1.3) },
        ]);

        break;

      case 1.1:
        currentDirectValue = 1.1;
        setCurrentDirect('Desktop/Hobies/Weight_Lifting.txt');
        document.getElementsByClassName("consoleTitle")[0].innerText = "Weight Lifting 💪"
        document.getElementsByClassName("consoleText")[0].innerText = '\nGrowing up, fitness didn\'t play a significant role in my life. While I wasn\'t unhealthy, I certainly wasn\'t the fastest in my class. It didn\'t bother me much until around 9th grade when I failed the basic push-up test in gym class. That\'s when I realized I needed to at least acknowledge health. My fitness journey began with the simple goal of becoming healthier.\n\n At first, I started with 5-minute ab circuts, but as time went on, I gradually transitioned to a full-blown calisthenic workout routine. However, as I began to grow tired of calisthenics, I decided to take things further and joined a gym in 2020.\n\n   Since then, I\'ve been dedicatedly training six days a week. Engaging in regular exercise not only improves my physical health but also has a profound impact on my mental well-being. Working out pushes me to maintain consistency in all areas of my life. It has become an integral part of my routine, helping me achieve balance and focus in both my physical and mental endeavors.';
        setFolderImages([]);
        break;

      case 1.2:
        currentDirectValue = 1.2;
        setCurrentDirect('Desktop/Hobies/Programming.txt');
        document.getElementsByClassName("consoleTitle")[0].innerText = "Programing 👨‍💻"
        document.getElementsByClassName("consoleText")[0].innerText = "\nPrograming has been a game-changer in my life, and I can still vividly remember the moment it all began. I was in my 9th-grade enriched math class when our our schools Python teacher stepped in and urged us toi all take his class the following year. At first, I didnt think i was up for it, the idea of learning a whole new 'language' (whatever that meant) seemed impossible to me. But when I got home and told my older brother about what happened, his enthusiasm was contagious. He insisted that I take the class, claiming that it would somehow 'change my world-views'. Trusting his words, I took a leap into the unkown and have never looked back.\n\n   Coding became a way to access a level of creativity I never knew existed inside of me. I used to beleive creativity was reserved for painters and musicians; but programing became my personal canvas for bringing ideas to life. Starting with simple Python scripts to automate basic tasks, I marveled at the sense of accomplishment when lines of code transformed into practical solutions. Inspired by this newfound power, I took another highschool class on Java. I know have expanded my array of skills to include C, JavaScript, HTML/CSS, and various web development frameworks such as React and Node.js.\n\nCreating has become my way of life, and programming is the key that unlocks boundless possibilities. It's not merely about writing lines of code; it's about watching my ideas go from a mindless thought to a fully functioning application. Programming has shifted my entire perspective, infusing me with a profound sense of purpose. I am eternally grateful for embracing this journey because it has shaped the course of my life in ways I could have never imagined."
        setFolderImages([]);
        break;
      case 1.3:
        currentDirectValue = 1.3;
        root.render();
        setCurrentDirect('Desktop/Hobbies/Reading');
        setFolderImages([
          { src: 'https://books.google.ca/books/content?id=1rW-QpIAs8UC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73yi1u9fYuoQUKTa5gYtYxUaDQui3e_TZxXoImUdWv1mKEiG-NGU1-s9f7OJYNE1F6Udl8OSanCXhq3fXLK1slL0qExujWdjk5GNNSKThKZFERBkXxkNeoPVc9KGWxmkK75R8Pc', onClick: () => handleClick(1.301) },
          { src: 'https://books.google.ca/books/content?id=iUxbngEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70ZtPFSk1lb6BQ0rpR6uhPQ9ShBbtabNfw2WHs86psl2u2C5mL_NNAUzzN-qyqy2chkVbOyjFEMT6AtA8SCXKoi4JGlgU6F0APcgAcq5IxRRXwzdERa7jd91GFVVx0o9_n2YTwp', onClick: () => handleClick(1.302) },
          { src: 'https://books.google.ca/books/content?id=rJqpD2VYoLwC&printsec=frontcover&img=1&zoom=1&h=160&stbn=1', onClick: () => handleClick(1.303) },
          { src: 'https://books.google.ca/books/content?id=wr3lCEKeuXAC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73A2vxfUGXHF3w3ApzkUXVZBXuSjbFAfd31u1Za-AFdFH9mND9P8cBzeeMYtL27d2IACG2c4GE-ImFXd8zWocC-HZ6ZDrV1Axki6VKzzeN3GW6mb3iYr7wJlkTTrXAzDGW1RAxA', onClick: () => handleClick(1.304) },
          { src: 'https://books.google.ca/books/content?id=glufswEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73YnEngyJPdXg1nfB322sDvUDXPUcBtDn2VNx4DOvqcFlX3G20ZgXYj5B6O11KIpOATRLefF2aOLqPrsv27zuIEyroLqLJ0UPAsz3ANAMIAlTWoFbifajY4WBfx9wuIPYiwz11K', onClick: () => handleClick(1.305) },
          { src: 'https://books.google.ca/books/content?id=YKPt96ZdidYC&printsec=frontcover&img=1&zoom=1&h=160&stbn=1', onClick: () => handleClick(1.306) },
          { src: 'https://books.google.ca/books/content?id=sQYqRCIhFAMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71P2tHMlT69FCGLPRuSspPgLJmkEAki6HFA3K9W02xTJ0r8IB7En8jTMFKrjANAG-fK5gRnVOwq0Vr0OOO_KFexhe748ga8bHziTOPLmfiTsCerg-RyXHBYj21KFoS35_-kbdLV', onClick: () => handleClick(1.307) },
          { src: 'https://books.google.ca/books/content?id=Bua2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&h=160&stbn=1', onClick: () => handleClick(1.308) },
          { src: 'https://books.google.ca/books/content?id=u_oQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72S6El2NgnmseZ0h01GjcsbGYYpaSTNhUoWSd7Hzfrz_jTjKuuUCJBp5QB5IbHtENTbOXade1wQKVJ68uFvQzQ5ui5ZRlD_JNGm-5PIwP0bGJFOLMY56f_rfiIIRgZiCDyFDs5R', onClick: () => handleClick(1.309) },
          { src: 'https://books.google.ca/books/publisher/content?id=oJDVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72RpQCtez4rdsfu7Z0GCADuIJIRN0x8jzoYkAdzH1YOY7pEoCLRAZdo5ggOlaDo_WD7AfXgWbR1uCAInA4TrKr4iq20Tb4uwTwXc_Z9sVe02efvnZgVZADy5tHpg0oWI2AnQzdT', onClick: () => handleClick(1.310) },
          { src: 'https://books.google.ca/books/content?id=9jhi2bY3GkAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73x9BVegJfDmVSRpgcPyTCGeRm1MeC1vNizlMlM1uEBAaEOox4HHSd_GqfUCqqD7joh-V-wtDIkqWYpOKGfr_Rp9DorXzURWzEpYllYT8GUzSabHw9I77OhjeLDo0yQeR-71Fjz', onClick: () => handleClick(1.311) },
          { src: 'https://books.google.ca/books/content?id=ypEH54P1SLcC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70TErzIrIHOtb319V4FTvuey3-dYL-PaYfNUAUuII5-4pe6ladN41LCxy6iZlPsde0TzGhw7M0-Hho5wp88O4OYPb97CfLKNavQ7yLMUNtrROfy04G1HRy6ZiI9IoVOs9y6njTx', onClick: () => handleClick(1.312) },
          { src: 'https://books.google.ca/books/content?id=-SKOU7tlAlcC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Wca7XgA_PhJazDaxKS0tyTCZhM4hx2zdpCDC465PCrJefKKkWeZ45EP9VqKYt-d_43mNE8L1p4WcHzIa9KDnjo5ff2uB_qEzN6aFT5QylD8Ea_K5taCny0awV3fe37oJGyqHc', onClick: () => handleClick(1.313) },
          { src: 'https://books.google.ca/books/content?id=j-u9oAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73065lMOvfB6oy2M31RbYwxWKspX-1_cibcXuHZJj1aAMHNSo1Nj_ef8CwBk8rXt-qaK9uxGRoBjI35b6Sk_GsgHrIUgaUWgn6e556y_NA13-YODwLag67nnOEKmE9vUUkBZpOK', onClick: () => handleClick(1.314) },]);
        break;

      case 1.301:
        currentDirectValue = 1.301;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9352663721" rating='6' />);
        break;

      case 1.302:
        currentDirectValue = 1.302;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9781451639612" rating='7.5' />);
        break;

      case 1.303:
        currentDirectValue = 1.303;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9781401919276" rating='7' />);
        break;

      case 1.304:
        currentDirectValue = 1.304;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9780091900212" rating='8' />);
        break;

      case 1.305:
        currentDirectValue = 1.305;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="1973411520" rating='8' />);
        break;

      case 1.306:
        currentDirectValue = 1.306;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9780679723004" rating='7.5' />);
        break;

      case 1.307:
        currentDirectValue = 1.307;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9781577313113" rating='8.5' />);
        break;

      case 1.308:
        currentDirectValue = 1.308;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="1949759229" rating='9' />);
        break;
      case 1.309:
        currentDirectValue = 1.309;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9781101657775" rating='8' />);
        break;
      case 1.310:
        currentDirectValue = 1.310;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9781612834627" rating='7' />);
        break;
      case 1.311:
        currentDirectValue = 1.311;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="0811220079" rating='9' />);
        break;
      case 1.312:
        currentDirectValue = 1.312;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9780989175913" rating='9' />);
        break;
      case 1.313:
        currentDirectValue = 1.313;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="9780982923009" rating='6' />);
        break;
      case 1.314:
        currentDirectValue = 1.314;
        setCurrentDirect('Desktop/Hobbies/Reading/...');
        setFolderImages([]);
        root.render(<Book bookISBN="1499637101" rating='6' />);
        break;
      case 2:
        currentDirectValue = 2;
        setCurrentDirect('Personal Projects');
        setFolderImages([
          { src: 'images/file.png', title: 'Trials.zip', onClick: () => downloadZipFile("Yazan's Casino.zip", 'yazansCasino.zip') },
          { src: 'images/file.png', title: 'Casino.zip', onClick: () => downloadZipFile('test', 'test') },
          { src: 'images/file.png', title: 'Tron.zip', onClick: () => downloadZipFile('test', 'test') },
          { src: 'images/file.png', title: 'McBot', onClick: () =>downloadZipFile('https://discord.com/api/oauth2/authorize?client_id=1121215065241157644&permissions=8&scope=bot%20applications.commands', 'discordbot') },
        ]);
        break;

      case 3:
        document.getElementsByClassName("consoleTitle")[0].innerText = '';
        document.getElementsByClassName("consoleText")[0].innerText = '';
        currentDirectValue = 3;
        setCurrentDirect('Desktop/Experience');
        setFolderImages([
          { src: 'images/file.png', title: 'Altura', onClick: () => handleClick(3.1) },
          { src: 'images/file.png', title: 'eth Toronto', onClick: () => handleClick(3.2) },
          { src: 'images/file.png', title: 'GDC', onClick: () => handleClick(3.3) },
        ]);
        break;
        case 3.1:
          currentDirectValue = 3.1;
          setCurrentDirect('Desktop/Experience/Altura.txt');
          document.getElementsByClassName("consoleTitle")[0].innerText = "Altura"
          document.getElementsByClassName("consoleText")[0].innerText = "\nAltura is an innovative WEB 3.0 gaming infrastructure company that was founded by my brother, Majd, and his three friends. The inception of this company is largely due to my brother's entrepreneurial spirit and great timing during the crypto bull run of 2020.\n\n Altura has served as my gateway into the dynamic world of code. Initially, I joined the company by creating social media posts, as Altura was still in its early stages and couldn't yet afford a full marketing team. I later took on the additional responsibility of handling customer support as I knew much of the company's history and was still too young to be handeling any development reposibilities.\n\n Fast forward to April 2023 I offically took a role of an intern developer. As an intern, my current focus primarily revolves around refactoring and writing tedious code. While my tasks are currently elementary, I am confident that I will swiftly prove my capabilities and earn opportunities to tackle more intricate and demanding assignments.\n\nWorking at Altura has been an amazing experience, immersing me in a professional environment where I can witness the tangible impact of code firsthand. It has provided me with an opportunity to bridge my passion for gaming and technology.";
          setFolderImages([]);
          break;
          case 3.2:
            currentDirectValue = 3.2;
            setCurrentDirect('Desktop/Experience/ethToronto.txt');
            document.getElementsByClassName("consoleTitle")[0].innerText = "ETH Toronto"
            document.getElementsByClassName("consoleText")[0].innerText = "\nETH Toronto was my first major event and hackathon experience. It was an incredibly eye-opening encounter that showed me just how little I really knew. The event hosted dozens of speakers, many of which inspired me to continue on my journey in the tech space.\n\n Being around thousands of like minded indivudals was somthing I had never experinced, nor really knew I needed. It showed me that theres still so much to learn and made me want to continue seeking out other events and hackathons.";
            setFolderImages([]);
            break;
            case 3.3:
              currentDirectValue = 3.3;
              setCurrentDirect('Desktop/Experience/GDC.txt');
              document.getElementsByClassName("consoleTitle")[0].innerText = "Game Developers Confrence"
              document.getElementsByClassName("consoleText")[0].innerText = "\nThe 2023 San Francisco Game Developers Confrence was single handedly one of the best experinces i've ever had. I Thankfully got to go thanks to my intern position at Altura. At the event i had the privlage of manning the Altura booth, answering any questions from the hundreds of people who were casually exploring the venue. In the 3 days the event was open to the public, I spoke to well over 500 people, which taught interpersonal and speaking skills that are now pricless to me.\n\n The main GDC event only lasted 3 days, but there was still more going on the area. The San Francisco area continued to host a number of seminars, debates, and other activities in the days that followed.";
              setFolderImages([]);
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
          <div className="test"></div>
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
          <div className='consoleContent'>
            <h1 className='consoleTitle'>
            </h1>
            <p className='consoleText'>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Console;
