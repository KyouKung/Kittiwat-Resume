function Body() {
  return (
    <body className="bodyContainer">
      <div className="profile">
        <div className="profile-detail">
          <div className="profile-detail-name">
            <p>Hi!</p>
            <h2>
              I'm Kittiwat Choocheep. <br /> a Full Stack Developer.
            </h2>
          </div>
          <div className="profile-detail-info">
            <p>
              Frontend developer based in tehran, Iran. I am coding with a clean
              and beautiful problem solving in mind.
            </p>
          </div>
          <div className="profile-detail-icon">
            <p>Follow me</p>
          </div>
          <button className="sendRequest">Send Request</button>
          <button className="downloadCV">Download CV</button>
        </div>
        <div className="profile-img">
          <img src=""></img>
        </div>
      </div>
      <div className="skill">
        <h1>Why Hire Me?</h1>
      </div>
      <div className="portfolio">
        <h1>Portfolio</h1>
      </div>
    </body>
  );
}

export default Body;
