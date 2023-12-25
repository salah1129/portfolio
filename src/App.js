import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const welcome = [
    {
      title: "Welcome",
      description : "Greetings! I'm a passionate Full Stack Developer well-versed in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a keen eye for detail and a commitment to delivering high-quality solutions, I specialize in crafting dynamic and scalable web applications. Join me on a journey where innovation meets functionality, and together, let's build the next generation of digital experiences!",
    }
  ]
  const projectsData = [
    {
      title: 'Memory Game',
      view : "View project",
      description: "Exercise your mind with the Memory Game, a thrilling challenge of recall and concentration. Test your memory prowess through various levels of difficulty and track your progress over time. With engaging visuals and seamless gameplay, this game is not just entertainment; it's a brain-boosting experience.",
      link: 'https://salah1129.github.io/Memory-game/',
    },
    {
      title: 'Typing Speed Test Game',
      view : "View project",
      description: " Sharpen your typing skills with the Typing Speed Test Game. Whether you're a seasoned typist or just starting, this game adapts to your skill level, providing an enjoyable and educational typing journey. Challenge yourself, compete with friends, and watch your typing speed and accuracy soar.",
      link: 'https://salah1129.github.io/Typing-Speed-Test-Game/',
    },
    {
      title: 'Quiz Application',
      view : "View project",
      description: " Embark on a knowledge quest with our Quiz Application. Dive into a diverse range of topics and test your wits against a variety of questions. Whether you're a trivia enthusiast or a curious learner, this quiz app offers a stimulating way to expand your knowledge in an interactive and fun environment.",
      link: 'https://salah1129.github.io/Quiz-app/',
    },
    {
      title: 'Rock-Paper-Scissors-Game',
      view : "View project",
      description: "Experience the classic Rock, Paper, Scissors game in a digital format! Challenge your friends or test your luck against the computer. This interactive game brings the timeless fun of Rock, Paper, Scissors to your fingertips. Enjoy the excitement of decision-making and see who comes out victorious in this iconic game.",
      link: 'https://salah1129.github.io/Rock-Paper-Scissors-Game/',
    },
    {
      title: 'Note App',
      view : "View project",
      description: "Organize your thoughts seamlessly with the Note App. Capture ideas, jot down important tasks, and keep your notes in one accessible place. With an intuitive interface and powerful features, this app is designed to enhance your productivity and ensure that your thoughts are always within reach.",
      link: 'https://salah1129.github.io/Note-app/',
    },
    {
      title: 'Tip-calculator',
      view : "View project",
      description: "The Tip Calculator calculates tip amount for various percentages of the cost of the service, and also provides a total amount that includes the tip.",
      link: 'https://salah1129.github.io/Tip-calculator/',
    },
    {
      title: 'Age calculator',
      view : "View project",
      description: "Discover your age with precision using the Age Calculator.  this user-friendly tool provides accurate results in an instant. Simply input your birthdate, and let the Age Calculator do the rest. Stay informed about your age and celebrate milestones with ease.",
      link: 'https://salah1129.github.io/Age-calculator/',
    }
  ];

  const [selectedProject, setSelectedProject] = useState(welcome[0]);

  const handleProjectClick = (index) => {
    setSelectedProject(projectsData[index]);
  };

  return (
    <div className="App">
      <div className='content'>
      <div className="header">
        <div className="logo">sb</div>
        <div className="links">
            <div>
            <a href="mailto:salahbelhabchi00@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            </div>
            <div>
            <a href="https://github.com/salah1129" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-github"></i>
            </a>

            </div>
            <div>
              <a href="https://www.linkedin.com/in/salah-belhabchi-96a24b250/" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-linkedin"></i>
              </a>
            </div>
        </div>

      </div>
      <div className="main">
        <div className="left" style={{paddingTop: selectedProject === welcome[0] ? "50px" : "60px"}}>
            <h1 style={{ fontSize: selectedProject === welcome[0] ? '60px' : '' }}>
              {selectedProject.title}
            </h1>
          <div>
          <p>{selectedProject.description}</p>
          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className='link'>
          <p className='link'> {selectedProject.view} </p>
          </a>
          </div>
          
        </div>
        <div className="right">
          <h1>Projects</h1>
          <ul>
            {projectsData.map((project, index) => (
              <li key={index} onClick={() => handleProjectClick(index)}>
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div>&copy;2023 salahbelhabchi.com</div>
      </div>
      </div>
      
    </div>
  );
}

export default App;