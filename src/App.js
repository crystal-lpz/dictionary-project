import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h2>Dictionary</h2>
      <div className="question">What word do you want to look up?</div>
      <Dictionary defaultWord="sunset" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://dainty-phoenix-936391.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Crystal Lopez
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/crystal-lpz/dictionary-project.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}
