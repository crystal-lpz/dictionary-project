import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
export default function Dictionary(props) {
  const [keyWord, setKeyWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleSearchWord(event) {
    setKeyWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleSearchWord}
            placeholder="Search for a word"
            defaultValue={props.defaultWord}
          />
        </form>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
