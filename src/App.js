import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './resources.json';

function App() {
  let resourceList;

  if (data !== undefined && data.length > 0) {
    resourceList = data.map((element, index) => {
      return (
        <article id={"card" + index} index class="card">
          <h2>{element.name}</h2>
          <p>{element.description}</p>
          <a href={element.link} target="_blank" rel="noreferrer noopener">{element.link}</a>
        </article>
      );
    });
  }
  return (
    <div className="App">
      <Header />
      <section className="grid">
        {resourceList || "Loading"}
      </section>
      <Footer />
    </div>
  );
}

export default App;
