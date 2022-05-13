import './App.css';

function App() {
  let resources = [{
    name: "Test",
    description: "A simple test",
    link: "https://github.com/JJKneiss/project-mousion"
  },
  {
    name: "Random User Generator",
    description: "A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.",
    link: "https://randomuser.me/"
  },
  {
    name: "Google Fonts",
    description: "N/A",
    link: "https://fonts.google.com/"
  },
  {
    name: "Font Awesome",
    description: "N/A",
    link: "https://fontawesome.com/icons"
  },
  {
    name: "CSS Tricks",
    description: "N/A",
    link: "https://css-tricks.com/"
  },
  {
    name: "CSS Grid Generator",
    description: "N/A",
    link: "https://cssgrid-generator.netlify.app/"
  },
  {
    name: "W3Schools",
    description: "N/A",
    link: "https://www.w3schools.com/"
  },
  {
    name: "Coolors",
    description: "N/A",
    link: "https://coolors.co/"
  },
  {
    name: "Font Awesome",
    description: "N/A",
    link: "https://fontawesome.com/icons"
  }];
  let resourceList;
  if (resources !== undefined && resources.length > 0) {
    resourceList = resources.map((element, index) => {
      return (
        <article class="card">
          <h2>{element.name}</h2>
          <p>{element.description}</p>
          <a href={element.link} target="_blank" rel="noreferrer noopener">{element.link}</a>
        </article>
      );
    });
  }
  return (
    <div className="App">
      <section className="grid">
        {resourceList || "Loading"}
      </section>
      <p>
        <a href="https://github.com/JJKneiss/project-mousion" target="_blank" rel="noopener noreferrer">
          Open-source code
        </a>
        <span> by the Project Mouseion contributors.</span>
      </p>
    </div>
  );
}

export default App;
