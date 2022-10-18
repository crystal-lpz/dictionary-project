import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
export default function Dictionary(props) {
  const [keyWord, setKeyWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhoto(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelApiKey = `563492ad6f91700001000001084aebcbd4ae46d3b401cc18421c4904`;
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelsResponse);
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
      <div className="container">
        <div className="dictionary">
          <section>
            <div className="question">What word do you want to look up?</div>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearchWord}
                placeholder="Search for a word"
                defaultValue={props.defaultWord}
              />
            </form>
          </section>
          <Results results={result} />
          <Photos photos={photo} name={result} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
