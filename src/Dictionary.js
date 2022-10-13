import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
export default function Dictionary() {
  let [searchword, setSearchWord] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchWord} />
      </form>
      <Results results={result} />
    </div>
  );
}
